import React from 'react';
import '../Components/clubs.scss';

function Clubs() {
  return (
    <div className="clubs" id="clubs">
      <div className="firstclub">
        <p>
          Cycle <span>Club</span>
        </p>
        <button>Book Now</button>
      </div>
      <div className="secondclub">
        <p>
          Aerobic <span>Club</span>
        </p>
        <button>Book Now</button>
      </div>
      <div className="thirdclub">
        <p>
          Box <span>Club</span>
        </p>
        <button>Book Now</button>
      </div>
    </div>
  );
}

export default Clubs;
