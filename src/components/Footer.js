import React from 'react'

import './Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
  return (
      <footer>
          <div className="footer-widget">
              <ul className='social-media'>
                  <li className='icons'>
                     <a href="https://www.linkedin.com/in/yukti-singhal-b8a04a256/" target='_blank' rel="noopener noreferrer"><FontAwesomeIcon icon={faLinkedin} size="lg" color='white'/></a>
                  </li>
                  <li className='icons'>
                     <a href="https://github.com/yukti-singhal" target='_blank' rel="noopener noreferrer"><FontAwesomeIcon icon={faGithub} size='lg' color='white'/> </a>
                  </li>
              </ul>
        </div>
          <div className='footer'>
           <small>&#9400; 2024 by Yukti Singhal. All rights reserved.</small>
          </div>
      </footer>
  )
}

export default Footer
