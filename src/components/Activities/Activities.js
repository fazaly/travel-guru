import React from 'react';
import './Activities.css'

const Activities = ({activity}) => {
    const {name, img, details, day} = activity;
    return (
        <div className='activities-info'>
            <img src={img} alt="" />
            <div className='activity-details'>
                <h4 className='activity-name'>{name}</h4>
                <p>Details: {details.slice(0, 60)+ "..." }</p>
                <p>Day-Duration: {day}</p>
            </div>
            <button className='btn-list'><p className='list-text'>Add To List</p></button>
        </div>
    );
};

export default Activities;