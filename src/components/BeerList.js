import Beer from "./Beer"

const BeerList = ({allBeers, setBeerClickedAsProp, editFavoriteBeersAsProp}) => {
    
    const beerListAsJsxTags = allBeers.map((beer) => {
        return (
            <Beer singleBeer={beer} setBeerClickedAsProp={setBeerClickedAsProp} key={beer.id} editFavoriteBeersAsProp={editFavoriteBeersAsProp}/>
        )
    })

    
    return (
        <ul className="beer-list">
           {beerListAsJsxTags} 
        </ul>
    )
}

export default BeerList