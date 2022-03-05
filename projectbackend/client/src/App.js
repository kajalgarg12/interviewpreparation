import logo from './logo.svg';
import './App.css';
import ShowProduct from './components/ShowProduct';
import AddProduct from './components/AddProduct';
import UpdateProduct from './components/UpdateProduct';
import { BrowserRouter as  Router , Route , Routes as Switch } from 'react-router-dom';
import {  NavBarMenu } from './components/NavBarMenu';
import ProductDetail from './components/ProductDetail';

function App() {
  return (
    <div className="App">
      <Router>
        <NavBarMenu/>
        <Switch>
          <Route exact path="/" element={<ShowProduct/>} />
          <Route exact path="/addProduct" element={<AddProduct/>} />
          <Route exact path="/:id/" element={<ProductDetail/>}/>
          <Route exact path="/:id/update" element={<UpdateProduct/>}/>

        </Switch>
      </Router>
      
    </div>
  );
};

export default App;
