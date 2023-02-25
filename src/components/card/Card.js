function Card({image, name, life, attack, defense, speed}){
    return (
        <div className="container bg-dark text-light rounded pt-3 pb-3">
            <div className="row">
                <div className="col">
                    <h3 className="text-center m-0">{name}</h3>
                </div>
            </div>
            <hr></hr>
            <div className="row">
                <div className="col-3">
                    <img className="rounded img-thumbnail w-100" src={image}></img>
                </div>
                <div className="col-9">
                    <div className="row-s">
                        <div className="col bg-danger text-center rounded ps-2 pe-2">
                            <p>Vida - {life}</p>
                        </div>
                    </div>
                    <div className="row text-center">
                        <div className="col-4">
                            <div className="bg-info bg-opacity-50 rounded">
                                <p>Ataque - {attack}</p>
                            </div>
                        </div>
                        <div className="col-4">
                            <div className="bg-dark-subtle bg-opacity-50 text-dark rounded">
                                <p>Defesa - {defense}</p>
                            </div>
                        </div>
                        <div className="col-4">
                            <div className="bg-success rounded">
                                <p>Rapidez - {speed}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card;