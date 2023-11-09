import Card from "./Card";

const GridSection = () => {
    return(
        <div className="grid-section">
            <div className="filter-section-out"></div>
            <div className="cards-section">
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
        </div>
    )
}

export default GridSection;