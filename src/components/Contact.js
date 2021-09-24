import React from 'react';
import './Contact.css';
import whatsapp from '../Images/whatsapp.png';
import instagram from '../Images/instagram.png';
import location from '../Images/location.png';
import phone from '../Images/call.png';

function Contact() {
  return (
    <div className='contactContainer'>
      <div className='container__social'>
        <div className='social__whatsapp'>
          <img className='socialIcon' src={whatsapp} alt='whatsapp' />
          <a
            className='social__text'
            href='https://api.whatsapp.com/send/?phone=917875439752'
          >
            {' '}
            Chat On WhatsApp
          </a>
        </div>
        <div className='social__instagram'>
          <img className='socialIcon' src={instagram} alt='insta' />
          <a
            className='social__textInsta'
            href='https://www.instagram.com/ezzyhardware_paints/'
          >
            {' '}
            Follow us
          </a>
        </div>
      </div>
      <div className='container__location'>
        <h3 className='location__heading'>Our Shop Location</h3>
        <img className='location__icon' src={location} alt='location' />
        <h4 className='location__text'>
          "188, Nandanvanam Main Rd, Shiv Nagar, Azamshah Layout, Nagpur,
          Maharashtra 440008."
        </h4>
        <a
          className='location__link'
          href='https://goo.gl/maps/6VSJnY4dHbsPJoUi7'
        >
          Open In Google Maps
        </a>
      </div>
      <div className='container__contact'>
        <div className='contact__logo'>
          <img className='socialIcon' src={phone} alt='contact' />
        </div>
        <div className='contact__text'>
          <h3 className='contact__number'>+91 7875439752</h3>
          <h3 className='contact__number'>+91 9860363831</h3>
          <h3 className='contact__number'>+91 9960288954</h3>
        </div>
      </div>
    </div>
  );
}

export default Contact;
