import { FaGithub } from 'react-icons/fa'
import { RiInstagramFill } from 'react-icons/ri'

const Homepage = () => {
    return (
            <>
            <section className="homepage">
            <div className="overlay">
            <h1>Pranav Khot</h1>
            <p>Web Developer</p>

            <ul>
                <li><a className="instagram" href="https://www.instagram.com" target="_blank" rel="noopener noreferrer"><RiInstagramFill/></a></li>
                <li><a className="github" href="https://github.com/pranavkhot" target="_blank" rel="noopener noreferrer"><FaGithub/></a></li>
            </ul>
            </div>
            </section>
            </>
    )
}

export default Homepage
