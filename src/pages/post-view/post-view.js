import React from 'react';
import './post-view.css'
import * as FiIcons from "react-icons/fi";

import mockPostViewData from './mock-post-view'

function PostView() {

  const thumbsUp = () => {alert('박종우 쟝쟝맨!')}
  const thumbsDown = () => {alert('박종우 메롱!')}

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
            <div className="thumbs-up">
              <FiIcons.FiThumbsUp onClick={thumbsUp} />
            </div>
            <span>100</span>
            <div className="thumbs-down">
              <FiIcons.FiThumbsDown onClick={thumbsDown} />
            </div>
            <span>20</span>
          </div>
        </div>
      </div>
    </>
  )
}

export default PostView;
