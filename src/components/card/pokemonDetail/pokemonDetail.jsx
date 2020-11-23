import React from 'react';
import './pokemonDetail.css';


export default class PokemonDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemonStats: this.props.pokemonStats,
      pokemonTypes: this.props.pokemonTypes
    }
  }

  // number={this.props.number} name={this.props.name} img={this.props.img} pokemonStats={this.state.pokemon_stats} pokemonTypes={this.state.pokemon_types} closeModalFn={this.closeModal}

  // getPokemonData = (info) => {
  //   let data = info;
  //   return data;
  // }
  
  /* componentDidMount() {
    const url = 'https://pokeapi.co/api/v2/pokemon/';
    //Consumir la API de pokeapi

    const response = await fetch(`${url}${this.props.number}`);
    const data = await response.json();
    const pokemonData = await this.getPokemonData(data);
    // console.log(pokemonStats);
    this.setState({pokemon_data: pokemonData})

    fetch(`${url}${this.props.number}`)
      .then(response => {
        // console.log(response);
        return response.json();
      })
      .then(data => {
        console.log(data);
        this.setState({pokemon: data})
      })
      .catch( error => {
        console.log(error);
      })
  } */


  render() {
    // const stats = this.state.pokemon_stats;
    // console.log(stats)
    // console.log(this.state.pokemon_data);

    return (
      <div className="pokemon-detail-container">
        <div className="pokemon-detail-id">
          <h3>{this.props.number}</h3>
          <h2>{this.props.name}</h2>
        </div>
        <img src={this.props.img} alt={this.props.name}/>
        <div className="pokemon-types">
          {
            this.state.pokemonTypes.map(pokemonType => {
              return (
                <span>{pokemonType}</span>
              )
            })
          }
        </div>
        <div className="pokemon-stats">
          <div>
            <h4>{this.props.pokemonStats[0].name.toUpperCase()+': '+this.props.pokemonStats[0].base}</h4>
            <h4>{this.props.pokemonStats[5].name.charAt(0).toUpperCase()+this.props.pokemonStats[5].name.slice(1)+': '+this.props.pokemonStats[5].base}</h4>            
          </div>
          <div>
            <h4>{this.props.pokemonStats[1].name.charAt(0).toUpperCase()+this.props.pokemonStats[1].name.slice(1)+': '+this.props.pokemonStats[1].base}</h4>
            <h4>{this.props.pokemonStats[2].name.charAt(0).toUpperCase()+this.props.pokemonStats[2].name.slice(1)+': '+this.props.pokemonStats[2].base}</h4>
          </div>
          <div>
            <h4>{this.props.pokemonStats[3].name.charAt(0).toUpperCase()+this.props.pokemonStats[3].name.slice(1)+': '+this.props.pokemonStats[3].base}</h4>
            <h4>{this.props.pokemonStats[4].name.charAt(0).toUpperCase()+this.props.pokemonStats[4].name.slice(1)+': '+this.props.pokemonStats[4].base}</h4>
          </div>
        </div>
        <button className="button-modal" onClick={this.props.closeModalFn}>Close details</button>
      </div>
    );
  }
}
