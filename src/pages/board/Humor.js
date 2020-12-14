import React from 'react';
import BoardTemplate from '../board-template/board-template'

import mockPostListData from '../board-template/mock-post-list-data';

function Humor() {
  return (
    <>
      <BoardTemplate postData={mockPostListData}>
      </BoardTemplate>
    </>
  )
}

export default Humor;
