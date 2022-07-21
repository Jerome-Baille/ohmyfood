import Search from '../Search';
import HowTo from '../HowTo';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as farHeart } from '@fortawesome/free-regular-svg-icons';
import { faHeart as fasHeart } from '@fortawesome/free-solid-svg-icons';
import { HashLink as Link } from 'react-router-hash-link';
import data from '../../assets/data.json'

const Home = () => {
    if (data) {
        return(
            <main>
              <Search />
              <HowTo />
    
                <section id="restaurants" className="restaurants">
                    <div className="main-container">
                        <h2>Restaurants</h2>
        
                        <div className="restaurants__grid-container">
                        
                        {Object.keys(data).map((restaurant, index) => (
                            <Link key={index} className="card" to={'menu/'+restaurant}>
                                <img src={data[restaurant].imgSmall} alt={'Illustration du restaurant "'+ data[restaurant].name+'" à '+data[restaurant].localisation} />                    
                                <span className="card__new">Nouveau</span>
                                <div className="card__caption">
                                    <div className="card__caption__text">
                                        <h3>{data[restaurant].name}</h3>
                                        <p>{data[restaurant].localisation}</p>
                                    </div>
                                    <div className="btn__heart">
                                        <FontAwesomeIcon icon={farHeart} className="far btn__heart--whiteBg"/>
                                        <FontAwesomeIcon icon={fasHeart} className="btn__heart--whiteBg" />
                                    </div>
                                </div>
                            </Link>
                        ))}
                        </div>
                    </div>
                </section>
            </main>
        )
    }

}

export default Home;