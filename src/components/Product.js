import React, { Component } from 'react';

import {Link} from 'react-router-dom'
import {ProductConsumer} from '../context'
import ProductWrapper from './UIcompo/ProductWrapper'

export default class Product extends Component {
  render() {
    const {id,title,img,price,inCart} = this.props.product
    return (
    <ProductWrapper className="col-6 mx-auto col-md-6 col-lg-3 my-3">
      <div className="card" >
        <div className="img-container p-10" onClick={()=>{console.log('u clicked');}}>
            <Link to ='/details'>
              <img src={img} alt='products' className='card-img-top' />
            </Link>
            <button className='cart-btn mb-2 ml-2' disabled={inCart?true:false} onClick={()=>{
              console.log('added to cart');
            }}>
            {inCart?(<p className='text-capitalize mb-1 ' disabled>incart</p>):<i className='fas fa-cart-plus' />}
            </button>
        </div>
        <div className='card-footer d-flex justify-content-between'>
          <p className='align-self-center mb-0'>
            {title}
          </p>
            <h6 className='color-blue mb-0 '>
              <span className='mr-1'>
              R
              </span>
              {price}
            </h6>
        </div>
      </div>
    </ProductWrapper>
    );
  }
}
