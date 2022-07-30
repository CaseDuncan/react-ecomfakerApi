import './App.css';
import NavBar from "./Components/NavBar"
import Home from "./Components/Home"
import ProductsPage from './Components/ProductsPage';
import ProductDetails from  './Components/ProductDetails'
import Products from './Components/Products';
import NewProductForm from './Components/NewProductForm'
import {Routes, Route} from 'react-router-dom'


function App() {
  return (
    <div className="App">
     <NavBar/>
     <Routes>
       <Route exact path={'/'} element={<Home/>}/>
       <Route exact path={'/products'} element={<ProductsPage/>}/>
       <Route path={'/products/new-product'} element={<NewProductForm/>}/>
       <Route path={'/products/view/:productId'} element={<ProductDetails/>}/>
      
     </Routes>
    </div>
  );
}

export default App;
