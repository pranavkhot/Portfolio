import {FaPhoneAlt, FaEnvelope, FaTwitter, FaGithub, FaLinkedin, FaFacebookSquare} from "react-icons/fa"
import { RiInstagramFill } from 'react-icons/ri'

const Contacts = () => {
    return (
        <> 
          <section className="contacts"> 
          <div className="overlay2">
          <h1>Contact Me</h1> 
              <ul>
                  <li><a className="call" href="tel: 9987308886"><FaPhoneAlt className="phone"/>(+91) 9987308886</a></li>
                  <li><a className="email" href="mailto:pranavkhot.345@gmail.com"><FaEnvelope className="mail"/>pranavkhot.345@gmail.com</a></li>
              </ul>
              <section className="social">
                <a className="instagram" href="https://www.instagram.com" target="_blank" rel="noopener noreferrer"><RiInstagramFill/></a>
                <a className="twitter" href="https://twitter.com/Pranavkhot_345" target="_blank" rel="noopener noreferrer"><FaTwitter/></a>
                <a className="github" href="https://github.com/pranavkhot" target="_blank" rel="noopener noreferrer"><FaGithub/></a>
                <a className="linkedin" href="https://www.linkedin.com/in/pranav-khot-5692371a4" target="_blank" rel="noopener noreferrer"><FaLinkedin/></a>
                <a className="facebook" href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebookSquare/></a>
                
            </section>
              </div>
          </section>
        </>
    )
}

export default Contacts
