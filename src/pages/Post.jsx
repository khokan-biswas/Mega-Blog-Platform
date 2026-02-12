import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import appwriteService from "../appwrite/config";
import { Button, Container } from "../components";
import parse from "html-react-parser";
import { useSelector } from "react-redux";

export default function Post() {
    const [post, setPost] = useState(null);
    const [imageUrl, setImageUrl] = useState(null);
    const { id } = useParams();
    const navigate = useNavigate();

    const userData = useSelector((state) => state.auth.userData);

    const isAuthor = post && userData ? post.userid === userData.$id : false;

    useEffect(() => {
        if (id) {
            appwriteService.getPost(id).then((post) => {
                if (post) setPost(post);
                else navigate("/");
            });
        } else navigate("/");
    }, [id, navigate]);

    useEffect(() => {
        let mounted = true;
        async function loadPreview() {
            if (!post) return setImageUrl(null);
            const fileId = post.featuredimage || post.featuredImage;
            if (!fileId) return setImageUrl(null);
            try {
                const url = await appwriteService.getFilePreview(fileId);
                if (mounted) setImageUrl(url);
            } catch (e) {
                console.warn('Post image preview failed', e);
                if (mounted) setImageUrl(null);
            }
        }
        loadPreview();
        return () => (mounted = false);
    }, [post]);

    const deletePost = () => {
        appwriteService.deletePost(post.$id).then((status) => {
            if (status) {
                appwriteService.deleteFile(post.featuredimage || post.featuredImage);
                navigate("/");
            }
        });
    };

    return post ? (
        <div className="py-2 md:py-8 px-1 md:px-0">
            <Container>
                <div className="w-full flex justify-center mb-2 md:mb-6 border rounded p-1 md:p-4">
                    {imageUrl ? (
                        <img src={imageUrl} alt={post.title} className="rounded max-h-40 md:max-h-full object-cover" />
                    ) : (
                        <div className="h-32 md:h-48 w-full bg-gray-200 rounded" />
                    )}
                </div>
                <div className="w-full mb-2 md:mb-4">
                    <h1 className="text-sm md:text-2xl lg:text-3xl font-bold">{post.title}</h1>
                </div>
                <div className="browser-css text-xs md:text-base mb-4 md:mb-8">
                    {parse(post.content)}
                </div>

                {isAuthor && (
                    <div className="flex gap-1 md:gap-3 justify-end border-t pt-2 md:pt-4">
                        <Link to={`/edit-post/${post.$id}`}>
                            <Button bgColor="bg-blue-500" className="text-[9px] md:text-base px-2 md:px-6 py-0.5 md:py-2">
                                Edit
                            </Button>
                        </Link>
                        <Button bgColor="bg-red-500" onClick={deletePost} className="text-[9px] md:text-base px-2 md:px-6 py-0.5 md:py-2">
                            Delete
                        </Button>
                    </div>
                )}
            </Container>
        </div>
    ) : null;
}