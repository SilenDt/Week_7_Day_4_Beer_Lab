

const Beer = ({singleBeer, setBeerClickedAsProp, editFavoriteBeersAsProp}) => {

    const handleClick = () => {
        setBeerClickedAsProp(singleBeer)
    }

    const handleFavorite = () => {
        editFavoriteBeersAsProp(singleBeer)
    }

    return (
        <li className="beer">
            <h4>{singleBeer.name}</h4>
            <p>{singleBeer.tagline}</p>
            <button onClick={handleFavorite}>Favorite</button>
            <button onClick={handleClick}>View Details</button>
        </li>
    )
}

export default Beer