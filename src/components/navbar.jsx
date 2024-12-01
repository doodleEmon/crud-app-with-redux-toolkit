import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom'
import { fetchPosts } from '../redux/slices/post/postSlice';

const Navbar = () => {
    const { isLoading, isError, posts, error } = useSelector(state => state.posts);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchPosts())
    }, [dispatch]);

    return (
        <nav className='flex justify-between bg-gray-400 p-4 text-white'>
            <div>
                <a href='/' className='font-bold'>RTK CRUD</a>
            </div>
            <div>
                <h3>{posts.length} posts</h3>
            </div>
            <ul className='flex gap-4 font-semibold'>
                <li>
                    <NavLink to="/">Home</NavLink>
                </li>
                <li>
                    <NavLink to="/about">About</NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar
