import React from 'react';
import { AiOutlineCopyrightCircle } from 'react-icons/ai';

export default function Footer() {

  const date = new Date();
  const currentYear = date.getFullYear();

  return (
    <footer>
      <span>{currentYear}</span> <AiOutlineCopyrightCircle /> <span>DrasticCoder</span> 
   </footer>
  )
}
