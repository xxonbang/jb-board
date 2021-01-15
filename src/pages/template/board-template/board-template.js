import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import './board-template.css'
import axios from "axios";

function BoardTemplate({ boardCate }) {

  const [boardCategory, setBoardCategory] = useState(boardCate);
  const [postList, setPostList] = useState([]);
  const [loading, setloading] = useState(false);

  useEffect(() => {
    async function getPostList (boardCategory) {
      try {
        const result = await axios.get('/board/humor/searchAll');
        if (!loading) setPostList(result.data);
      } catch (error) {
        console.log(error);
      }
    }
    getPostList(boardCategory);
    return () => {
      setloading(true);
    }
  }, []);

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
            HUMOR BOARD</h1>
          <div className="post-list">
            {postList.map((item, index) => {
              return (
                <li key={index} className="post-title">
                  <Link to={`/board/humor/${item.postNo}`}>
                    <span>{item.title}</span>
                  </Link>
                </li>
              )
            })}
          </div>
          {/*<button onClick={searchTest}>search test</button>*/}
          {/*<button onClick={uploadTest}>upload test</button>*/}
        </div>
      </div>
    </>
  )
}

export default BoardTemplate;
