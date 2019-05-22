import React, { Component} from 'react';
import Cartcolumn from './Cartcolumn'
import EmptyCart from './Emptycart'
import {ProductConsumer} from '../../context'

export default class Cart extends Component {
  render() {
    return (
      <section>
      <ProductConsumer>
      {value =>{
        const {cart}=value
        if(cart.length>0)
        {return (
          <Cartcolumn />
        )}
        else{
          return(
              <EmptyCart />
          )
        }
      }}


      </ProductConsumer>

      </section>
    );
  }
}
