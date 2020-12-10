import React from 'react';
import './cate-cards.css';
import { Card } from 'react-bootstrap';

const CategoryCards = ({ data }) => {
  return (
    <div className="card-wrapper">
      <Card className="card">
        <Card.Body>
          <Card.Title className="card-title">{data.title}</Card.Title>
          <Card.Text>
            {data.contents}
          </Card.Text>
          <Card.Link href={'' + data.link}>Link to Board</Card.Link>
        </Card.Body>
      </Card>
    </div>
  )
}

export default CategoryCards


// <Card className="card">
//   <Card.Body>
//   <Card.Title className="card-title">{data.title}</Card.Title>
// <Card.Text>
// {data.contents}
// </Card.Text>
// <Card.Link href={'' + data.link}>Link to Board</Card.Link>
// </Card.Body>
// </Card>
