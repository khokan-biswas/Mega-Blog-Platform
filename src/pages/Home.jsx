import React, {useEffect, useState} from 'react'
import appwriteService from "../appwrite/config";
import {Container, PostCard} from '../components'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

function Home() {
    const [posts, setPosts] = useState([])
    const userData = useSelector((state) => state.auth.userData)
    const authStatus = useSelector((state) => state.auth.status)

    useEffect(() => {
        if (!authStatus || !userData) {
            // User not logged in
            setPosts([])
            return
        }

        appwriteService.listPosts().then((posts) => {
            if (posts) {
                // Filter posts to show only current user's posts
                const userPosts = posts.documents.filter(post => post.userid === userData.$id)
                setPosts(userPosts)
            }
        })
    }, [userData, authStatus])
  
    // // User not logged in - show login prompt
    if (!authStatus || !userData) {
        return (
            <div className="w-full py-6 sm:py-8 mt-2 sm:mt-4 text-center">
                <Container>
                    <div className="flex flex-wrap">
                        <div className="p-2 w-full">
                            <h1 className="text-lg sm:text-2xl font-bold hover:text-gray-500 mb-4">
                                Please login to see your posts
                            </h1>
                            {/* <Link to="/login">
                                <button className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
                                    Go to Login
                                </button>
                            </Link> */}
                        </div>
                    </div>
                </Container>
            </div>
        )
    }

    // User logged in but has no posts
    if (posts.length === 0) {
        return (
            <div className="w-full py-6 sm:py-8 mt-2 sm:mt-4 text-center">
                <Container>
                    <div className="flex flex-wrap">
                        <div className="p-2 w-full">
                            <h1 className="text-lg sm:text-2xl font-bold hover:text-gray-500 mb-4">
                                You have not created any posts yet.
                            </h1>
                            {/* <Link to="/add-post">
                                <button className="px-6 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600">
                                    Create First Post
                                </button>
                            </Link> */}
                        </div>
                    </div>
                </Container>
            </div>
        )
    }

    // User logged in and has posts - show them
    return (
        <div className='w-full py-2 md:py-8'>
            <Container>
                <div className='flex flex-wrap gap-1 md:gap-4'>
                    {posts.map((post) => (
                        <div key={post.$id} className='p-0.5 md:p-2 w-1/4 md:w-1/2 lg:w-1/4'>
                            <PostCard {...post} />
                        </div>
                    ))}
                </div>
            </Container>
        </div>
    )
}

export default Home