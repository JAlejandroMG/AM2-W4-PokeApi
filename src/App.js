import React from 'react';
import Card from './components/card/card';
import Pagination from './components/pagination';
import './App.css';
import pokeTypes from './databases/pokeTypes';
import pokeColors from './databases/pokeColors';


export default class App extends React.Component {
    constructor() {
        super();
        this.state = {
            pokemones: [],
            currentPage: 1,
            pokemonPerPage: 12,
            pokemonLimit: 893
        }
    } //Hay un máximo de 893 imágenes de Pokemon disponibles y pokemonPerPage debe ser múltiplo de 3


  async componentDidMount() {
    const limit = this.state.pokemonPerPage;
    const url = 'https://pokeapi.co/api/v2/pokemon';
    //Consumir la API de pokeapi
    try {
      const response = await fetch(`${url}?limit=${limit}`);
      const data = await response.json();
      await this.setState({pokemones: data.results});
    } catch(error) {
        console.log(error.message);
    }
  }

  getNumber = (index) => {
    let id = (index + 1) + ((this.state.currentPage - 1) * this.state.pokemonPerPage);
    return id;
  }

  getImage = (id) => {
    let pokemonImg = "";
    //La imagen para el Pokemon con id 11 y nos encontramos en la segunda página
    //0 -> {"name":"metapod","url":"https://pokeapi.co/api/v2/pokemon/11/"}
    //          0   + 1  + (( 2 - 1 ) * 10) = 11
    //          0   + 1  + (( 3 - 1 ) * 10) = 21
    // let id = (index + 1) + ((this.state.currentPage - 1) * this.state.pokemonPerPage); // Se recibía index

    if(id < 10){
        pokemonImg = `https://assets.pokemon.com/assets/cms2/img/pokedex/full/00${id}.png`;
    }else if(id >= 10 && id < 100){
        pokemonImg = `https://assets.pokemon.com/assets/cms2/img/pokedex/full/0${id}.png`;
    }else{
        pokemonImg = `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${id}.png`;
    }

    return pokemonImg;
  }

  fetchPage = (requestPage) => {
    this.setState({currentPage: requestPage});
    //1. Completar el método para poder obtener los pokemones dependiendo de la página solicitada
    const limit = this.state.pokemonPerPage;
    const url = 'https://pokeapi.co/api/v2/pokemon';
    fetch(`${url}?limit=${limit}&offset=${(requestPage - 1) * this.state.pokemonPerPage}`)
          .then(response => response.json())
          .then(data => this.setState({pokemones: data.results}))
          .catch( error => {
            console.log(error);
          })
  }

  updatePokemonPerPage = (event) => {
    const newValue = parseInt(event.target.value);
    this.setState({pokemonPerPage: newValue});
    // event.preventDefault();
  }


    render() {
        return (
          <div className="contains-all">
            <div className="above-container">
              <div className="container">
                <div className="pokedex-header">
                  {/* PENDIENTE
                  <div className="input">
                    <form>
                      <input value={`${this.state.pokemonPerPage}`} type="number" onChange={this.updatePokemonPerPage}></input>
                    </form>
                  </div> */
                  }
                  {/* <img src='./img/pokemon.png'/> */}
                  <div className="pokedex-header-img"></div>
                </div>
                <div className="pokedex-container">
                  {                
                    this.state.pokemones.map( (pokemon, index) => {      
                      //2. Solucionar el problema de obtener las imagenes de los pokemones con id < 10, > 10, > 100
                      const pokemonNumber = this.getNumber(index);
                      const pokemonImg = this.getImage(pokemonNumber); // Se usaba index
                      const pokemonTypes = pokeTypes[pokemonNumber-1];
                      const pokemonColors = pokemonTypes.map(type => {            
                                              return pokeColors[type]; // No funciona como pokeColors.type
                                            });
                      
                      let colors = [];
                      pokemonColors.length===1 ? colors = [pokemonColors[0], pokemonColors[0]] : colors = [pokemonColors[0], pokemonColors[1]] ;
                      // let pokemonImg = `https://assets.pokemon.com/assets/cms2/img/pokedex/full/00${index + 1}.png`
                      return (
                        <Card key={index + 1} number={pokemonNumber} name={pokemon.name} img={pokemonImg} colors={colors} />
                      )
                    })
                  }
                </div>
                <div className="pokedex-pagination">
                  <Pagination currentPage={this.state.currentPage} pokemonPerPage={this.state.pokemonPerPage} pokemonLimit={this.state.pokemonLimit} fetchPageFn={this.fetchPage} />
                </div>
              </div>
            </div>
          </div>
        )
    }
}
