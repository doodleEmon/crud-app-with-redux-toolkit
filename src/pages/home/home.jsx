import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchPosts } from '../../redux/slices/post/postSlice';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const { isLoading, isError, posts, error } = useSelector(state => state.posts);
    const dispatch = useDispatch();

    const navigate = useNavigate();

    useEffect(() => {
        dispatch(fetchPosts())
    }, [dispatch]);

    console.log("🚀 ~ Home ~ posts:", posts);
    let content;

    if (isLoading === true && isError === false && error === null) {
        content = <h3>Posts loading...</h3>;
    }

    if (isLoading === false && isError === true) {
        content = <h3>Error: {error}</h3>;
    }

    if (isLoading === false && isError === false && error === null) {
        content = <div className='grid grid-cols-3 gap-4 my-3'>
            {posts.map(post => (
                <div key={post.id}>
                    <h3 onClick={() => navigate(`/post/${post.id}`)} className='text-red-500 font-semibold uppercase cursor-pointer'>{post.title}</h3>
                    <p>{post.body}</p>
                    <div className='flex gap-2 my-2'>
                        <button className='bg-green-500 px-4 py-1 text-white'>Edit</button>
                        <button className='bg-red-500 px-4 py-1 text-white'>Delete</button>
                    </div>
                </div>
            ))}
        </div>
    }

    return (
        <div>
            {content}
            <div>

            </div>
        </div>
    )
}

export default Home
