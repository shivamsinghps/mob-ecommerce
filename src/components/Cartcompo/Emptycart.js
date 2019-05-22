import React, { Component} from 'react';
import empcart from './cart.png'
import {ButtonContainer} from '../UIcompo/Button'
import {Link} from 'react-router-dom'

export default class EmptyCart extends Component {
  render() {
    return (
      <React.Fragment>
        <div className='container'>
          <div className='row'>
            <div className='col-6 mx-auto col-md-6 col-lg-3 my-3 '>
              <div className='img-container'>
                <img src={empcart} alt='Oh Snap' className='img-fluid' />
              </div>
              <div className='card-footer d-flex justify-content-between'>
              <h5 className='mb-0 mx-auto text-muted text-capitalize'>
                  Ohh U r empty
              </h5>
              </div>
            </div>
          </div>
        </div>
        <div className='row'>
        <div className='col-9 mx-auto col-md-9 col-lg-3 my-5 '>
        <Link to='/'>
          <ButtonContainer>
            Wanna Go to Store
          </ButtonContainer>
        </Link>
          </div>
          </div>
      </React.Fragment>
    );
  }
}
