import React, { useState, useEffect } from "react";
import sanityClient from "../client.js";
import { Link } from "react-router-dom";
import "./Post.scss";
export default function Post() {
  const [postData, setPost] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "post"]{
        title,
        slug,
        mainImage{
          asset->{
            _id,
            url
          },
          alt
        }
      }`
      )
      .then((data) => setPost(data))
      .catch(console.error);
  }, []);

  return (
    <main className="bg-gray-500 min-h-screen p-12">
      <section className="container mx-auto">
        <div className="blogposts">
          {postData &&
            postData.map((post, index) => (
              <article className="post">
                <Link to={"/post/" + post.slug.current} key={post.slug.current}>
                  <span
                    className="block h-64 relative rounded leading-snug  nm-flat-gray-500-lg"
                    key={index}
                  >
                    {/* <span
                    className="block h-64 relative rounded shadow leading-snug bg-white border-l-8 border-gray-400"
                    key={index}
                  > */}
                    <div className="fill">
                      <img
                        src={post.mainImage.asset.url}
                        alt={post.mainImage.alt}
                        className="post__img"
                      />
                    </div>
                    <span className="block relative h-full flex justify-end items-end pr-4 pb-4">
                      <h3 className="text-gray-800 text-lg font-bold px-3 py-4 bg-purple-700 text-purple-100 bg-opacity-75 rounded">
                        {post.title}
                      </h3>
                    </span>
                  </span>
                </Link>
              </article>
            ))}
        </div>
      </section>
    </main>
  );
}
