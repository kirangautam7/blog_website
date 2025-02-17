import React from "react";
import { Link } from "react-router-dom";
import MainCategories from "../Components/MainCategories";
import FeaturedPosts from "../Components/FeaturedPosts";
import PostList from "../Components/PostList";
import { useUser } from "@clerk/clerk-react";

const Homepage = () => {
  const { user } = useUser();
  const isAdmin = user?.publicMetadata?.role === "admin" || false;
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

        {isAdmin && (
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
        )}
        {!isAdmin && (
          <Link className="relative hidden md:block ">
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
                  -Comment Down-
                </textPath>
                <textPath href="#circlePath" startOffset="50%">
                  -Your Experience-
                </textPath>
              </text>
            </svg>
            <button className="absolute top-0 left-0 right-0 bottom-0 m-auto w-20 h-20 bg-blue-800 rounded-full flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="30"
                height="30"
                fill="white"
              >
                <path d="M20.947 9.285c0-5.118-5.215-9.285-11.5-9.285s-11.5 4.167-11.5 9.285c0 3.229 2.194 6.139 5.526 7.718-0.006 0.715-0.020 2.374-0.044 3.727 0.504 0.22 1.391 0.542 2.662 0.542 2.187 0 3.131-1.057 3.502-2.063 1.571 0.275 3.277 0.445 5.152 0.445 5.598 0 8.936-3.248 8.936-7.086 0-1.274-0.23-2.481-0.686-3.558h-0.059z" />
              </svg>
            </button>
          </Link>
        )}
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
