import React, {useEffect, useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
import './board-template.css'
import axios from "axios";
import "moment/locale/ko";
import moment from "moment";

function BoardTemplate({ boardCate }) {

  const [postList, setPostList] = useState([]);
  const [loading, setloading] = useState(false);


  // post 등록 시간이 1일 이전 일 경우 'yyyy-MM-dd' 포멧으로 날짜 리턴, 아닐 경우 'xx 전' type 으로 리턴
  const calPostTime = (item) => {
    console.log(moment(item.regTime).format("yyyy-MM-dd HH:mm:ss"));
    let postRegTime = moment(item.regTime);
    let diffTime = postRegTime.diff(moment(), 'days');
    if (diffTime <= -1) {
      return moment(item.regTime).format('YYYY-MM-DD');
    } else {
      return moment(item.regTime).fromNow();
    }
  }

  const getPostList = useCallback(async () => {
    try {
      const result = await axios.get(`/board/${boardCate}/searchAll`);
      if (!loading) setPostList(result.data);
    } catch (error) {
      console.log(error);
    }
  }, [boardCate, loading]);

  useEffect(() => {
    getPostList()
      .then(() => console.log('load post success!'))
      .catch((error) => console.log(error));
    return () => {
      setloading(true);
    }
  }, [getPostList]);

  // const searchTest = () => {
  //   axios({
  //     method: 'GET',
  //     url: '/board/humor/search'
  //   }).then((res) => {
  //     console.log(res);
  //   }).catch((error) => {
  //     console.log(error);
  //   })
  // }
  //
  // const uploadTest = () => {
  //   axios({
  //     method: 'POST',
  //     url: '/board/humor/upload',
  //     data: data
  //   }).then((res) => {
  //     console.log(res);
  //   }).catch((error) => {
  //     console.log(error);
  //   })
  // }

  return (
    <>
      <div className="page-wrapper">
        <div className="inner-page-wrapper">
          <h1 className="page-title">
            {/*<span className="page-icon">{postData.page_icon}</span>*/}
            {/*{postList.boardCate}</h1>*/}
            {boardCate}</h1>
          <div className="post-list">
            <div className="post-list-header">
              <div>제목</div>
              <div>작성자</div>
              <div>추천수</div>
              <div>작성시간</div>
            </div>
            {postList.map((item, index) => {
              return (
                <li key={index} className="post-title">
                  <div className="post-grid-container">
                    <Link to={`/board/humor/${item.postNo}`}>
                      <span>{item.title}</span>
                    </Link>
                    <div className="post-detail-grid-container">
                      <div>{item.writer}</div>
                      <div>{item.recommendCount}</div>
                      <div>{item.regTime ? calPostTime(item) : ''}</div>
                      {/*<div>{item.regTime ? moment(item.regTime).format('YYYY-MM-DD') : ''}</div>*/}
                      {/*<div>{moment(item.regTime).fromNow()}</div>*/}
                    </div>
                  </div>
                </li>
              )
            })}
          </div>
          {/*<button onClick={searchTest}>search test</button>*/}
          {/*<button onClick={uploadTest}>upload test</button>*/}
          <div className='write-button-container'>
            <Link to={'/write'}>글쓰기</Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default BoardTemplate;
