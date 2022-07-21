const Search = () => {
    return (
        <div className="search">
            <form class="localisation" method="post" action=".">
                <i class="fas fa-map-marker-alt localisation__logo"></i>
                <input class="localisation__text" type="search" id="citySearch" name="citySearch" placeholder="Paris, Belleville" aria-label="Entrez le nom de la ville recherchée ici" disabled />
            </form>

            <section class="description">
                <div class="main-container">
                    <h2>Réservez le menu qui vous convient</h2>
                    <p>Découvrez des restaurants d'exception, séléctionnés par nos soins.</p>
                    <a class="btn" href="#restaurants">Explorer nos restaurants</a>
                </div>
            </section>
        </div>
    )
}
export default Search