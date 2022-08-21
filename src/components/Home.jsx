import React from 'react';
import Words from './Words';
import { FiGithub, FiTwitter } from 'react-icons/fi';
import { TbBrandTelegram } from 'react-icons/tb';
import { AiOutlineMail} from 'react-icons/ai';
import { SiLichess } from 'react-icons/si';
import { BsDownload } from 'react-icons/bs';

export default function Home() {

  return (
    <div id='home'>
          <div className="hero-section">
        <h1 className='heading-text'>Hi! I am <Words />
              <br /> Deep Bansode
              </h1>
              <h2 className="secondary-heading"> Full stack web developer based in Mumbai</h2>
            </div>
        
    <div class='socials-section'>
        <div className='socials'> <a href="https://github.com/DrasticCoder" rel='noreferrer' target="_blank"><FiGithub size={30} /></a> </div>
        <div className='socials'><a href="https://t.me/drasticcoder" target="_blank" rel='noreferrer'> <TbBrandTelegram size={30} /> </a></div>
        <div className='socials'><a href="https://twitter.com/drasticcoder" target="_blank" rel="noreferrer"><FiTwitter size={30} /></a>  </div>
        <div className='socials'><a href="mailto:drasticoder@gmail.com?subject=Just here to say HII! &body=I stumbled here from your website, :P" target="_blank" rel="noreferrer"><AiOutlineMail size={30} /> </a> </div>
        <div className='socials'><a href="https://www.chess.com/member/drasticcoder" target="_blank" rel='noreferrer'> <SiLichess size={30} /> </a></div>
        <div className='socials'><a href="https://google.com" target="_blank" re="noreferrer"><BsDownload size={30} /> </a> </div>

    </div>
  </div>
  )
}
