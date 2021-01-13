import React from 'react';
import { Link } from 'react-router-dom';
import './board-template.css'
import axios from "axios";

function BoardTemplate( {postData} ) {

  const data = {
    boardCate: 'humor',
    postNo: '1',
    title: '포스트 제목',
    writer: '손병철',
    contents: '내용',
    comment: '댓글'
  }

  const searchTest = () => {
    axios({
      method: 'GET',
      url: '/board/humor/search'
    }).then((res) => {
      console.log(res);
    }).catch((error) => {
      console.log(error);
    })
  }

  const uploadTest = () => {
    axios({
      method: 'POST',
      url: '/board/humor/upload',
      data: data
    }).then((res) => {
      console.log(res);
    }).catch((error) => {
      console.log(error);
    })
  }

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
          <button onClick={searchTest}>search test</button>
          <button onClick={uploadTest}>upload test</button>
        </div>
      </div>
    </>
  )
}

export default BoardTemplate;
