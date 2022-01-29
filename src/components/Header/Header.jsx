import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';
import headerImg from '../../images/header.png';
import logo from '../../images/icons/logo.png';
import './Header.css';

const Header = () => {
    const [LoogedInUser, setLoogedInUser] = useContext(UserContext);
    return (
        <div className='header-section' style={{ backgroundImage:`linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url(${headerImg})` }}>
            <nav className='nav-menus'>
                <Link className='nav-item' to="/">
                <img className='logo' src={logo} alt="" />
                </Link>
                <Link className='nav-item' to="/home">Home</Link>
                <Link className='nav-item' to="/book">Book</Link>
                {LoogedInUser.email?<button className='nav-item btn' onClick={() => setLoogedInUser({})}>Logout</button>
                :<Link className='nav-item btn' to="/login">Login</Link>
                }
            </nav>
            <div className="title-container">
                <h1>Burj Al Arab</h1>
                <h2>A global icon of Arabian luxury</h2>
            </div>
        </div>
    );
};

export default Header;