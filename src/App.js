import React, { Component } from 'react';
import './App.css';
// import axios from 'axios';
import Products from './components/Products'
import axios from 'axios';

class App extends Component {
  constructor(){
    super();

    this.state = {
      products: []
    }
  }

  handleAddProduct(e){
    e.preventDefault();
    const name = e.target.elements.product.value;
    const img = e.target.elements.imageURL.value;
    const price = e.target.elements.price.value;
    axios.post('/api/products/', {name, img, price}).then(res => {
      this.setState({
        products: [...this.state.products, res.data]
      })
    })
  }

  handleDelete(id){
    axios.delete(`/api/products/${id}`).then(res => {
      console.log('yo!')
      console.log(this.state.products.filter(product => product.id !== id))
      //  this.setState({
      //   products: this.state.products.filter(product => product.id !== id)
      // })
    })
  }

  componentDidMount() {
    axios.get("/api/products").then(res => {
      this.setState({
        products:res.data
      })
    })
  }

  render() {
    return (
      <div className="App">
      <h1>Shelfie</h1>
        <form onSubmit={(e) => this.handleAddProduct(e)}>
          <input name="product" defaultValue={this.state.product}/>
          <input name="imageURL" defaultValue={this.state.imageURL}/>
          <input name="price" defaultValue={this.state.price}/>
          <button onClick={(e) => this.handleClearInput(e.target.value)}>Cancel</button>
          <button type="submit">Add to Inventory</button>
        </form>
        <Products products={this.state.products} handleDelete={this.handleDelete}/>
      </div>
    );
  }
}

export default App;
