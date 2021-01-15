import React, {useEffect, useState} from 'react';
import './post-view.css'
import * as FiIcons from "react-icons/fi";
import axios from "axios";

import mockPostViewData from './mock-post-view'

function PostView({ match }) {

  const [upCount, setUpCount] = useState(100);
  const [downCount, setDownCount] = useState(20);
  const [postNo, setPostNo] = useState(match.params.postNo);
  const [post, setPost] = useState({});
  const [loading, setloading] = useState(false);

  const getPost = async (postNo) => {
    try {
      const result = await axios.get('/board/humor/search', {params: {postNo: postNo}});
      if (!loading) setPost(result.data[0]);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getPost(postNo);
    return () => {
      setloading(true);
    }
  }, [])

  const thumbsUp = () => {
    setUpCount(upCount + 1);
  }
  const thumbsDown = () => {
    setDownCount(downCount + 1);
  }


  return (
    <>
      <div className="post-wrapper">
        <div className="inner-post-wrapper">
          <h2 className="post-view-title">{post?.title}</h2>
          <div className="post-view-contents">
            {post?.contents}
          </div>
          <div className="post-view-reply">
            {post?.comment}
          </div>
          <div className="thumb-icons">
            <div className="thumbs-up" onClick={thumbsUp}>
              <FiIcons.FiThumbsUp />
            </div>
            <span>{upCount}</span>
            <div className="thumbs-down" onClick={thumbsDown}>
              <FiIcons.FiThumbsDown />
            </div>
            <span>{downCount}</span>
          </div>
        </div>
      </div>
    </>
  )
}

export default PostView;
