const HowTo = () => {
    return (
        <section className="howTo">
            <div className="main-container">
                <h2>Fonctionnement</h2>
                <ul className="howTo__list">
                    <li className="howTo__list__element">
                        <span className="howTo__list__element__number">1</span>
                        <div className="howTo__list__element__content">
                            <i className="fas fa-mobile-alt"></i>
                            <span>Choisissez un restaurant</span>
                        </div>
                    </li>
                    <li className="howTo__list__element">
                        <span className="howTo__list__element__number">2</span>
                        <div  className="howTo__list__element__content">
                            <i className="fas fa-list-ul"></i>
                            <span>Composez votre menu</span>
                        </div>
                    </li>
                    <li className="howTo__list__element">
                        <span className="howTo__list__element__number">3</span>
                        <div  className="howTo__list__element__content">
                            <i className="fas fa-store"></i>
                            <span>Dégustez au restaurant</span>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
    )
}
export default HowTo