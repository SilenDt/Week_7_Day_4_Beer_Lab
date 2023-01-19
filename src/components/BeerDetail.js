

const BeerDetail = ({selectedBeerAsProp, setBeerClickedAsProp}) => {


    const handleReturnClick = () => {
        setBeerClickedAsProp(null)
    }

    return (
        <div>
            <p>{selectedBeerAsProp.description}</p>
            <button onClick={handleReturnClick}>return to beer list</button>
        </div>
    )
}

export default BeerDetail