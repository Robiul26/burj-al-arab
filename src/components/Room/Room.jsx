import React from 'react';
import './Room.css';
import bedImg from '../../images/icons/bed.png';
import personImg from '../../images/icons/person.png';
import dollarImg from '../../images/icons/dollar-icon.png';
import { Link } from 'react-router-dom';

const Room = (props) => {
    const room = props.room;
    return (
        <div className='card'>
            <div className='card-header'>
               <p className='avatar'>{room.avatar}</p>
                <h2>{room.title}</h2>
            </div>
            <div className="card-body">
                <img src={room.imgUrl} alt="" />
                <p>{room.description}</p>
            </div>
            <div className="card-footer">
                <p><img src={bedImg} alt="" />: {room.bed}</p>
                <p><img src={personImg} alt="" />: {room.capacity}</p>
                <p>
                <img src={dollarImg} alt="" />{room.price}                
                </p>
                <Link className='btn' to={`/book/${room.bedType}`}>Book</Link>
            </div>
        </div>
    );
};

export default Room;