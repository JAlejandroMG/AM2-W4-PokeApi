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
    }
  }

  openModal = () => {
    this.setState({showModal: true})
  }

  closeModal = () =>{
    this.setState({showModal: false})
  }
  
  render() {
    return (
      <div className="card-container">
        <div className="pokemon-id">
          <h3>{this.props.number}</h3>
          <h2>{this.props.name}</h2>
        </div>
        <img src={this.props.img} alt={this.props.name}/>
        <button onClick={() => this.openModal()}>Get details</button>
          <Modal isOpen={this.state.showModal} style={customStyles} contentLabel="Pokemon Modal">
            <PokemonDetail number={this.props.number} name={this.props.name} img={this.props.img} closeModalFn={this.closeModal}/>
          </Modal>
      </div>
    )
  }
}
