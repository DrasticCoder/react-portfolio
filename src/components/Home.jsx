import React from 'react'
import { FiGithub } from 'react-icons/fi';
import { TbBrandTelegram } from 'react-icons/tb';

export default function Home() {
  return (
    <div id='home'>
          <div className="hero-section">
              <h1 className='heading-text'>Hi! I am <span className='words-change'>Web Developer</span><br /> Deep Bansode
              </h1>
              <h2 className="secondary-heading"> Full stack web developer based in Mumbai</h2>
            </div>
        
    <div class='socials-section'>
      <FiGithub fontSize={50} style={{marginTop:"3.5vh"}}/>
        <TbBrandTelegram fontSize={50} style={{marginTop:"3.5vh"}} />

    </div>
  </div>
  )
}
