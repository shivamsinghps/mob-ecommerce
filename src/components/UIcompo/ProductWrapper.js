import styled from 'styled-components'

 const ProductWrapper =styled.div`
.card {
  border-style : none;
  border-color : tarnsparent;
  transition : all 0.4s linear;
      }

.cart-footer{
  background : tarnsparent;
  border-top : tarnsparent;
  transition : all 1s linear;
}

&:hover {
  .card{
    border : 0.04rem solid rgba(0,0,0,0.4);
    box-shadow : 2px 2px 5px 0px rgba(0,0,0,0.4);
  }

  .card-footer{
    background : rgb(167,167,167,0.8);
  }
}
.img-container{
  position : relative;
  overflow:hidden;
}
.img-container:hover .card-img-top{
transform : scale(1.1);
}

.img-container:hover .card-img-top{
  transition : all 1s linear;
}

.cart-btn{
  position : absolute;
  bottom:0;
  right:0;
  background:blue;
  border:none;
  color:white;
  font-size: 1.4rem;
  transform:translate(100%,100%);
  transition : all 1s linear;
}

.img-container:hover .cart-btn {
  transform : translate(0,0);
}

.cart-btn:hover{
  color : blue;

}
`
export default ProductWrapper
