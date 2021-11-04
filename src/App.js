import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Products from './Components/Products/Products';
import Navigation from './Components/Shared/Navigation';
import Home from './Components/Home/Home';
import Cart from './Components/Cart/Cart';
import SingleProduct from './Components/singleProduct/SingleProduct';
import NotFound from './Components/NotFound/NotFound';
import { CartContext } from './Components/CartContext';


function App() {
  return (
    <div className="App">
      <BrowserRouter>

        <CartContext.Provider value={{ name : "Rafi"}}>
          <Navigation></Navigation>

          <Switch>

            <Route exact path="/">
              <Home></Home>
            </Route>

            <Route exact path="/home">
              <Home></Home>
            </Route>

            <Route path="/products/:_id">
              <SingleProduct></SingleProduct>
            </Route>

            <Route path="/cart">
              <Cart></Cart>
            </Route>

            <Route path="*">
              <NotFound></NotFound>
            </Route>

          </Switch>
        </CartContext.Provider>

      </BrowserRouter>
    </div>
  );
}

export default App;
