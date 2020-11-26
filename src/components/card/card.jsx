import React from 'react';
import Modal from 'react-modal';
import PokemonDetail from './pokemonDetail/pokemonDetail';
import './card.css';


/* const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)',
    background            : `linear-gradient(to right, ${this.props.colors[0]}, ${this.props.colors[1]}`
  }
}; */


export default class Card extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
    }
  }

  componentDidMount() {
    Modal.setAppElement("body");
  }

  openModal = () => {
    this.setState({showModal: true})
  }

  closeModal = () =>{
    this.setState({showModal: false})
  }
  
  render() {
    const customStyles = {
      content : {
        top                   : '50%',
        left                  : '50%',
        right                 : 'auto',
        bottom                : 'auto',
        marginRight           : '-50%',
        transform             : 'translate(-50%, -50%)',
        width                 : '50vw',
        height                : '70vh',
        background            : `linear-gradient(to right, ${this.props.colors[0]}, ${this.props.colors[1]}`,
        padding               : '20px',
        overflow              : 'hidden',
      }
    };

    return (
      <div className='card-container' style={{background: `linear-gradient(to right, ${this.props.colors[0]}, ${this.props.colors[1]}`}}>
        <div className="pokemon-id">
          <h3>{this.props.number}</h3>
          <h2>{this.props.name[0].toUpperCase() + this.props.name.slice(1)}</h2>
        </div>
        <img src={this.props.img} alt={this.props.name}/>
        <button  className="bounce" onClick={() => this.openModal()}>
          <span className="D">D</span> 
          <span className="e">e</span> 
          <span className="t">t</span> 
          <span className="a">a</span> 
          <span className="i">i</span> 
          <span className="l">l</span> 
          <span className="s">s</span>
        </button>
        {
          /* <Modal  className="modal" isOpen={this.state.showModal} style={customStyles}> */
        }
        <Modal isOpen={this.state.showModal} style={customStyles}>
          <PokemonDetail number={this.props.number} name={this.props.name} img={this.props.img} closeModalFn={this.closeModal} colors={this.props.colors} />
        </Modal>
      </div>
    )
  }
}
