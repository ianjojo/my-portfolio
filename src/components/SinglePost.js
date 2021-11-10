import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import sanityClient from "../client.js";
// import imageUrlBuilder from "@sanity/image-url";
import BlockContent from "@sanity/block-content-to-react";
import "./SinglePost.scss";
// const builder = imageUrlBuilder(sanityClient);

// function urlFor(source) {
//   return builder.image(source);
// }

export default function SinglePost() {
  const [singlePost, setSinglePost] = useState(null);
  const { slug } = useParams();

  useEffect(() => {
    sanityClient
      .fetch(
        `*[slug.current == "${slug}"]{
        title,
        _id,
        slug,
        mainImage{
          asset->{
            _id,
              url
            }
          },
          body,
          "name": author->name,
          "authorImage": author->image
        }`
      )
      .then((data) => setSinglePost(data[0]))
      .catch(console.error);
  }, [slug]);

  if (!singlePost) return <div>Loading...</div>;

  return (
    <main className="bg-gray-200 min-h-screen p-12">
      <article className=" shadow-lg mx-auto bg-green-100 rounded-lg">
        <h2 className="blog__title">Blog</h2>

        <div className="absolute h-full w-full flex items-center justify-center p-8">
          <div className="bg-white bg-opacity-75 rounded p-12">
            <div className="flex justify-center text-gray-800"></div>
          </div>
        </div>

        <div className="image-box">
          <img
            src={singlePost.mainImage.asset.url}
            alt={singlePost.title}
            className="post-image"
          />
        </div>

        <h3 className="post__title">{singlePost.title}</h3>
        <div className="post__body">
          <BlockContent
            blocks={singlePost.body}
            projectId="ph4hgpxb"
            dataset="production"
          />
        </div>
      </article>
    </main>
  );
}
