import React, { useState } from "react";
import { Link } from "react-router-dom";
import Search from "./Search";
import { useUser } from "@clerk/clerk-react";
import SavedPost from "./savedPost.jsx"; // Import the SavedPosts component

const MainCategories = () => {
  const { user } = useUser();
  const [showSavedPosts, setShowSavedPosts] = useState(false);

  const toggleSavedPosts = () => {
    setShowSavedPosts(!showSavedPosts);
  };

  return (
    <div className="flex-row">
      <div className="hidden md:flex bg-white rounded-3xl xl:rounded-full p-4 shadow-lg items-center justify-center gap-8">
        {/* links */}
        <div className="flex-1 flex items-center justify-between flex-wrap">
          <Link
            to="/posts"
            className="bg-blue-800 text-white rounded-full px-4 py-2"
          >
            All Posts
          </Link>
          <Link
            to="/posts?cat=web-design"
            className="hover:bg-blue-50 rounded-full px-4 py-2"
          >
            Web Design
          </Link>
          <Link
            to="/posts?cat=development"
            className="hover:bg-blue-50 rounded-full px-4 py-2"
          >
            Development
          </Link>
          <Link
            to="/posts?cat=databases"
            className="hover:bg-blue-50 rounded-full px-4 py-2"
          >
            Databases
          </Link>
          <Link
            to="/posts?cat=seo"
            className="hover:bg-blue-50 rounded-full px-4 py-2"
          >
            Search Engines
          </Link>
          <Link
            to="/posts?cat=marketing"
            className="hover:bg-blue-50 rounded-full px-4 py-2"
          >
            Marketing
          </Link>
        </div>
        <span className="text-xl font-medium">|</span>
        {/* search */}
        <Search />
      </div>
      <div>
        {user && (
          <button
            onClick={toggleSavedPosts}
            className="bg-blue-400 text-white rounded-full px-4 py-2 w-full"
          >
            {showSavedPosts
              ? "H I D E - S A V E D - B L O G"
              : "S H O W - S A V E D - B L O G"}
          </button>
        )}
      </div>
      <div className={`${showSavedPosts ? "slide-down" : "slide-up"}`}>
        {showSavedPosts && <SavedPost />}
      </div>
    </div>
  );
};

export default MainCategories;
