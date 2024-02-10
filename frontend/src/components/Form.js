import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import '../App.css';
import { useRef } from 'react';


function FormComponent ({onSubmit, buttonText, signInForm}) {
    const emailInputRef = useRef(null);
    const passwordInputRef = useRef(null);

      const handleSubmit = (e) => {
        e.preventDefault();
        const email = emailInputRef.current.value;
        const password = passwordInputRef.current.value;

        console.log(` EMAIL: ${emailInputRef.current.value} `);
        console.log(` PASSWORD: ${passwordInputRef.current.value} `);

        if(email === ""){
          emailInputRef.current.focus();
          return;
        }
        if(password === ""){
          passwordInputRef.current.focus();
          return; 
        }

        if (onSubmit && typeof onSubmit === 'function'){
          onSubmit({email, password})
        }

      }

    return (

        <Form onSubmit={handleSubmit} className='formstyle'>

        <Form.Group className="mb-3" controlId="formGroupEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" ref={emailInputRef}  />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formGroupPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" ref={passwordInputRef} />
        </Form.Group>
        <Button type='submit' variant="secondary">{buttonText}</Button>{' '}
      </Form>
        

    )
}

export default FormComponent;