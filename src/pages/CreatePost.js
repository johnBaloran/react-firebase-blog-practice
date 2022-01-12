import React, { useState } from "react";
import { addDoc, collection } from "firebase/firestore";
import { db, auth } from "../firebase-config";
import { useNavigate } from "react-router-dom";
const CreatePost = () => {
  const [title, setTitle] = useState("");
  const [postText, setPostText] = useState("");
  const postsCollectionRef = collection(db, "posts");

  let navigate = useNavigate();
  const createPost = async () => {
    await addDoc(postsCollectionRef, {
      title: title,
      postText: postText,
      author: {
        name: auth.currentUser.displayName,
        id: auth.currentUser.uid,
      },
    });
    navigate("/");
  };
  return (
    <div className="createPostPage">
      <div className="cpContainer">
        <h1>Create a Post</h1>
        <div className="inputGp">
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            name="title"
            placeholder="Title..."
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
        </div>
        <div className="inputGp">
          <label htmlFor="post">Post:</label>
          <textarea
            name="post"
            id=""
            cols="30"
            rows="10"
            placeholder="Post..."
            onChange={(e) => {
              setPostText(e.target.value);
            }}
          ></textarea>
        </div>
        <button onClick={createPost}>Submit Post</button>
      </div>
    </div>
  );
};

export default CreatePost;
