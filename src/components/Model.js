import React, { Component } from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'
import {ProductConsumer} from '../context'
import {ButtonContainer} from "./UIcompo/Button"

export default class Model extends Component {
  render() {
    return (
      <ProductConsumer>
        {(value) =>{
          const {modelOpen,closeModel} = value
          const {img,title,price} = value.modelProduct

            if(!modelOpen)
              {return null}
            else {
              return(
              <ModelContainer>
              <div className='container'>
                <div className='row'>
                  <div id='model' className='col-8 mx-auto col-md-6 col-lg-4 text-center px-5 py-2 text-capitalize'>
                    <h5>Item added to cart</h5>
                    <img src={img} className='img-fluid' alt={title} / >
                    <h5>
                      {title}
                    </h5>
                    <h5 className='text-muted'>
                      Price : {price} Rupees
                    </h5>
                    <Link to='/'>
                    <ButtonContainer onClick ={()=>{
                      closeModel()
                    }}>
                      GotoStore
                    </ButtonContainer>
                    </Link>
                    <Link to='/Cart'>
                    <ButtonContainer onClick ={()=>{
                      closeModel()
                    }}>
                      GotoCart
                    </ButtonContainer>
                    </Link>
                  </div>
                </div>
              </div>
              </ModelContainer>
            )
            }
        }}
      </ProductConsumer>
    );
  }
}

const ModelContainer = styled.div`
position :fixed;
top :0;
bottom:0;
left:0;
right:0;
background:rgba(0,0,0,0.4);
display:flex;
align-items:center;
justify-content:center;

#model{
  background : white
}
`
