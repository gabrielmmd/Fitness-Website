import React from 'react';
import '../Components/footer.scss';
import { Link } from 'react-scroll';

function Footer() {
  return (
    <footer className="footer">
      <h6>
        Fitness<span>Lab</span>
      </h6>
      <p>
        Lorem ipsum <span>dolor</span> sit amet consectetur adipisicing elit.
        Quod sit <span>earum</span>, ullam suscipit maiores quibusdam accusamus
        quos eum et eius <span>laudantium</span>, omnis iure? Necessitatibus{' '}
        <span>voluptates</span> optio nihil voluptatum, voluptate eveniet.
      </p>
      <div className="linkscontainer">
        <div className="linkslist1">
          <Link
            className="links"
            to="hero"
            spy={true}
            smooth={true}
            duration={500}
          >
            Home
          </Link>
          <Link
            className="links"
            to="services"
            spy={true}
            smooth={true}
            duration={500}
          >
            Our Services
          </Link>
          <Link
            className="links"
            to="contactus"
            spy={true}
            smooth={true}
            duration={500}
          >
            Contact Us
          </Link>
        </div>
        <div className="linkslist2">
          <Link
            className="links"
            to="aboutus"
            spy={true}
            smooth={true}
            duration={500}
          >
            About Us
          </Link>
          <Link className="links" to="#">
            Terms & Policy
          </Link>
          <Link className="links" to="#">
            Cookies Policy
          </Link>
        </div>
        <div className="linkslist3">
          <Link className="links" to="#">
            Facebook
          </Link>
          <Link className="links" to="#">
            Instagram
          </Link>
          <Link className="links" to="#">
            Twitter
          </Link>
        </div>
      </div>
      <p className="copyright">
        Made with 💓 and ☕ by <span>Gabriel</span> 2022 Multimedia Student
      </p>
    </footer>
  );
}

export default Footer;
