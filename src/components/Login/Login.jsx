import React, { useContext, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { UserContext } from '../../App';
import { googleSignIn, signinWithEmail, signInWithMailAndPwd } from '../../firebase.config';
import './Login.css';
const Login = () => {
    const [newUser, setNewUser] = useState(false);
    const [user, setUser] = useState({
        isSignedIn: false,
        name: '',
        email: '',
        password: '',
        error: '',
        success: false
    });
    const location = useLocation();
    const navigate = useNavigate();
    let from = location.state?.from?.pathname || "/";
    const [LogedInUser, setLogedInUser] = useContext(UserContext);

    const signInWithGoogle = () => {

        googleSignIn()
            .then(res => {
                setLogedInUser(res);
                navigate(from, { replace: true });

            });
    }
    const handleBlur = e => {
        let isFieldValid = true;
        if(e.target.name === 'email'){
            isFieldValid = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(e.target.value);
            // isFieldValid = /\S+@\S+\.\S+/.test(e.target.value);
           
        }
         if(e.target.name === 'password'){
           const isPasswordValid = e.target.value.length > 5;
            const passwordHasNumber = /\d{1}/.test(e.target.value);
            const passwordHasLetter = /[a-zA-Z]/.test(e.target.value);
            isFieldValid = (isPasswordValid && passwordHasNumber && passwordHasLetter);
           
        }
       if(isFieldValid){
           const newUserInfo = {...user};
           newUserInfo[e.target.name] = e.target.value;
           setUser(newUserInfo);
       }
    }
    const submitHandler = e => {
        e.preventDefault();
        if(newUser && user.email && user.password){
            signinWithEmail(user.name, user.email, user.password)
            .then(res => {
                setUser(res);
                setLogedInUser(res);
                navigate(from, { replace: true });
            })
        }
        if(!newUser && user.email && user.password){      
            signInWithMailAndPwd(user.email, user.password)
            .then(res => {
                setUser(res);
                setLogedInUser(res);
                navigate(from, { replace: true });
            })
           }
    }
    return (
        <div className='login-from-container'>
            <div className="login-box">
               { newUser?<h2>Sign in Form</h2> : <h2>Login Form</h2>}
               <label className="container">New user
               <input className='checkBox' type="checkbox" id='newUser' onChange={() => setNewUser(!newUser)} />
                <span className="checkmark"></span>
                </label>
                
                <form action="" onSubmit={submitHandler} className='login-form'>
                   {newUser && <input type="text" onBlur={handleBlur} name="name" placeholder='Your name' />}
                    <input type="email" onBlur={handleBlur} name='email' placeholder='Your Email' required />
                    <input type="password" onBlur={handleBlur} name='password' placeholder='Password' required />
                    {newUser?<input className='btn' type="submit" value="Sign in" />
                    : <input className='btn' type="submit" value="Login" />}
                </form>
                <p style={{ color:'red' }}>{user.error}</p>
               {user.success &&  <p style={{ color:'green' }}>User cereaded</p>}
                <button onClick={signInWithGoogle}>Sign in with Google</button>
            </div>
        </div>
    );
};

export default Login;