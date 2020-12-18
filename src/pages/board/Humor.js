import React from 'react';
import BoardTemplate from '../template/board-template/board-template'

import mockPostListData from '../template/board-template/mock-post-list-data';

function Humor() {
  return (
    <>
      <BoardTemplate postData={mockPostListData}>
      </BoardTemplate>
    </>
  )
}

export default Humor;
