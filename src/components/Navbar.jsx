import React from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineHome, AiOutlineContacts, AiOutlineProject, AiOutlineBook, AiOutlineMessage } from 'react-icons/ai';

export default function Navbar() {
  return (
    <div>
      <nav className='NavBar-lg'>
        <ul>
          <div id="logo"><h1 className='neonText'>DrasticCoder</h1></div>
          <li><Link to="/"><AiOutlineHome size={20}/> Home</Link></li>
          <li><Link to="about"><AiOutlineContacts size={20} /> About </Link></li>
            <li><Link to="project"><AiOutlineProject />Projects</Link></li>
            <li><Link to="blog"><AiOutlineBook />Blogs</Link></li>
            <li><a href="mailto:drasticoder@gmail.com?subject=Just here to say HII! &body=I stumbled here from your website, :P" target="_blank" rel="noreferrer"><button className='chat-box-btn'><AiOutlineMessage /> Let's chat</button></a></li>
        </ul>
      </nav>
    </div>
  )
}