import React from 'react';
import './pokemonData.css';

function PokemonData(props) {
 return (
  <div className="pokemon-data-container">
    <div className="pokemon-types">
      {
        props.pokemonTypes.map((pokemonType, index) => {
          return (
            <span key={index} >{pokemonType}</span>
          )
        })
      }
    </div>        
    <div className="pokemon-stats">
      <div>
        <h4>{`HP : ${props.pokemonStats[0]}`}</h4>
        <h4>{`Speed : ${props.pokemonStats[5]}`}</h4>            
      </div>
      <div>
        <h4>{`Attack : ${props.pokemonStats[1]}`}</h4>
        <h4>{`Defense : ${props.pokemonStats[2]}`}</h4>
      </div>
      <div>
        <h4>{`Special attack : ${props.pokemonStats[3]}`}</h4>
        <h4>{`Special defense : ${props.pokemonStats[4]}`}</h4>
      </div>
    </div>
    <button className="button-modal" onClick={props.closeModalFn}>Close details</button>
  </div>
 )
}

export default PokemonData;
