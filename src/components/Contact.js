import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

/**
 * Add <div className='contact-email'></div>
 */

const Contact = () => {
  return (
    <section id='contact'>
      <div className='wrapper'>
        <h1>Contact</h1>
        <div className='contact-social'>
          <div className='social-stack'>
            <div className='social social-github'>
              <a href='//github.com/temelm' target='_blank'>
                <FontAwesomeIcon icon={['fab', 'github']} fixedWidth size='lg' spin />
              </a>
            </div>
            <div className='social social-linkedin'>
              <a href='//www.linkedin.com/in/mustafa-temel-b3908b2a' target='_blank'>
                <FontAwesomeIcon icon={['fab', 'linkedin-in']} fixedWidth size='lg' spin />
              </a>
            </div>
          </div>
        </div>
        <div className='copyright'>©️ 2018 Mustafa Temel</div>
      </div>
    </section>
  )
}

export default Contact