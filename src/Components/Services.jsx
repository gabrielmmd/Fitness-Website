import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faAppleWhole,
  faDumbbell,
  faHeart,
  faNotesMedical,
  faPeopleGroup,
} from '@fortawesome/free-solid-svg-icons';
import '../Components/services.scss';

function services() {
  return (
    <div className="services" id="services">
      <h1>Our Services</h1>
      <div className="servicescontainer">
        <div className="wrapper">
          <FontAwesomeIcon className="icon" icon={faDumbbell} />
          <p>Personal Training</p>
        </div>
        <div className="wrapper">
          <FontAwesomeIcon className="icon" icon={faNotesMedical} />
          <p>Health Advising</p>
        </div>
        <div className="wrapper">
          <FontAwesomeIcon className="icon" icon={faPeopleGroup} />
          <p>Group Workouts</p>
        </div>
        <div className="wrapper">
          <FontAwesomeIcon className="icon" icon={faAppleWhole} />
          <p>Nutrition Care</p>
        </div>
      </div>
    </div>
  );
}

export default services;
