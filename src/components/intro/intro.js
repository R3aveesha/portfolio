import React from 'react';
import './intro.css';
import myImage from '../../assets/myImage.png';
import { Link } from 'react-scroll';

function Intro() {
  return (
    <section id='intro'>
      <div className='myImg'>
      </div>
      <div className='introContent'>
        <span className='hello'>Hello,</span>
        <span className='introText'>
          I'm <span className='introName'>Raveesha</span><br />Website Designer
        </span>
        <p className='introPara'>
          I am a skilled full stack developer with experience in creating visually engaging and user-friendly web applications. My expertise spans both front-end and back-end development, allowing me to build seamless, responsive, and efficient digital solutions. I am proficient in various programming languages and frameworks, and I excel at transforming ideas into functional and appealing interfaces that enhance user experience.
        </p>
        <Link to='contact'>
          <button className='hireBtn'>Hire me</button>
        </Link>

        <img src={myImage} className='bg' alt='profile' />
      </div>
    </section>
  );
}

export default Intro;
