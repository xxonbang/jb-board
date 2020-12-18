import React from 'react';
import './home.css';

import CategoryCards from './cate-cards';
import mockData from './mock-card-data';

function Home() {

  return (
    <div className='home'>
      <div className="home-contents-wrapper">
        {mockData.map((data, index) => <CategoryCards key={index} data={data} />)}
      </div>
    </div>
  )
}

export default Home;
