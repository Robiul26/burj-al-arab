import React, { useContext } from 'react';
import { Link, useParams } from 'react-router-dom';
import { UserContext } from '../../App';

const Book = () => {
    const [logedInUser, setLogedInUser] = useContext(UserContext);
    const {bedType} = useParams();
    return (
        <div style={{ textAlign:'center', padding:'60px 0' }}>
            <h2>Welcome <span style={{color:'blue'}}> {logedInUser.name}</span></h2>
            <h2>Let's book a {bedType} Room</h2>
            <p style={{ fontSize:'20px' }}>What a <Link to="/">different room?</Link> </p>
        </div>
    );
};

export default Book;