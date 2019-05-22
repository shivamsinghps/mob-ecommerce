import React, { Component } from 'react';
import wtf from './logo/confused.png'
import {ButtonContainer} from './UIcompo/Button'
import {Link} from 'react-router-dom'


export default class Default extends Component {
  render() {
    return (
    <React.Fragment>
      <div className='container'>
        <div className='row'>
          <div className='col-6 mx-auto col-md-6 col-lg-3 my-3 '>
            <div className='img-container'>
              <img src={wtf} alt='Oh Snap' className='img-fluid' />
            </div>
            <div className='card-footer d-flex justify-content-between'>
              <p className='align-self-center mb-0'>
                Dude Seriouly!!
              </p>
                <h6 className='mb-0 '>

                  Check the link bro!
                </h6>
            </div>
          </div>
        </div>
      </div>
      <div className='row'>
      <div className='col-9 mx-auto col-md-9 col-lg-1 my-3 '>
      <Link to='/'>
        <ButtonContainer>
          Wanna Go Back!
        </ButtonContainer>
      </Link>
        </div>
        </div>
    </React.Fragment>
    );
  }
}
