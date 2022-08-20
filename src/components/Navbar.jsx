import React from 'react';
import { AiOutlineHome, AiOutlineContacts, AiOutlineProject, AiOutlineBook, AiOutlineMessage } from 'react-icons/ai';

export default function Navbar() {
  return (
    <div>
        <nav className='NavBar-lg'>
             <ul>
              <div id="logo"><h1>DrasticCoder</h1></div>
          <li><a href="/"><AiOutlineHome /> Home</a></li>
          <li><a href="/about"><AiOutlineContacts size={20} /> About</a></li>
          <li><a href="/project"><AiOutlineProject />Projects</a></li>
          <li><a href="/project"><AiOutlineBook />Blogs</a></li>

          <li><button className='chat-box-btn'><AiOutlineMessage /> Let's chat</button></li>
             </ul>
        </nav>
    </div>
  )
}
