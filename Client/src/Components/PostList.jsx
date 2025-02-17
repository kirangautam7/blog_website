import React from "react";
import PostListItem from "./PostListItem";
import { useQuery, useInfiniteQuery } from "@tanstack/react-query";
// import axiosInstance from "../Utils/axiosConfig.js";
import InfiniteScroll from "react-infinite-scroll-component";
import { useSearchParams } from "react-router-dom";
import { useUser } from "@clerk/clerk-react";
import axios from "axios";

const fetchPosts = async (pageParam, searchParams) => {
  try {
    const searchParamsObj = Object.fromEntries([...searchParams]);
    const res = await axios.get(`${import.meta.env.VITE_API_URL}/posts`, {
      params: { page: pageParam, limit: 10, ...searchParamsObj },
    });
    return res.data;
  } catch (error) {
    console.error("Error fetching posts:", error);
    throw error;
  }
};

const PostList = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  // const { user } = useUser(); // Assuming you have user context here

  const {
    data,
    error,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isFetchingNextPage,
    status,
  } = useInfiniteQuery({
    queryKey: ["posts", searchParams.toString()],
    queryFn: ({ pageParam = 1 }) => fetchPosts(pageParam, searchParams),
    initialPageParam: 1,
    getNextPageParam: (lastPage, pages) =>
      lastPage.hasMore ? pages.length + 1 : undefined,
  });
  if (isFetching) return "Loading...";

  if (error) return "Something went wrong! refresh once";
  const allPosts = data?.pages?.flatMap((page) => page.posts) || [];
  return (
    <InfiniteScroll
      dataLength={allPosts.length}
      next={fetchNextPage}
      hasMore={!!hasNextPage}
      loader={<h4>Loading More Posts..</h4>}
      endMessage={
        <p style={{ textAlign: "center" }}>
          <b>All Posts Loaded</b>
        </p>
      }
    >
      {allPosts.map((post) => (
        <PostListItem key={post._id} post={post} />
      ))}
    </InfiniteScroll>
  );
};

export default PostList;
