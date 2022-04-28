import { Link, NavLink } from 'react-router-dom'
import './index.scss'
import Logohu from '../../assets/images/logo-hu.png'
import { faEnvelope, faHome, faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faGithub,
  faLinkedin,
  faMedium,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons'

const Sidebar = () => {
  return (
    <div className="nav-bar">
      <Link className="logo" to="/">
        <img src={Logohu} alt="logo" />
      </Link>
      <nav>
        <NavLink exact="true" activeclassname="active" to="/">
          <FontAwesomeIcon icon={faHome} color="#fbf7f5" />
        </NavLink>
        <NavLink
          exact="true"
          activeclassname="active"
          className="about-link"
          to="/about"
        >
          <FontAwesomeIcon icon={faUser} color="#fbf7f5" />
        </NavLink>
        <NavLink
          exact="true"
          activeclassname="active"
          className="contact-link"
          to="/contact"
        >
          <FontAwesomeIcon icon={faEnvelope} color="#fbf7f5" />
        </NavLink>
      </nav>

      <ul>
        <li>
          <a
            className="linkedin"
            target={'_blank'}
            rel="noreferrer"
            href="https://www.linkedin.com/in/huygur/"
          >
            <FontAwesomeIcon icon={faLinkedin} color="#fbf7f5" />
          </a>
        </li>
        <li>
          <a
            className="twitter"
            target={'_blank'}
            rel="noreferrer"
            href="https://twitter.com/uyhdev"
          >
            <FontAwesomeIcon icon={faTwitter} color="#fbf7f5" />
          </a>
        </li>
        <li>
          <a
            className="github"
            target={'_blank'}
            rel="noreferrer"
            href="https://github.com/uyhdev"
          >
            <FontAwesomeIcon icon={faGithub} color="#fbf7f5" />
          </a>
        </li>
        <li>
          <a
            className="medium"
            target={'_blank'}
            rel="noreferrer"
            href="https://medium.com/@uyhdev"
          >
            <FontAwesomeIcon icon={faMedium} color="#fbf7f5" />
          </a>
        </li>
      </ul>
    </div>
  )
}

export default Sidebar
