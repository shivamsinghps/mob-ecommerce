import React, { Component } from 'react';
import Product from './Product'
// import Title from './Title'
import {ProductConsumer} from '../context'
import {storeProducts} from "../data"

export default class ProductList extends Component {

  state = {
    products : storeProducts
  }

  render() {

    return (
            <React.Fragment>
              <div className='py-8'>
              <div className='container'>

              <div className='row'>
              <ProductConsumer>
              {(hello)=>{ return <h1>
                {hello}</h1>

              }}
              </ProductConsumer>
              </div>
              </div>
              </div></React.Fragment>
    );
  }
}
