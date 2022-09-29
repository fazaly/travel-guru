import React, { useEffect, useState } from 'react';
import Activities from '../Activities/Activities';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEarthAmericas } from '@fortawesome/free-solid-svg-icons';
import  Image from '../../images/f.png';
import './Travel.css';

const Travel = () => {
    const [activities, setActivities] = useState([]);
    useEffect(() => {
        fetch('travel.json')
        .then(res => res.json())
        .then(data => setActivities(data))
    }, [])
    return (
        <div className='travel-container'>
            <div className="travel-info">
                <FontAwesomeIcon className='icon' icon={faEarthAmericas}></FontAwesomeIcon>
                <h1 className='travel-title'>Travel-Guides</h1>
            </div>
            <div className="about-me-container">
                
            </div>
            <div className="travel-activities">
                {
                    activities.map(activity => <Activities
                        key={activity.id}
                        activity={activity}
                    ></Activities>)
                }
            </div>
        </div>
    );
};

export default Travel;