import React, { useEffect, useState } from "react";
import appwriteService from "../appwrite/config.js";
import { Link } from "react-router-dom";

function PostCard({ $id, title, featuredImage, featuredimage }) {
  // Support both fields
  const imageFileId = featuredimage || featuredImage;

  const [imageUrl, setImageUrl] = useState(null);

  useEffect(() => {
    let isMounted = true;

    async function loadPreview() {
      if (!imageFileId) {
        if (isMounted) setImageUrl(null);
        return;
      }

      try {
        const url = await appwriteService.getFilePreview(imageFileId);
        if (isMounted) setImageUrl(url);
      } catch (err) {
        console.warn("Preview load failed:", imageFileId, err);
        if (isMounted) setImageUrl(null);
      }
    }

    loadPreview();
    return () => {
      isMounted = false;
    };
  }, [imageFileId]);

  return (
    <Link to={`/posts/${$id}`} className="post-card">
      <div className="w-full bg-gray-100 rounded p-0.5 md:p-4 hover:shadow-lg transition-shadow h-full">

        <div className="w-full justify-center mb-0.5 md:mb-4 overflow-hidden rounded">
          {imageUrl ? (
            <img src={imageUrl} alt={title} className="rounded h-12 md:h-40 w-full object-cover hover:scale-105 transition-transform duration-300" />
          ) : (
            <div className="h-12 md:h-40 w-full bg-gray-200 rounded" />
          )}
        </div>

        <div className="post-card-title mb-0.5 md:mb-2 hidden md:block">
          <h2 className="text-xs md:text-base font-semibold line-clamp-2">{title}</h2>
        </div>

      </div>
    </Link>
  );
}

export default PostCard;
