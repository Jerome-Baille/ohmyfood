import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHandsHelping, faUtensils } from "@fortawesome/free-solid-svg-icons"
import { HashLink as Link } from 'react-router-hash-link';

const Footer = () => {
    
    return (
        <footer className="footer">
            <div className="main-container">
                <span className="footer__logo">ohmyfood</span>
                <ul>
                    <li>
                        <Link to={'proposer-un-restaurant'}>
                            <FontAwesomeIcon icon={faUtensils} className="footer__icon"/>
                            Proposer un restaurant
                        </Link>
                    </li>
                    <li>
                        <Link to={'devenir-partenaire'}>
                            <FontAwesomeIcon icon={faHandsHelping} className="footer__icon"/>
                            Devenir partenaire
                        </Link>
                    </li>
                    <li>
                        <Link to={"mentions"}>Mentions légales</Link>
                    </li>
                    <li>
                        <a href={`mailto:contact@ohmyfood.fr?subject=Contact depuis le site`}>
        Contact
        </a>
                    </li>
                </ul>
            </div>
        </footer>
    )
}
export default Footer