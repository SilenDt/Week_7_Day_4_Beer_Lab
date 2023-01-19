import { useState, useEffect } from "react"
import BeerList from "../components/BeerList"
import BeerDetail from "../components/BeerDetail"

const BeerBox = () => {

    const [listOfBeers, setlistOfBeers] = useState([])
    const [selectedBeer, setSelectedBeer] = useState(null)
    const [favoriteBeers, setFavoriteBeers] = useState([])
    
    const fetchBeerListData = function() {
        fetch("https://api.punkapi.com/v2/beers") 
            .then(response => response.json())
                .then(data => setlistOfBeers(data))
    }

    useEffect(() => {
        fetchBeerListData()
    }, [])

    const onBeerClicked = (beer) => {
        setSelectedBeer(beer)
    }

    const editFavoriteBeers = (beer) => {
        const newFavorites = [...favoriteBeers, beer]
        setFavoriteBeers(newFavorites)
    }

    const seeFavorites = () => {
        setlistOfBeers(favoriteBeers)
    }

    console.log("Favorite Beers:", favoriteBeers)
    return (
        <div>
            {selectedBeer ? <h1>{selectedBeer.name}</h1> : <h1>Brewdog Beers</h1>}
            <button onClick={seeFavorites}>View Favorites</button>
            {!selectedBeer && <BeerList allBeers={listOfBeers} setBeerClickedAsProp={onBeerClicked} editFavoriteBeersAsProp={editFavoriteBeers}/>}
            {selectedBeer && <BeerDetail selectedBeerAsProp={selectedBeer} setBeerClickedAsProp={onBeerClicked}/>}
        </div>
    )
}

export default BeerBox