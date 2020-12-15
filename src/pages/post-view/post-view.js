import React, {useState} from 'react';
import './post-view.css'
import * as FiIcons from "react-icons/fi";

import mockPostViewData from './mock-post-view'

function PostView() {

  const [upCount, setUpCount] = useState(100);
  const [downCount, setDownCount] = useState(20);

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
          <h2 className="post-view-title">{mockPostViewData.title}</h2>
          <div className="post-view-contents">
            {mockPostViewData.contents}
          </div>
          <div className="post-view-reply">
            {mockPostViewData.reply}
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
