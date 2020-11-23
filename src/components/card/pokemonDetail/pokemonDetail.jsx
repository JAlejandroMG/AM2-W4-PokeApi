import React from 'react';
import PokemonData from './pokemonData/pokemonData';
import './pokemonDetail.css';


export default class PokemonDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showData: false,
      pokemonStats: [],
      pokemonTypes: [],
    }
  }

  getPokemonStats = (data) => {
    const stats = [];
    data.stats.map(stat => {
      stats.push(stat.base_stat)
    })
    return stats;
  }

  getPokemonTypes = (data) => {
    const types = [];
    data.types.map(type => {
      types.push(type.type.name)
    })
    return types;
  }

  openPokemonData = () => {
    this.setState({showData: true})
  }

  componentDidMount = async() => {
    const url = 'https://pokeapi.co/api/v2/pokemon/';
    const number = this.props.number;

    //Consumir la API de pokeapi
    const response = await fetch(`${url}${number}`);
    const data = await response.json();
    const stats = await this.getPokemonStats(data);
    await this.setState({pokemonStats: stats});
    const types = await this.getPokemonTypes(data);    
    await this.setState({pokemonTypes: types});
    this.openPokemonData();
  }

  render() {
    return (
      <div className="pokemon-detail-container">
        <div className="pokemon-detail">
          <div className="pokemon-detail-id">
            <h3>{this.props.number}</h3>
            <h2>{this.props.name}</h2>
          </div>
          <div className="pokemon-detail-img">
            <img src={this.props.img} alt={this.props.name}/>
          </div>
        </div>
        {
          this.state.showData &&
          <PokemonData pokemonTypes={this.state.pokemonTypes} pokemonStats={this.state.pokemonStats} closeModalFn={this.props.closeModalFn} />
        }
      </div>
    );
  }
}
