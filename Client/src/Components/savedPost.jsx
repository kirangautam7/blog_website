import React, { useEffect } from "react";
import { useAuth, useUser } from "@clerk/clerk-react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { toast } from "react-toastify";
import PostListItem from "./PostListItem"; // Import the PostListItem component

const SavedPosts = () => {
  const { user } = useUser();
  const { getToken } = useAuth();

  const fetchSavedPosts = async () => {
    const token = await getToken();
    // console.log("Fetching saved posts with token:", token);

    const response = await axios.get(
      `${import.meta.env.VITE_API_URL}/users/saved`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    const savedPostIds = response.data;
    // console.log("Saved Post IDs:", savedPostIds);

    if (savedPostIds.length === 0) {
      return [];
    }

    // Fetch full post details for each saved post ID
    const postDetailsPromises = savedPostIds.map(async (postId) => {
      try {
        const postResponse = await axios.get(
          `${import.meta.env.VITE_API_URL}/posts/id/${postId}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        // console.log("Fetched Post Details:", postResponse.data);
        return postResponse.data;
      } catch (error) {
        console.error(
          `Error fetching post details for ID ${postId}:`,
          error.response?.data || error.message
        );
        return null; // Return null if fetching post details fails
      }
    });

    const postDetails = await Promise.all(postDetailsPromises);
    return postDetails.filter((post) => post !== null);
  };

  const {
    isLoading,
    error,
    data: savedPosts,
  } = useQuery({
    queryKey: ["savedPosts"],
    queryFn: fetchSavedPosts,
    enabled: !!user,
    onError: (error) => {
      console.error(
        "Error fetching saved posts:",
        error.response?.data || error.message
      );
      toast.error(`Error: ${error.response?.data?.message || error.message}`);
    },
  });

  useEffect(() => {
    if (savedPosts) {
      console.log("Saved Posts:", savedPosts);
    }
  }, [savedPosts]);

  if (!user) {
    return (
      <div className="text-center py-10">
        Please log in to view your saved posts.
      </div>
    );
  }

  if (isLoading) {
    return <div className="text-center py-10">Loading...</div>;
  }

  if (error) {
    return <div className="text-center py-10">Error fetching saved posts.</div>;
  }

  return (
    <div className="bg-blue-200 rounded-2xl ">
      <h1 className=" text-2xl  p-4">Saved Blog</h1>
      {savedPosts && savedPosts.length > 0 ? (
        <div className="space-y-4 p-10">
          {savedPosts.map((post) => (
            <PostListItem key={post._id} post={post} />
          ))}
        </div>
      ) : (
        <div className="text-center py-4">No saved posts found.</div>
      )}
    </div>
  );
};

export default SavedPosts;
