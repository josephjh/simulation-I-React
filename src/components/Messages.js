import React, {Component} from 'react';
import axios from 'axios';

class Messages extends Component {
    constructor(){
        super();

        this.state = {
          products: []
        }
    }

    componentDidMount() {
      axios.get("/api/all").then(res => {
        this.setState({
          products:res.data
        })
      })
    }
    
    render(){
      const data = this.state.products;
      const listItems = data.map((d) => <div key={d.id}>{d.product_name} {d.img_url} {d.price}</div>)
        return(
            <ul>
              {listItems}
            </ul>
        )
    }
}

export default Messages;