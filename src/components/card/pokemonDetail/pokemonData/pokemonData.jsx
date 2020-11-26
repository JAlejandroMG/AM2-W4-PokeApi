import React from 'react';
import { Progress } from 'react-sweet-progress';
import "react-sweet-progress/lib/style.css";
import './pokemonData.css';

function PokemonData(props) {
 return (
  <div className="pokemon-data-container">
    <div className="pokemon-types">
      {
        props.pokemonTypes.map((pokemonType, index) => {
          return (
            <h3 key={index} style={{background: `${props.colors[index]}`}}>{pokemonType}</h3>
          )
        })
      }
    </div>        
    <div className="pokemon-stats">
      <div className="col1">
        <div>
          <h4>{`HP : ${props.pokemonStats[0]}`}</h4>
          <Progress percent={props.pokemonStats[0]} status="success" />
        </div>
        <div>
          <h4>{`Speed : ${props.pokemonStats[5]}`}</h4>
          <Progress percent={props.pokemonStats[5]} status="success" />
        </div>
      </div>
      <div className="col2">
        <div>
          <h4>{`Attack : ${props.pokemonStats[1]}`}</h4>
          <Progress percent={props.pokemonStats[1]} status="success" />
        </div>
        <div>
          <h4>{`Defense : ${props.pokemonStats[2]}`}</h4>
          <Progress percent={props.pokemonStats[2]} status="success" />
        </div>
      </div>
      <div className="col3">
        <div>
          <h4>{`Special attack : ${props.pokemonStats[3]}`}</h4>
          <Progress percent={props.pokemonStats[3]} status="success" />
        </div>
        <div>
          <h4>{`Special defense : ${props.pokemonStats[4]}`}</h4>
          <Progress percent={props.pokemonStats[4]} status="success" />
        </div>
      </div>
    </div>
    <button className="button-modal" onClick={props.closeModalFn}>Close details</button>
  </div>
 )
}

export default PokemonData;
