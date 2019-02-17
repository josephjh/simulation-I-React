import React, {Component} from 'react';


class Products extends Component {
    render(){
      const data = this.props.products;
      const listItems = data.map((d) => <li key={d.id}>
        {d.product_name} 
        {d.img_url} 
        {d.price}
        <button onClick={() => this.props.handleDelete(d.id)}>Delete</button>
      </li>)
        return(
            <ul>
              {listItems}
            </ul>
        )
    }
}

export default Products;