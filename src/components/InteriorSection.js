import React from 'react';
import styled from 'styled-components';
import Img1 from '../images/h16.jpg';
import { Button } from './Button';
const Section=styled.div`
    width: 100%;
    height: 100vh;
    padding: 6rem 5rem;
    background: linear-gradient(0deg,
        #000d1a 25%,
        #fff 25%, #fff 75%,
        #000d1a 75%);
`;
const SectionWrapper=styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    height: 100%;
    @media screen and (max-width:768px){
        grid-template-columns: 1fr;
    }
`;
const LeftCol=styled.div`
    padding: 2rem 0rem;
    margin-right: 3rem;
    h1{
        margin-bottom: 1rem;
    }
    p{
        margin-bottom: 1rem;
        line-height: 1.5;
    }
    @media screen and (max-width:768px){
        margin-right: 0rem;
    }
`;
const RightCol=styled.div`
    align-content:center;
`;
const SectionImg=styled.img`
    width: 100%;
`;

const InteriorSection = () => {
    return (
        <Section>
            <SectionWrapper>
                <LeftCol>
                    <h1>Stunning Interiors</h1>
                    <p>Eu anim voluptate laborum consectetur. Id ipsum aliqua est quis esse esse. Nostrud eiusmod do amet</p>
                        <p>"Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi fugiat assumenda ut iste!"</p>
                        <Button>Learn More</Button>
                </LeftCol>
                <RightCol>
                    <SectionImg src={Img1} alt='house'/>
                </RightCol>
            </SectionWrapper>
        </Section>
    )
}

export default InteriorSection
