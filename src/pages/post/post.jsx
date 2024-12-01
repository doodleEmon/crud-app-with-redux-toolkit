import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom'
import { deletePost, fetchPostById } from '../../redux/slices/post/postSlice';

const Post = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const { isLoading, isError, error, selectedPost } = useSelector(state => state.posts);
    const navigate = useNavigate();

    const handleDeletePost = (id) => {
        dispatch(deletePost(id))
        navigate('/');
    }

    useEffect(() => {
        dispatch(fetchPostById(id))
    }, [dispatch, id])

    let content;

    if (isLoading === true && isError === false && error === null) {
        content = <h3>Loading post...</h3>;
    }

    if (isLoading === false && isError === true) {
        content = <h3>Error: {error}</h3>;
    }

    if (isLoading === false && isError === false && error === null && selectedPost != null) {
        content = <div className='border p-2'>
            <h3 className='text-red-500 font-semibold uppercase cursor-pointer'>{selectedPost.title}</h3>
            <p>{selectedPost.body}</p>
            <div className='flex gap-2 my-2'>
                <button className='bg-green-500 px-4 py-1 text-white'>Edit</button>
                <button onClick={() => handleDeletePost(selectedPost.id)} className='bg-red-500 px-4 py-1 text-white'>Delete</button>
            </div>
        </div>
    }

    return (
        <div>
            {content}
        </div>
    )
}

export default Post
