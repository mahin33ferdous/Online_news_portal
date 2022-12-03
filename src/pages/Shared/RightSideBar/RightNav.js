import React from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ListGroup from 'react-bootstrap/ListGroup';
import { FaGoogle, FaGithub, FaFacebook, FaTwitter, FaWhatsapp, FaInstagram, FaTwitch } from "react-icons/fa";

import BrandCarousel from '../BrandCarousel/BrandCarousel';

const RightNav = () => {
    return (
        <div>
            <ButtonGroup vertical>
      <Button className='mb-2' variant='outline-primary' > <FaGoogle></FaGoogle> Login with Google</Button>
      <Button className='mb-2'  variant='outline-dark'> <FaGithub></FaGithub> Login with Github</Button>
      </ButtonGroup>


      <div>
           <h4>Find us on</h4>
           
      <ListGroup>
      <ListGroup.Item> <FaFacebook></FaFacebook> Facebook</ListGroup.Item>
      <ListGroup.Item> <FaTwitter></FaTwitter> Twitter</ListGroup.Item>
      <ListGroup.Item> <FaWhatsapp></FaWhatsapp> Whatsapp</ListGroup.Item>
      <ListGroup.Item> <FaInstagram></FaInstagram>Instagram</ListGroup.Item>
      <ListGroup.Item> <FaTwitch></FaTwitch>Twitch</ListGroup.Item>
    </ListGroup>
      </div>
          <BrandCarousel></BrandCarousel>
           
        </div>
        
    );
};

export default RightNav;