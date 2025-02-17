import React from "react";
import { Link } from "react-router-dom";
import PostMenuActions from "../Components/PostMenuActions";
import Search from "../Components/Search";
import Comments from "../Components/Comments";
const SinglePostPage = () => {
  return (
    <div className="flex flex-col gap-8">
      {/* detail */}
      <div className="flex gap-8">
        <div className="lg:w-3/5 flex flex-col gap-8">
          <h1 className="text-xl md:text-3xl xl:text-4xl 2xl:text-5xl font-semibold">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </h1>
          <div className="flex items-center gap-2 text-gray-400 text-sm">
            <span>Written by</span>
            <Link className="text-blue-800">John Doe</Link>
            <span>on</span>
            <Link className="text-blue-800">Web Design</Link>
            <span>2 days ago</span>
          </div>
          <p className="text-gray-500 font-medium">
            {" "}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
            hic voluptates impedit, tenetur totam fugit sint nesciunt,
          </p>
        </div>
        <div className="hidden lg:block w-2/5">
          <img src="/postImg.jpeg" alt="" w="600" className="rounded-2xl" />
        </div>
      </div>
      {/* content */}
      <div className="flex flex-col md:flex-row gap-12">
        {/* text */}
        <div className="lg:text-lg flex flex-col gap-6 text-justify">
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam,
            laborum voluptates beatae consequuntur doloribus quis natus
            architecto aperiam, voluptatem facilis dicta ea reiciendis vel ex
            cupiditate, ut ullam. Saepe consectetur tempora odit iste, quaerat
            voluptatum accusamus asperiores necessitatibus ab molestiae.
            Recusandae rem laboriosam vel repellat culpa, cum voluptas possimus,
            maiores velit obcaecati minima nemo, quos nihil perferendis quam
            repellendus provident modi aliquid neque qui at ab accusamus. Esse
            ipsa dolore molestias vitae nesciunt, sequi similique accusamus
            labore numquam quibusdam facilis placeat eaque mollitia nobis autem
            quas adipisci natus culpa nam. Tenetur sed fugiat impedit esse
            consequuntur reprehenderit doloremque mollitia cupiditate.
            Voluptatum
          </p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi
            distinctio est labore laudantium temporibus quam debitis nostrum qui
            voluptatum blanditiis sequi, eveniet quisquam nemo aut quo libero.
            Ex fugit asperiores aliquam ab voluptates, veritatis et inventore
            dolorem, vero, assumenda aperiam. Facere possimus quibusdam
            doloribus architecto? Explicabo quibusdam quaerat exercitationem
            tempore.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis, vero
            recusandae? Cum veritatis deserunt praesentium perferendis nisi
            eaque? Officia tenetur qui fugiat consectetur reiciendis
            reprehenderit provident optio asperiores nulla, quisquam perferendis
            praesentium nisi ducimus inventore error saepe. Mollitia quidem
            impedit deleniti dolorum earum quos necessitatibus. Animi
            consectetur dolore ratione natus consequatur, ipsam reiciendis,
            mollitia libero omnis reprehenderit quam accusamus minima inventore
            non, tenetur vitae? Nihil sequi possimus tempore corporis itaque?
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis, vero
            recusandae? Cum veritatis deserunt praesentium perferendis nisi
            eaque? Officia tenetur qui fugiat consectetur reiciendis
            reprehenderit provident optio asperiores nulla, quisquam perferendis
            praesentium nisi ducimus inventore error saepe. Mollitia quidem
            impedit deleniti dolorum earum quos necessitatibus. Animi
            consectetur dolore ratione natus consequatur, ipsam reiciendis,
            mollitia libero omnis reprehenderit quam accusamus minima inventore
            non, tenetur vitae? Nihil sequi possimus tempore corporis itaque?
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis, vero
            recusandae? Cum veritatis deserunt praesentium perferendis nisi
            eaque? Officia tenetur qui fugiat consectetur reiciendis
            reprehenderit provident optio asperiores nulla, quisquam perferendis
            praesentium nisi ducimus inventore error saepe. Mollitia quidem
            impedit deleniti dolorum earum quos necessitatibus. Animi
            consectetur dolore ratione natus consequatur, ipsam reiciendis,
            mollitia libero omnis reprehenderit quam accusamus minima inventore
            non, tenetur vitae? Nihil sequi possimus tempore corporis itaque?
          </p>
        </div>
        {/* menu */}
        <div className="px-4 h-max sticky top-8">
          <h1 className=" mb-4 text-sm font-medium">Author</h1>
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-8">
              <img
                src="/userImg.jpeg"
                alt=""
                className="w-12 h-12 rounded-full object-cover"
                w="48"
                h="48"
              />
              <Link className="text-blue-800">John Doe</Link>
            </div>
            <p className="text-gray-500 text-sm">
              Lorem ipsum dolor sit amet. Lorem, ipsum dolor.
            </p>
            <div className="flex gap-2">
              <Link>
                <img src="/facebook.svg" alt="" />
              </Link>
              <Link>
                <img src="/instagram.svg" alt="" />
              </Link>
            </div>
          </div>
          <PostMenuActions />
          <h1 className="mt-8 mb-4 text-sm font-medium">Categories</h1>
          <div className="flex flex-col gap-2 text-sm">
            <Link className="underline">All</Link>
            <Link className="underline" to="/">
              Web Design
            </Link>
            <Link className="underline" to="/">
              Development
            </Link>
            <Link className="underline" to="/">
              Databases
            </Link>
            <Link className="underline" to="/">
              Search Engine
            </Link>
            <Link className="underline" to="/">
              Marketing
            </Link>
          </div>
          <h1 className="mt-8 mb-4 text-sm font-medium">Search</h1>
          <Search />
        </div>
      </div>
      <Comments />
    </div>
  );
};

export default SinglePostPage;
