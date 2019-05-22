import React, { Component } from 'react';
import {storeProducts,detailProduct} from './data'

const ProductContext = React.createContext()

class ProductProvider extends Component {

  state ={
    products:[],
    detailProduct,
    cart:storeProducts,
    modelOpen:false,
    modelProduct:detailProduct,
    cartSubTotal:0,
    cartTotal:0

  }

  componentDidMount(){
  this.setProduct()
  }

  setProduct =()=>{
    let products =[]
    storeProducts.forEach(item => {
      const singleItem = {...item}
      products=[...products,singleItem]
    });
    this.setState(()=>{
      return {products}
    })
  }

  getItem = id => this.state.products.find(item=>item.id===id)



  handleDetail = (id) =>
  {
    const product = this.getItem(id)
    this.setState(()=> {return{detailProduct:product}})
  }

  addToCart = (id) =>
  {
    let tempProducts = [...this.state.products]
    const index = tempProducts.indexOf(this.getItem(id))
    const product = tempProducts[index]
    product.inCart = true
    product.count = 0
    const price = product.price
    product.total = price
    this.setState(()=>{
       return {products:tempProducts,cart:[...this.state.cart,product]}
     },
       ()=>{
         console.log(this.state)
       }
    )

  }

  openModel = id =>{
    const product = this.getItem(id)
    this.setState(()=>
  {
      return {modelProduct:product,modelOpen:true}

  })
  }

  closeModel =  () =>{
    this.setState(()=>
  {
    return {modelOpen:false}
  })
  }

  increment = (id) => {

  }

  decrement = (id) => {


  }

  removeItem = (id) => {


  }

  clearCart = () => {


  }


  render() {
    return (
    <ProductContext.Provider value={{
      ...this.state,
      handleDetail:this.handleDetail,
      addToCart:this.addToCart,
      openModel:this.openModel,
      closeModel:this.closeModel,
      increment:this.increment,
      decrement:this.decrement,
      removeItem:this.removeItem,
      clearCart:this.clearCart

    }}>
      {this.props.children}
    </ProductContext.Provider>
    );
  }
}

const ProductConsumer = ProductContext.Consumer


export {ProductProvider,ProductConsumer};
