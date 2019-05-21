import React from 'react';
import './App.css'
import {Switch,Route} from 'react-router-dom'
import Header from './components/layout/Header'
import NavigationalBar from './components/layout/Nav'
import Cart from './components/Cartcompo/Cart'
import Default from './components/Default'
import Details from './components/Details'
import ProductList from './components/ProductList'
import Model from './components/Model'



function App() {
  return (
<React.Fragment>
     <NavigationalBar />
     <Header />
     <Switch>
          <Route exact path="/" component={ProductList} />
          <Route exact path="/Cart" component={Cart} />
          <Route exact path="/Details" component={Details} />
          <Route  component={Default} />
     </Switch>
     <Model />
</React.Fragment>

  )
}

export default App;
