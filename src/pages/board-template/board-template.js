import React from 'react';
import { Link } from 'react-router-dom';
import './board-template.css'

function BoardTemplate( {postData} ) {
  return (
    <>
      <div className="page-wrapper">
        <div className="inner-page-wrapper">
          <h1 className="page-title"><span className="page-icon">{postData.page_icon}</span>{postData.page_title}</h1>
          <div className="post-list">
            {postData.post_list.map((item, index) => {
              return (
                <li key={index} className="post-title">
                  <Link to={`/board/humor/${item.post_no}`}>
                    <span>{item.post_title}</span>
                  </Link>
                </li>
              )
            })}
          </div>
        </div>
      </div>
    </>
  )
}

export default BoardTemplate;
