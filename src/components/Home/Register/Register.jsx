import React, { useState } from 'react';
import "./Register.css"
import {createUserWithEmailAndPassword, getAuth} from "firebase/auth"
import app from '../../../firebase/firebase.config';

const auth = getAuth(app)




const Register = () => {

    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const [error,setError]=useState('');
    const [success,setSuccess]=useState('')
    const handleEmailChange =(event)=>{ 
        setEmail(event.target.value)
    
    }
    const handlePassword =(event)=>{
        setPassword(event.target.value)
    }

    const handleSubmit =(event)=>{
        event.preventDefault();
        setSuccess('')
        const email = event.target.email.value;
        const password = event.target.password.value;
        console.log(email,password);
        createUserWithEmailAndPassword(auth,email,password)
        .then(result=>{
            const loggedUser =result.user;
            console.log(loggedUser)
            setError('')
            setSuccess('Your email successfully created')
        }).catch(error=>{
            console.log(error.message)
            setError(error.message)
        })

    }
    return (
        <div className='container'>
            <h2>Please Register</h2>
            <form onSubmit={handleSubmit} >
                <input className='Input-field' onChange={handleEmailChange} type="email" name="email" id="email" placeholder='Input Your Email' required/> <br />
                <input className='Input-field' onBlur={handlePassword} type="password" name="password" id="password" placeholder='Input Your Password' required/> <br />
                <input className='btn-register' type="submit" value="Register" />
            </form>
            <p className='error'>{error}</p>
            <p className='text-success'>{success}</p>
        </div>
    );
};

export default Register;