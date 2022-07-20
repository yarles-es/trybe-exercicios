import React from "react";

class Pokemon extends React.Component {
    render() {
        const { id , name, type, averageWeight, image, moreInfo } = this.props.uniPokemon;
        const abrirPagina = () => window.open(moreInfo)
        return (
            <div className="Pokemon">
                <img src={image}></img>
                <h2>{name}</h2>
                <p>Type: {type}</p>
                <p>Average weight: {averageWeight.value} {averageWeight.measurementUnit}</p>
                <button onClick={abrirPagina} className = 'pesquisa'>Ler Mais...</button>
            </div>
        );
    }
}

export default Pokemon;