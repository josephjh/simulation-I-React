import React, { Component } from 'react';
import './App.css';
// import axios from 'axios';
import Messages from './components/Messages'

class App extends Component {
  constructor(){
    super();

    this.state = {
      product: '',
      imageURL: '',
      price: 0
    }
    // this.state.product = this.state.product.bind(this);
    // this.state.imageURL = this.state.imageURL.bind(this);
    // this.state.price = this.state.price.bind(this);
  }

  handleClearInput(){
    this.setState({
      product: '',
      imageURL:'',
      price: 0
    })
  }

  render() {
    return (
      <div className="App">
      <h1>Shelfie</h1>
        <label>
          <input name="product" defaultValue={this.state.product}/>
          <input name="imageURL" defaultValue={this.state.imageURL}/>
          <input name="price" defaultValue={this.state.price}/>
          <button onClick={(e) => this.handleClearInput(e.target.value)}>Cancel</button>
          <button>Add to Inventory</button>
          </label>
          <Messages/>
      </div>
    );
  }
}

export default App;
