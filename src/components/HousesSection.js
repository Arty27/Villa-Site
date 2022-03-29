import React from "react";
import { IoMdArrowRoundForward } from "react-icons/io";
import { Link } from "react-router-dom";
import styled from "styled-components";
const Section = styled.section`
    width: 100%;
    padding: 4rem 5rem;
    margin-bottom: 10rem;
`;
const SectionTitle = styled.h1`
    margin-bottom: 1rem;
    font-size: clamp(1.5rem, 6vw, 2rem);
`;
const HomesSection = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    @media screen and (max-width: 768px) {
        grid-template-columns: 1fr;
        grid-template-rows: 450px;
        padding-left: 1rem;
        padding-right: 1rem;
    }
`;
const HouseWrapper = styled.div`
    padding: 4rem 0rem 1rem 0rem;
    &:nth-child(even) {
        position: relative;
        top: 20%;
    }
    @media screen and (max-width: 768px) {
        &:nth-child(even) {
            position: relative;
            top: 0%;
        }
    }
`;
const HouseImg = styled.img`
    width: 90%;
    padding-bottom: 1rem;
    border-radius: 3px;
    @media screen and (max-width: 768px) {
        width: 100%;
    }
`;
const HouseTitle = styled.h2`
    font-weight: 500;
    /* text-shadow: 0px 0px 20px rgba(0,0,0,1  ); */
    text-align: left;
    margin-bottom: 0.8rem;
`;
const Arrow = styled(IoMdArrowRoundForward)`
    margin-left: 0.5rem;
`;
const Button1 = styled(Link)`
    background: transparent;
    color: #000d1a;
    font-size: 14px;
    text-decoration: none;
    display: flex;
    align-items: flex-end;
    font-weight: 500;
    &:hover {
        transform: translateY(-2px);
    }
`;
const HousesSection = ({ data }) => {
    let time = 0;
    return (
        <Section>
            <SectionTitle>View Our Newest Homes</SectionTitle>
            <HomesSection>
                {data.map((home, i) => (
                    <HouseWrapper>
                        <HouseImg src={home.image} alt={home.alt} />
                        <HouseTitle>{home.title}</HouseTitle>
                        <Button1 to="/homes">
                            {home.button}
                            <Arrow />
                        </Button1>
                    </HouseWrapper>
                ))}
            </HomesSection>
        </Section>
    );
};

export default HousesSection;
