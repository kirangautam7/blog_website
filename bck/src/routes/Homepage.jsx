import React from "react";
import { Link } from "react-router-dom";
import MainCategories from "../Components/MainCategories";
import FeaturedPosts from "../Components/FeaturedPosts";
import PostList from "../Components/PostList";

const Homepage = () => {
  return (
    <div className="mt-4 flex flex-col gap-4">
      {/* breadcrum */}
      <div className="flex gap-4">
        <Link to="/">Home</Link>
        <span>-</span>
        <span className="text-blue-800">Blog and Articles</span>
      </div>
      {/* introdution */}
      <div className="flex items-center justify-between">
        {/* title */}
        <div className="">
          <h1 className="text-gray-800 text-2xl md:text-5xl lg:text-6xl font-bold">
            There is no one who loves pain itself
          </h1>
          <p className="mt-8 text-md md:text-xl">
            There is no one who loves pain itself, who seeks after it and wants
            to have it, simply because it is pain
          </p>
        </div>
        <Link to="write" className="relative hidden md:block ">
          {/* <div className="relative mt-8 flex items-center justify-center">
            {" "}
            <div className="w-32 h-32 bg-blue-500 rounded-full flex items-center justify-center">
              {" "}
              <div className="absolute transform rotate-[270deg] origin-center">
                {" "}
                <span className="block text-center font-bold text-lg text-white transform -rotate-[270deg]">
                  {" "}
                  Write Your Story{" "}
                </span>{" "}
              </div>{" "}
            </div>{" "}
          </div> */}
          <svg
            viewBox="0 0 200 200"
            width="200"
            height="200"
            className="text-lg tracking-widest animate-spin animatedSpeed"
          >
            <path
              id="circlePath"
              d="M 100, 100 m -75, 0 a 75, 75 0 1, 1 150, 0 a 75, 75 0 1, 1 -150, 0"
              fill="none"
            />
            <text>
              <textPath href="#circlePath" startOffset="0%">
                Write Your Story -
              </textPath>
              <textPath href="#circlePath" startOffset="50%">
                Share Your Idea-
              </textPath>
            </text>
          </svg>
          <button className="absolute top-0 left-0 right-0 bottom-0 m-auto w-20 h-20 bg-blue-800 rounded-full flex items-center justify-center">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="white"
              xmlns="http://www.w3.org/2000/svg"
              className="transform rotate-[225deg]"
            >
              <path
                d="M12 2L12 18M12 18L6 12M12 18L18 12"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </Link>
      </div>
      {/* Categories */}
      <MainCategories />
      {/* featured post */}
      <FeaturedPosts />
      <div className="">
        <h1 className="my-8 text-2xl text-gray-600">Recent Posts</h1>
        <PostList />
      </div>
    </div>
  );
};

export default Homepage;
