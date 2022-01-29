import React from 'react';
import { Link } from 'react-router-dom';

const Book = () => {
    return (
        <div style={{ textAlign:'center', padding:'60px 0' }}>
            <h2>Let's book a Double Room</h2>
            <p>What a <Link to="/home">different room</Link> </p>
        </div>
    );
};

export default Book;