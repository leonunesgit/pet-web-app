const Card = () => {

    return (
        <div className="card-pet-container">
            <img className="card-pet type" src="/dog.svg" alt="type-img"></img>
            <img className="card-pet img" src="/dog.jpg" alt="pet-img"></img>
            <h3 className="card-pet type-text">Cachorro</h3>
            <span className="card-pet gender-symbol">♀</span>
            <div className="card-pet text">
                <p>Nome: Dough</p>
                <p>Raça: S.R.D.</p>
                <p>Idade: 2 anos</p>
                <p>Localização: CDZ Santo André, SP</p>
            </div>
            <button className="card-pet btn">Conheça</button>
        </div>
    )
}

export default Card;