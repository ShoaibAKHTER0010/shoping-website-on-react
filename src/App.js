
import './App.css';
import Header from "./components/header"
import Home from "./components/home"
import Collection from './components/collection';
import About from './components/about';
import Best from './components/best';
import Product from './components/product';
import Deals from './components/deals';
import Designs from './components/designs';
import Reviews from './components/reviews';
import Contact from './components/contact';

function App() {
  return (
    <div>
     <Header />
     <Home />
     <Collection />
     <About />
     <Best />
     <Product />
     <Deals />
     <Designs />
     <Reviews />
     <Contact />
    </div>
  );
}

export default App;
