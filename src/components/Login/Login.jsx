import React, { useContext } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { UserContext } from '../../App';
import { googleSignIn } from '../../firebase.config';
import './Login.css';
const Login = () => {
    const location = useLocation();
    const navigate = useNavigate();
    let from = location.state?.from?.pathname || "/";
    const [LoogedInUser, setLogedInUser] = useContext(UserContext);

    const signInWithGoogle = () => {

        googleSignIn()
        .then(res => {
            setLogedInUser(res);
            navigate(from, { replace: true });
            
        });
    }
    return (
        <div className='login-from'>
            <button onClick={signInWithGoogle}>Sign in with Google</button>
        </div>
    );
};

export default Login;