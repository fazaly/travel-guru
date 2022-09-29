import React, { useEffect, useState } from 'react';
import Activities from '../Activities/Activities';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEarthAmericas } from '@fortawesome/free-solid-svg-icons';
import  Image from '../../images/f.png';
import './Travel.css';
import Swal from 'sweetalert2';

const Travel = () => {
    const [activities, setActivities] = useState([]);
    const [time, setTime] = useState(0);
    const [travel, setTravel] = useState(0);

    useEffect(() => {
        fetch('travel.json')
        .then(res => res.json())
        .then(data => setActivities(data))
    }, [])

    const handleBreakTime = (time) => {
        setTime(time);
        const getTime = localStorage.getItem('Time')
        const timeValue = JSON.parse(getTime)
        if (timeValue) {
            console.log('Acee');
        }
        else {
            console.log('nai');
        }
    }

    const handleActivity = (id) => {
        Swal.fire(
            'Good job!',
            'You clicked the button!',
            'success'
        )
    }

    return (
        <div>
            <div className="travel-info">
                <FontAwesomeIcon className='icon' icon={faEarthAmericas}></FontAwesomeIcon>
                <h1 className='travel-title'>Travel-Guides</h1>
            </div>
            <div className='travel-container'>
                <div className="travel-activities">
                    {
                        activities.map(activity => <Activities
                            key={activity.id}
                            activity={activity}
                            onAddToList={(time) => setTravel(travel + time)}
                        ></Activities>)
                    }
                </div>
                <div className="about-me-container">
                    <div className="my-info-title">
                        <img className='my-img' src={Image} alt="" />
                        <p className='my-name'>Fazaly Rabbi</p>
                    </div>
                    <div className="info">
                        <div className='my-info'>
                            <h4>65 <small>kg</small> </h4>
                            <p>Weight</p>
                        </div>
                        <div className='my-info'>
                            <h4>5.6"</h4>
                            <p>Height</p>
                        </div>
                        <div className='my-info'>
                            <h4>28 <small>years</small> </h4>
                            <p>Age</p>
                        </div>
                    </div>
                    <div className="break-info">
                        <h2 className='title'>Add a break</h2>
                        <div className="break-button">
                            <button className='btn-break' onClick={() => handleBreakTime(10)}>10m</button>
                            <button className='btn-break' onClick={() => handleBreakTime(20)}>20m</button>
                            <button className='btn-break' onClick={() => handleBreakTime(30)}>30m</button>
                            <button className='btn-break' onClick={() => handleBreakTime(40)}>40m</button>
                        </div>
                    </div>
                    <div className="travel-details">
                        <h2 className='title'>Travel Details</h2>
                        <span className='travel-time'>Travel Time : {travel} days</span>
                        <span className='travel-time'>Break Time : {time}m</span>
                        <button className='activity-button' onClick={() => handleActivity()}>Activity Completed</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Travel;