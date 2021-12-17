//import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Login from './components/Login'
import ImageSlider from './components/ImageSlider';
import { SliderData } from './components/SliderData';
import Signup from './components/Signup';
import { Route, BrowserRouter } from 'react-router-dom';

export default function App() {
  return (
    
    <div className="App">
      <Header
      />
      
      <ImageSlider slides={ SliderData }/>
      {/* <Login /> */}
      {/* <Signup /> */}
      
      
      
      
      <BrowserRouter>
        <Route  path="/login" exact component={ Login } />
        
        <Route  path="/signup" exact component={Signup} />
      </BrowserRouter>
     <div className="col">
        <Footer />
      </div>
    </div> 
  );
}

