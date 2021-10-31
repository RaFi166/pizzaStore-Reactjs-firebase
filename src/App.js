import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Products from './Components/Products/Products';
import Navigation from './Components/Shared/Navigation';
import Home from './Components/Home/Home';
import Cart from './Components/Cart/Cart';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navigation></Navigation>

        <Switch>

          <Route exact path="/home">
            <Home></Home>
          </Route>

          <Route path="/products">
            <Products></Products>
          </Route>

          <Route path="/cart">
            <Cart></Cart>
          </Route>

        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
