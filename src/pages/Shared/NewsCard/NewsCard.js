import React from 'react';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image'
import { FaRegBookmark, FaShareAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const NewsCard = ({news}) => {
    const {_id,title,total_views,author,details,image_url}=news;
    return (
        <Card className='mb-5'>
        <Card.Header className='d-flex justify-content-between align-items-center'>
            <div className='d-flex'>
                <Image
                roundedCircle
                className='me-2'
                src={author.img}  //  author image
                
                style={{height:'60px'}}
                ></Image>
                <div>
                    <p className='mb-0'>{author.name}</p>
                    <p>{author.published_date}</p>
                </div>
            </div>
            <div>
            <FaRegBookmark></FaRegBookmark>
            <FaShareAlt></FaShareAlt>
            </div>
        </Card.Header>
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Img variant="top" src={image_url} />
          <Card.Text>
            {details.length>250 ?<p>{details.slice(0,260)+'...'}<Link to={`/news/${_id}`}>Read more</Link></p>// noted..........
            :
           <p> {details}</p>}
          </Card.Text>
         
        </Card.Body>
      </Card>
    );
};

export default NewsCard;