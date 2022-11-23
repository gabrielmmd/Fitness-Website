import React from 'react';
import '../Components/hero.scss';
import animatedbg from '../img/bg.mp4';
import { Link } from 'react-scroll';

function Hero() {
  return (
    <div id="hero" className="Hero">
      <video className="animatedbg" autoPlay muted loop>
        <source src={animatedbg} type="video/webm" />{' '}
      </video>
      <div className="herocontent">
        <h1>
          Welcome to <span>Fitness Lab</span>
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
          ratione omnis nostrum possimus qui maxime cum, exercitationem
          praesentium, modi laboriosam nemo, illo minus repellat magni. Atque
          eveniet alias nam praesentium.
        </p>
        <div className="fitnessdown">
          <Link
            to="services"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
          >
            <div className="fitnessdown-btn"></div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Hero;
