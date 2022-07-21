const HowTo = () => {
    return (
        <section class="howTo">
            <div class="main-container">
                <h2>Fonctionnement</h2>
                <ul class="howTo__list">
                    <li class="howTo__list__element">
                        <span class="howTo__list__element__number">1</span>
                        <div class="howTo__list__element__content">
                            <i class="fas fa-mobile-alt"></i>
                            <span>Choisissez un restaurant</span>
                        </div>
                    </li>
                    <li class="howTo__list__element">
                        <span class="howTo__list__element__number">2</span>
                        <div  class="howTo__list__element__content">
                            <i class="fas fa-list-ul"></i>
                            <span>Composez votre menu</span>
                        </div>
                    </li>
                    <li class="howTo__list__element">
                        <span class="howTo__list__element__number">3</span>
                        <div  class="howTo__list__element__content">
                            <i class="fas fa-store"></i>
                            <span>Dégustez au restaurant</span>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
    )
}
export default HowTo