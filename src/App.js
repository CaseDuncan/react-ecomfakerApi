import './App.css';
import NavBar from "./Components/NavBar"
import Home from "./Components/Home"
import ProductsPage from './Components/ProductsPage';
import {Routes, Route} from 'react-router-dom'


function App() {
  return (
    <div className="App">
     <NavBar/>
     <Routes>
       <Route exact path="/" element={<Home/>}/>
    
       <Route exact path="/products" element={<ProductsPage/>}/>
    
     </Routes>
    </div>
  );
}

export default App;
