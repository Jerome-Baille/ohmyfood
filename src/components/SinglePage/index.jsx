import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as farHeart } from '@fortawesome/free-regular-svg-icons';
import { faHeart as fasHeart, faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import { useParams } from 'react-router-dom';
import data from '../../assets/data.json'

const SinglePage = () => {
    const { id } = useParams();

    const handleToggle = (key) => {
        localStorage.getItem(key)? localStorage.removeItem(key) : localStorage.setItem(key, 'true');
        const btn = document.getElementById(key);
        localStorage.getItem(key)? btn.classList.add('btn__heart--clicked') : btn.classList.remove('btn__heart--clicked');
    };

    if (data) {
        return (
            <main>
                <div className="menu__img">
                    <img className="menu__img__content menu__img__content--small" src={data[id].imgSmall} alt={'Illustration du restaurant "'+ data[id].name+'"'} />
                    <img className="menu__img__content menu__img__content--large" src={data[id].imgLarge} alt={'Illustration du restaurant "'+ data[id].name+'"'} />
                </div>
    
                <section className="menu main-container">
                    <header className="menu__header">
                        <h2>{data[id].name}</h2>
                        <button className={(localStorage.getItem(id))? "btn__heart btn__heart--clicked" : "btn__heart"} id={id} onClick = {() => handleToggle(id)}>
                            <FontAwesomeIcon icon={farHeart} className="far"/>
                            <FontAwesomeIcon icon={fasHeart} />
                        </button>
                    </header>
                    
                    <div className="grid-container">
                        <div id="starters" className="menu__course">
                            <h3 className="menu__course__subtitle">
                                Entrées
                            </h3>
                            {data[id].starters.map((starter, index) => (
                                <div key={index} className="card card__caption">
                                    <div className="card__caption__text">
                                        <h3>{starter.name}</h3>
                                        <div>
                                            <p>{starter.description}</p>
                                            <span>{starter.price}€</span>
                                        </div>
                                        <div className="check-box">
                                            <FontAwesomeIcon icon={faCircleCheck} className="fas fa-check-circle" />
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
    
                        <div id="mainCourse" className="menu__course">
                            <h3 className="menu__course__subtitle">Plats</h3>
    
                            {data[id].mains.map((main, index) => (
                                <div key={index} className="card card__caption">
                                    <div className="card__caption__text">
                                        <h3>{main.name}</h3>
                                        <div>
                                            <p>{main.description}</p>
                                            <span>{main.price}€</span>
                                        </div>
                                    </div>
                                    <div className="check-box">
                                        <FontAwesomeIcon icon={faCircleCheck} className="fas fa-check-circle" />
                                    </div>
                                </div>
                            ))}
    
    
                        </div>
    
                        <div id="dessert" className="menu__course">
                            <h3 className="menu__course__subtitle">Desserts</h3>
                            
                            {data[id].desserts.map((dessert, index) => (
                                <div key={index} className="card card__caption">
                                    <div className="card__caption__text">
                                        <h3>{dessert.name}</h3>
                                        <div>
                                            <p>{dessert.description}</p>
                                            <span>{dessert.price}€</span>
                                        </div>
                                    </div>
                                    <div className="check-box">
                                        <FontAwesomeIcon icon={faCircleCheck} className="fas fa-check-circle" />
                                    </div>
                                </div>
                            ))}
    
                        </div>
                    </div>
    
                    <div className="main-container">
                        <a className="btn" href="#">Commander</a>
                    </div>
                    
                </section>
            </main>
        );
    }

}
export default SinglePage