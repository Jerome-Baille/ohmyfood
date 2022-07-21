import { HashLink as Link } from 'react-router-hash-link';

const Search = () => {
    return (
        <div className="search">
            <form className="localisation" method="post" action=".">
                <i className="fas fa-map-marker-alt localisation__logo"></i>
                <input className="localisation__text" type="search" id="citySearch" name="citySearch" placeholder="Paris, Belleville" aria-label="Entrez le nom de la ville recherchée ici" disabled />
            </form>

            <section className="description">
                <div className="main-container">
                    <h2>Réservez le menu qui vous convient</h2>
                    <p>Découvrez des restaurants d'exception, séléctionnés par nos soins.</p>
                    <Link className="btn" to="/#restaurants">
                        Explorer nos restaurants
                    </Link>
                </div>
            </section>
        </div>
    )
}
export default Search