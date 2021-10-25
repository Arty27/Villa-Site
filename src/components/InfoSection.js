import React from 'react'
import styled from 'styled-components';
import { Button } from './Button';
const Section=styled.section`
    width: 100%;
    height: 100%;
    padding: 4rem 0rem ;
`;
const Container=styled.div`
    padding-top: 3rem;
    padding-bottom: 3rem;
    padding-left: 5rem;
    padding-right: 5rem;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 700px;
    @media screen and (max-width:768px){
        grid-template-columns: 1fr;
        grid-template-rows: 450px;
        padding-left: 2rem;
        padding-right: 2rem;
    }
`;
const ColumnLeft=styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    line-height: 1.4;
    padding: 1rem 2rem;
    order: ${({reverse})=>(reverse?'2':'1')};
    h1{
        margin-bottom: 1rem;
        font-size: clamp(1.5rem, 6vw, 2rem);
    }
    p{
        margin-bottom: 2rem;
    }
    @media screen and (max-width:768px){
        align-items: center;
        text-align: center;
    }
`;
const ColumnRight=styled.div`
    padding: 1rem 2rem;
    order: ${({reverse})=>(reverse?'1':'2')};
    justify-content: center;
    align-items: center;
    display: flex;
    @media screen and (max-width:768px){
        order: ${({reverse})=>(reverse?'2':'1')};
    }
    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
        @media screen and (max-width:768px){
        width: 90%;
        height: 90%;
    }
    }
`;

const InfoSection = ({heading,paraOne,paraTwo,buttonLabel,reverse,image}) => {
    return (
        <Section>
            <Container>
                <ColumnLeft>
                    <h1>{heading}</h1>
                    <p>{paraOne}</p>
                    <p>{paraTwo}</p>
                    <Button primary="true" to='/homes'>
                        {buttonLabel}
                    </Button>
                </ColumnLeft>
                <ColumnRight reverse={reverse}>
                    <img src={image}/>
                </ColumnRight>
            </Container>
        </Section>
    )
}

export default InfoSection;
