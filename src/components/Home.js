import React, { useState } from "react";
import { infoData, infoDataTwo } from "../data/InfoData";
import { NewHouseData } from "../data/NewHomesData";
import { sliderData } from "../data/SliderData";
import Dropdown from "./Dropdown";
import Hero from "./Hero";
import HousesSection from "./HousesSection";
import InfoSection from "./InfoSection";
import InteriorSection from "./InteriorSection";
const Home = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => {
        setIsOpen(!isOpen);
    };
    return (
        <div>
            <Hero slides={sliderData} />
            <Dropdown isOpen={isOpen} toggle={toggle} />
            <InfoSection {...infoData} />
            <HousesSection data={NewHouseData} />
            <InteriorSection />
            <InfoSection {...infoDataTwo} />
        </div>
    );
};

export default Home;
