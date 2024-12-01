// import React, { useState, useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { useParams, useNavigate } from "react-router-dom";
// import { updatePostById } from "../../redux/slices/post/postSlice";

// const EditPost = () => {
//     const { id } = useParams(); // Get post ID from URL
//     const navigate = useNavigate();
//     const dispatch = useDispatch();

//     // Find the post in Redux state by ID
//     const post = useSelector((state) =>
//         state.posts.posts.find((post) => post.id === parseInt(id))
//     );

//     const [formData, setFormData] = useState({
//         title: "",
//         // body: "",
//     });

//     // Pre-fill the form when the post is loaded
//     useEffect(() => {
//         if (post) {
//             setFormData({
//                 title: post.title,
//                 body: post.body,
//             });
//         }
//     }, [post]);

//     // Handle input changes
//     const handleChange = (e) => {
//         setFormData({
//             ...formData,
//             [e.target.name]: e.target.value,
//         });
//     };

//     // Handle form submission
//     const handleSubmit = (e) => {
//         e.preventDefault();

//         // Dispatch the action to update the post
//         // dispatch(updatePostById({ id, updatedPost: formData }));

//         // Navigate back to home page
//         // navigate("/");
//     };

//     if (!post) {
//         return <h3>Post not found!</h3>;
//     }

//     return (
//         <div>
//             <h2>Edit Post</h2>
//             <form onSubmit={handleSubmit}>
//                 <div>
//                     <label>Title:</label>
//                     <input
//                         type="text"
//                         name="title"
//                         value={formData.title}
//                         onChange={handleChange}
//                     />
//                 </div>
//                 <div>
//                     <label>Body:</label>
//                     <textarea
//                         name="body"
//                         value={formData.body}
//                         onChange={handleChange}
//                     />
//                 </div>
//                 <button type="submit" className="bg-blue-500 px-4 py-1 text-white">
//                     Save Changes
//                 </button>
//             </form>
//         </div>
//     );
// };

// export default EditPost;
