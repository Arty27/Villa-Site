import React, {useState} from 'react'
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import GlobalStyle from './globalStyles';
import Hero from './components/Hero';
import { sliderData } from './data/SliderData';
import Dropdown from './components/Dropdown';
import InfoSection from './components/InfoSection';
import { infoData } from './data/InfoData';
import { infoDataTwo } from './data/InfoData';
import { NewHouseData } from './data/NewHomesData';
import HousesSection from './components/HousesSection';
import InteriorSection from './components/InteriorSection';
import Footer from './components/Footer';
import About from './components/About';
import Home from './components/Home';
function App() {
  const [isOpen, setIsOpen]=useState(false);
  const toggle=()=>{
    setIsOpen(!isOpen)
  }
  return (
    <Router className="App">
      <GlobalStyle/>
      <Navbar toggle={toggle}/>
      <div className='space'></div>
      <Switch>
        <Route path="/about" component={About}></Route>
        <Route path="/" exact component={Home}></Route>
      </Switch>
      <Footer/>
    </Router>
  );
}
export default App;
