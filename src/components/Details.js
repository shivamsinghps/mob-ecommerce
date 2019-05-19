import React, { Component} from 'react';
import {ProductConsumer} from '../context'
import {ButtonContainer} from './UIcompo/Button'
import {Link} from 'react-router-dom'
export default class Details extends Component {
  render() {
    return (
      <ProductConsumer>
        {(value)=>{
        const {id,company,img,info,price,title,inCart}=value.detailProduct
        return(
          <div className='container py-8'>
            <div className='row'>
              <div className='col-10 mx-auto text-center my-5'>
                <h1>{title}</h1>
              </div>
            </div>
            <div className='row'>
              <div className='col-10 mx-auto col-md-6 my-3'>
                <img src={img} className='img-fluid' alt={title} />
              </div>
              <div className='col-10 mx-auto col-md-6 my-3 text-capitalize'>
                <h3>{title}</h3>
                <h5 className='text-title text-uppercase text-muted mt-3 mb-2'>Brought to u by:
                <span className='text-uppercase'>
                    {company}
                </span>
                </h5>
                <h5 className='text-blue'>
                  <strong>
                    <span>
                    Rupees:
                    </span>
                  {price}
                  </strong>
                </h5>
                <div className='text-capitalize mt-3 mb-0'>
                <span>
                Details:
                </span>
                <br />
                <p className='text-muted lead'>
                 {info}
                </p>
                <Link to='/'>
                  <ButtonContainer>
                  back to product
                  </ButtonContainer>
                </Link>
                <Link to='/'>
                  <ButtonContainer disabled={inCart?true:false} onClick={()=>{
                    value.addtoCart(id)
                  }}>
                  {inCart?'inCart':'add to cart'}
                  </ButtonContainer>
                </Link>
                </div>
              </div>
            </div>
          </div>
        )
        }}
      </ProductConsumer>
    );
  }
}
