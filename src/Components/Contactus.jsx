import React from 'react';
import '../Components/contactus.scss';
import contactimage from '../img/contactimage.jpg';

function Contactus() {
  return (
    <div className="contactus" id="contactus">
      <div className="contactform">
        <form id="contact" action="" method="post">
          <h4>
            Quick <span>Contact</span>
          </h4>
          <p>You Get reply in 24 hours!</p>
          <fieldset>
            <input
              placeholder="Your name"
              type="text"
              tabindex="1"
              required
              autofocus
            />
          </fieldset>
          <fieldset>
            <input
              placeholder="Your Email Address"
              type="email"
              tabindex="2"
              required
            />
          </fieldset>
          <fieldset>
            <input
              placeholder="Your Phone Number"
              type="tel"
              tabindex="3"
              required
            />
          </fieldset>
          <fieldset>
            <textarea
              placeholder="Type your Message Here...."
              tabindex="5"
              required
            ></textarea>
          </fieldset>
          <fieldset>
            <button
              name="submit"
              type="submit"
              id="contact-submit"
              data-submit="...Sending"
            >
              Submit
            </button>
          </fieldset>
        </form>
      </div>
      <div className="contactimage">
        <img src={contactimage} alt="this is a woman image" />
      </div>
    </div>
  );
}

export default Contactus;
