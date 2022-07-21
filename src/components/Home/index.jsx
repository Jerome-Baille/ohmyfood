import Search from '../Search';
import HowTo from '../HowTo';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as farHeart } from '@fortawesome/free-regular-svg-icons';
import { faHeart as fasHeart } from '@fortawesome/free-solid-svg-icons';


const Home = () => {
    return(
        <main>
          <Search />
          <HowTo />

          <section id="restaurants" className="restaurants">
            <div className="main-container">
                <h2>Restaurants</h2>

                <div className="restaurants__grid-container">

                    <a className="card" href="./la-palette-du-gout.html">
                        <img src="./images/restaurants/small/jay-wennington-N_Y88TWmGwA-unsplash.jpg" alt="La palette du goût à Ménilmontant" />                    
                        <span className="card__new">Nouveau</span>
                        <div className="card__caption">
                            <div className="card__caption__text">
                                <h3>La palette du goût</h3>
                                <p>Ménilmontant</p>
                            </div>
                            <div className="btn__heart">
                                <FontAwesomeIcon icon={farHeart} className="far btn__heart--whiteBg"/>
                                <FontAwesomeIcon icon={fasHeart} className="btn__heart--whiteBg" />
                            </div>
                        </div>
                    </a>
    
                    <a className="card" href="./la-note-enchantee.html">
                        <img src="./images/restaurants/small/stil-u2Lp8tXIcjw-unsplash.jpg" alt="La note enchantée à Charonne" />                    
                        <span className="card__new">Nouveau</span>
                        <div className="card__caption">
                            <div className="card__caption__text">
                                <h3>La note enchantée</h3>
                                <p>Charonne</p>
                            </div>
                            <div className="btn__heart">
                                <FontAwesomeIcon icon={farHeart} className="far btn__heart--whiteBg"/>
                                <FontAwesomeIcon icon={fasHeart} className="btn__heart--whiteBg" />
                            </div>
                        </div>
                    </a>

                    <a className="card" href="./a-la-francaise.html">
                        <img src="./images/restaurants/small/toa-heftiba-DQKerTsQwi0-unsplash.jpg" alt="À la française à Cité Rouge" />                    
                        <span className="card__new--disable">Nouveau</span>
                        <div className="card__caption">
                            <div className="card__caption__text">
                            <h3>À la française</h3>
                            <p>Cité Rouge</p>
                            </div>
                            <div className="btn__heart">
                                <FontAwesomeIcon icon={farHeart} className="far btn__heart--whiteBg"/>
                                <FontAwesomeIcon icon={fasHeart} className="btn__heart--whiteBg" />
                            </div>
                        </div>
                    </a>

                    <a className="card" href="./le-delice-des-sens.html">
                        <img src="./images/restaurants/small/louis-hansel-shotsoflouis-qNBGVyOCY8Q-unsplash.jpg" alt="Le délice des sens à Folie-Méricourt" />                    
                        <span className="card__new--disable">Nouveau</span>
                            <div className="card__caption">
                                <div className="card__caption__text">
                                <h3>Le délice des sens</h3>
                                <p>Folie-Méricourt</p>
                            </div>
                            <div className="btn__heart">
                                <FontAwesomeIcon icon={farHeart} className="far btn__heart--whiteBg"/>
                                <FontAwesomeIcon icon={fasHeart} className="btn__heart--whiteBg" />
                            </div>
                        </div>
                        </a>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default Home;