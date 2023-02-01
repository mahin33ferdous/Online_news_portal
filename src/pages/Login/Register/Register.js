import React, { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
const Register = () => {

    const {createUser}=useContext(AuthContext)

    const handleRedister=event=>{
        event.preventDefault();
        const form=event.target;
        const name=form.name.value;
        const photourl =form.photourl.value;
        const email =form.email.value;
        const password =form.password.value;
        console.log(name,email,password,photourl);

        createUser(email,password)
        .then(result=>{
            const user= result.user;
            console.log(user);
            form.reset();
            
        })
        .catch (error=>console.error(error));

    }
    return (
        <Form onSubmit={handleRedister}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>User Name</Form.Label>
          <Form.Control type="name" name="name" placeholder="User name" />
           
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Photo Url</Form.Label>
          <Form.Control type="photourl" name="photourl" placeholder="Photo Url" />
           
        </Form.Group>

   <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" name="email" placeholder="Exp: xxxxx@gmail.com" />
          
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" name="password" placeholder="minimun length 8" />
        </Form.Group>
        <Button variant="primary" type="submit">
        Register
      </Button>
        </Form>
    );
};

export default Register;