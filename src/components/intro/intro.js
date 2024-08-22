import React from 'react'
import './intro.css'
import myImage from '../../assets/myImage.png'
import letterIcon from '../../assets/letterIcon.png'
import {Link} from 'react-scroll'

function intro() {
  return (
    <section id ='intro'>
        <div className='introContent'>
            <span className='hello'>Hello,</span>
            <span className='introText'>I'm <span className='introName'>Raveesha</span><br/>Website Designer</span>
            <p className='introPara'>I am a skilled full stack developer with experiance in creating visual</p>
            <Link><button className='btn'><img src={letterIcon} alt='hire me'/>Hire Me</button></Link>
        </div>
        <img src={myImage} className='bg' alt='profile'></img>
    </section>
  )
}

export default intro;