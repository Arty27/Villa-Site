import React, {useState} from 'react'
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import GlobalStyle from './globalStyles';
import Hero from './components/Hero';
import { sliderData } from './data/SliderData';
import Dropdown from './components/Dropdown';
import InfoSection from './components/InfoSection';
import { infoData } from './data/InfoData';
import { NewHouseData } from './data/NewHomesData';
import HousesSection from './components/HousesSection';
function App() {
  const [isOpen, setIsOpen]=useState(false);
  const toggle=()=>{
    setIsOpen(!isOpen)
  }
  return (
    <Router className="App">
      <GlobalStyle/>
      <Navbar toggle={toggle}/>
      <Hero slides={sliderData}/>
      <Dropdown isOpen={isOpen} toggle={toggle}/>
      <InfoSection {...infoData}/>
      <HousesSection data={NewHouseData}/>
      <Switch>
        <Route path="/" exact></Route>
      </Switch>
    </Router>
  );
}
export default App;
