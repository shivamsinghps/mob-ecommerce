import React, { Component } from 'react';
import {storeProducts,detailProduct} from './data'

const ProductContext = React.createContext()

class ProductProvider extends Component {

  state ={
    products:[],
    detailProduct,
    cart:[],
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

  increment = id => {
    let tempCart = [...this.state.cart]
    const selectedProduct = tempCart.find(item => {
      return item.id === id
    })
    const index = tempCart.indexOf(selectedProduct)
    const product = tempCart[index]
    product.count = product.count + 1
    product.total = product.count * product.price
    this.setState(() => {
      return {
        cart: [...tempCart]
      }
    }, this.addTotals)
  }
  decrement = id => {
    let tempCart = [...this.state.cart]
    const selectedProduct = tempCart.find(item => {
      return item.id === id
    })
    const index = tempCart.indexOf(selectedProduct)
    const product = tempCart[index]
    product.count = product.count - 1
    if (product.count === 0) {
      this.removeItem(id)
    } else {
      product.total = product.count * product.price
      this.setState(() => {
        return { cart: [...tempCart] }
      }, this.addTotals)
    }
  }
  getTotals = () => {

    let subTotal = 0;
    this.state.cart.map(item => (subTotal += item.total));
    const tempTax = subTotal * 0.1;
    const tax = parseFloat(tempTax.toFixed(2));
    const total = subTotal + tax;
    return {
      subTotal,
      tax,
      total
    };
  };
  addTotals = () => {
    const totals = this.getTotals();
    this.setState(
      () => {
        return {
          cartSubTotal: totals.subTotal,
          cartTax: totals.tax,
          cartTotal: totals.total
        }
      },
    )
  }
  removeItem = id => {
    let tempProducts = [...this.state.products];
    let tempCart = [...this.state.cart];

    const index = tempProducts.indexOf(this.getItem(id));
    let removedProduct = tempProducts[index];
    removedProduct.inCart = false;
    removedProduct.count = 0;
    removedProduct.total = 0;

    tempCart = tempCart.filter(item => {
      return item.id !== id;
    });

    this.setState(() => {
      return {
        cart: [...tempCart],
        products: [...tempProducts]
      };
    }, this.addTotals)
  }
  clearCart = () => {
    this.setState(
      () => {
        return { cart: [] }
      },
      () => {
        this.setProduct()
        this.addTotals()
      }
    )
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
