import './index.scss'
import Logo from '../../assets/images/ronald-logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faLinkedin,
  faGithub,
  faSpotify,
  faCodepen,
  faTwitch,
} from '@fortawesome/free-brands-svg-icons'
import { faHome, faUser, faEnvelope, faSuitcase, faCode } from '@fortawesome/free-solid-svg-icons'
import { Link, NavLink } from 'react-router-dom'

const Sidebar = () => {
  return (
    <div className="nav-bar">
      <Link className="logo" to="/">
        <img src={Logo} alt="Logo" />
      </Link>
      <nav>
        <NavLink exact="true" activeclassname="active" to="/">
          <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
        </NavLink>
        <NavLink activeclassname="active" className="about-link" to="/about">
          <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
        </NavLink>
        <NavLink activeclassname="active" className="skills-link" to="/skills">
          <FontAwesomeIcon icon={faCode} color="#4d4d4e" />
        </NavLink>
        <NavLink activeclassname="active" className="portfolio-link" to="/portfolio">
          <FontAwesomeIcon icon={faSuitcase} color="#4d4d4e" />
        </NavLink>
        <NavLink
          activeclassname="active"
          className="contact-link"
          to="/contact"
        >
          <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
        </NavLink>
      </nav>
      <ul>
        <li>
          <a
            href="https://www.linkedin.com/in/maroofkhn/"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" />
          </a>
        </li>
        <li>
          <a
            href="https://github.com/coltonsaywhatt"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
          </a>
        </li>
        <li>
          <a
            href="https://codepen.io/coltonsaywhatt"
            rel="noreferrer"
            target="_blank"
          >
            <FontAwesomeIcon icon={faCodepen} color="#4d4d4e" />
          </a>
        </li>
        <li>
          <a
            href="https://open.spotify.com/user/na5xwdu58242akvp9slcge9i1?si=dacc5beeb45d42d8&nd=1"
            rel="noreferrer"
            target="_blank"
          >
            <FontAwesomeIcon icon={faSpotify} color="#4d4d4e" />
          </a>
        </li>
        <li>
          <a href="https://www.twitch.tv/ghostephace" rel="noreferrer" target="_blank">
          <FontAwesomeIcon icon={faTwitch} color="#4d4d4e" />
          </a>
        </li>
      </ul>
    </div>
  )
}

export default Sidebar
