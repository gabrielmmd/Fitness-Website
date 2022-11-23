import React from 'react';
import '../Components/aboutus.scss';

function aboutus() {
  return (
    <div className="aboutus" id="aboutus">
      <div className="aboutimage">
        <h2>
          Fitness<span>Lab</span>
        </h2>
        <p>
          <span>Our Story</span> begins with you!
        </p>
      </div>
      <div className="aboutinfo">
        <h3>
          About <span>Us</span>
        </h3>
        <p>
          Lorem, ipsum dolor sit amet <span>consectetur</span> adipisicing elit.
          Velit vel animi expedita explicabo <span>iste</span>, molestias
          distinctio eos perferendis placeat voluptatibus <span>molestiae</span>{' '}
          temporibus at, ipsa maiores praesentium. Reiciendis reprehenderit sit
          molestiae.
        </p>
        <button>Read More</button>
      </div>
    </div>
  );
}

export default aboutus;
