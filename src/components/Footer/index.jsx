const Footer = () => {
    return (
        <footer className="footer">
            <div className="main-container">
                <span className="footer__logo">ohmyfood</span>
                <ul>
                    <li>
                    <a href="#"><i className="fas fa-utensils footer__icon"></i>Proposer un restaurant</a>
                    </li>
                    <li>
                    <a href="#"><i className="fas fa-hands-helping footer__icon"></i>Devenir partenaire</a>
                    </li>
                    <li>
                    <a href="#">Mentions légales</a>
                    </li>
                    <li>
                    <a href="mailto:contact@ohmyfood.fr">Contact</a>
                    </li>
                </ul>
            </div>
        </footer>
    )
}
export default Footer