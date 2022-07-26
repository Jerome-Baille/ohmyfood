import Search from '../Search';
import HowTo from '../HowTo';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as farHeart } from '@fortawesome/free-regular-svg-icons';
import { faHeart as fasHeart } from '@fortawesome/free-solid-svg-icons';
import { HashLink as Link } from 'react-router-hash-link';
import data from '../../assets/data.json'

const Home = () => {
    const handleToggle = (key) => {
        localStorage.getItem(key)? localStorage.removeItem(key) : localStorage.setItem(key, 'true');
        const btn = document.getElementById(key);
        localStorage.getItem(key)? btn.classList.add('btn__heart--clicked') : btn.classList.remove('btn__heart--clicked');
    };

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
                            <div className="card" key={index}>
                                <Link className="card__link" to={'menu/'+restaurant}></Link>
                                <img src={data[restaurant].imgSmall} alt={'Illustration du restaurant "'+ data[restaurant].name+'" à '+data[restaurant].localisation} />                    
                                <span className="card__new">Nouveau</span>
                                <div className="card__caption">
                                    <div className="card__caption__text">
                                        <h3>{data[restaurant].name}</h3>
                                        <p>{data[restaurant].localisation}</p>
                                    </div>
                                    <button className={(localStorage.getItem(restaurant))? "btn__heart btn__heart--clicked" : "btn__heart"} id={restaurant} onClick = {() => handleToggle(restaurant)}>
                                        <FontAwesomeIcon icon={farHeart} className="far btn__heart--whiteBg"/>
                                        <FontAwesomeIcon icon={fasHeart} className="btn__heart--whiteBg" />
                                    </button>
                                </div>
                            </div>
                        ))}
                        </div>
                    </div>
                </section>
            </main>
        )
    }

}

export default Home;