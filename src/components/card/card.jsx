import React from 'react';
import Modal from 'react-modal';
import PokemonDetail from './pokemonDetail/pokemonDetail';
import './card.css';


const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)',
    background            : '#ddd'
  }
};


export default class Card extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      pokemon_stats: [],
      pokemon_types: []
    }
  }

  openModal = () => {
    this.setState({showModal: true})
  }

  closeModal = () =>{
    this.setState({showModal: false})
  }

  getPokemonStats = (data) => {
    const stats = [];
    data.stats.map(stat => {
      stats.push({name:stat.stat.name, base:stat.base_stat})
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

  getPokemonDetails = async(number) => {
    const url = 'https://pokeapi.co/api/v2/pokemon/';
    //Consumir la API de pokeapi

    const response = await fetch(`${url}${number}`);
    const data = await response.json();
    const stats = await this.getPokemonStats(data);
    this.setState({pokemon_stats: stats});
    const types = await this.getPokemonTypes(data);
    this.setState({pokemon_types: types});
    this.openModal();
  }

  render() {
    return (
      <div className="card-container">
        <div className="pokemon-id">
          <h3>{this.props.number}</h3>
          <h2>{this.props.name}</h2>
        </div>
        <img src={this.props.img} alt={this.props.name}/>
        <button onClick={() => this.getPokemonDetails(this.props.number)}>Get details</button>
          <Modal isOpen={this.state.showModal} style={customStyles} contentLabel="Pokemon Modal">
            <PokemonDetail number={this.props.number} name={this.props.name} img={this.props.img} pokemonStats={this.state.pokemon_stats} pokemonTypes={this.state.pokemon_types} closeModalFn={this.closeModal}/>
          </Modal>
      </div>
    )
  }
}
