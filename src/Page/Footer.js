import React from 'react';
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <div>
      <footer class="footer p-10 bg-neutral text-neutral-content">
        <div>

          <p>Rijon Ahmed<br />2022 Copyright, All rights reserved by Rijon Ahmed</p>
        </div>
        <div>
          <span class="footer-title">Social</span>
          <div class="grid grid-flow-col gap-4">
            <a className='mr-4' href="https://github.com/Rijonahmed" target="_blank" rel="noopener noreferrer"><FaGithub size="2em"></FaGithub></a>

            <a className='mr-4' href="https://www.linkedin.com/in/rijon-ahmed-7274ab240/" target="_blank" rel="noopener noreferrer"><FaLinkedin size="2em"></FaLinkedin></a>
            <a className='mr-4' href="https://www.facebook.com/yeamul036/" target="_blank" rel="noopener noreferrer"> <FaFacebook size="2em"></FaFacebook></a>
            <a whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9, }}
              transition={{
                ease: "easeOut", duration: .3
              }} className='mr-4' href="https://www.instagram.com/yeamul_ahade_rijon/" target="_blank" rel="noopener noreferrer"><FaInstagram size="2em"></FaInstagram></a>

          </div>
        </div>
      </footer>

    </div>
  );
};

export default Footer;