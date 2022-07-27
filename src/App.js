import './App.css';
import NavBar from "./Components/NavBar"
import Home from "./Components/Home"
import ProductsPage from "./Components/ProductsPage"

function App() {
  return (
    <div className="App">
     <NavBar/>
     <Home/>
     <ProductsPage/>
    </div>
  );
}

export default App;
