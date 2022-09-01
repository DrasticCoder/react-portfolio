import React from 'react';
import { AiOutlineHome, AiOutlineContacts, AiOutlineProject, AiOutlineBook, AiOutlineMessage } from 'react-icons/ai';

export default function Navbar() {
  return (
    <div>
        <nav className='NavBar-lg'>
             <ul>
              <div id="logo"><h1 className='neonText'>DrasticCoder</h1></div>
          <li><a href="/"><AiOutlineHome /> Home</a></li>
          <li><a href="/about"><AiOutlineContacts size={20} /> About</a></li>
          <li><a href="/project"><AiOutlineProject />Projects</a></li>
          <li><a href="/blog"><AiOutlineBook />Blogs</a></li>

          <li><a href="mailto:drasticoder@gmail.com?subject=Just here to say HII! &body=I stumbled here from your website, :P" target="_blank" rel="noreferrer"><button className='chat-box-btn'><AiOutlineMessage /> Let's chat</button></a></li>
             </ul>
        </nav>
    </div>
  )
}
