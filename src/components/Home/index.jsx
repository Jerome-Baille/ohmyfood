import Search from '../Search';
import HowTo from '../HowTo';


const Home = () => {
    return(
        <main>
          <Search />
          <HowTo />

          <section id="restaurants" class="restaurants">
            <div class="main-container">
                <h2>Restaurants</h2>

                <div class="restaurants__grid-container">

                    <a class="card" href="./la-palette-du-gout.html">
                        <img src="./images/restaurants/small/jay-wennington-N_Y88TWmGwA-unsplash.jpg" alt="La palette du goût à Ménilmontant" />                    
                        <span class="card__new">Nouveau</span>
                        <div class="card__caption">
                            <div class="card__caption__text">
                                <h3>La palette du goût</h3>
                                <p>Ménilmontant</p>
                            </div>
                            <div class="btn__heart">
                                <i class="far fa-heart btn__heart--whiteBg"></i>
                                <i class="fas fa-heart btn__heart--whiteBg"></i>
                            </div>
                        </div>
                    </a>
    
                    <a class="card" href="./la-note-enchantee.html">
                        <img src="./images/restaurants/small/stil-u2Lp8tXIcjw-unsplash.jpg" alt="La note enchantée à Charonne" />                    
                        <span class="card__new">Nouveau</span>
                        <div class="card__caption">
                            <div class="card__caption__text">
                                <h3>La note enchantée</h3>
                                <p>Charonne</p>
                            </div>
                            <div class="btn__heart">
                                <i class="far fa-heart btn__heart--whiteBg"></i>
                                <i class="fas fa-heart btn__heart--whiteBg"></i>
                            </div>
                        </div>
                    </a>

                    <a class="card" href="./a-la-francaise.html">
                        <img src="./images/restaurants/small/toa-heftiba-DQKerTsQwi0-unsplash.jpg" alt="À la française à Cité Rouge" />                    
                        <span class="card__new--disable">Nouveau</span>
                        <div class="card__caption">
                            <div class="card__caption__text">
                            <h3>À la française</h3>
                            <p>Cité Rouge</p>
                            </div>
                            <div class="btn__heart">
                                <i class="far fa-heart btn__heart--whiteBg"></i>
                                <i class="fas fa-heart btn__heart--whiteBg"></i>
                            </div>
                        </div>
                    </a>

                    <a class="card" href="./le-delice-des-sens.html">
                        <img src="./images/restaurants/small/louis-hansel-shotsoflouis-qNBGVyOCY8Q-unsplash.jpg" alt="Le délice des sens à Folie-Méricourt" />                    
                        <span class="card__new--disable">Nouveau</span>
                            <div class="card__caption">
                                <div class="card__caption__text">
                                <h3>Le délice des sens</h3>
                                <p>Folie-Méricourt</p>
                            </div>
                            <div class="btn__heart">
                                <i class="far fa-heart btn__heart--whiteBg"></i>
                                <i class="fas fa-heart btn__heart--whiteBg"></i>
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