import React from 'react';
import styled from 'styled-components';

const Footer1=styled.div`
    background: #000d1a;
    color:#fff;
    padding:6rem 5rem;
`;
const FooterWrapper=styled.div`
    display:grid;
    grid-template-columns: 2fr 1fr;

`;
const LeftColumn=styled.div`
    h1{
        font-size:clamp(3rem, 5vw, 10rem);
    }
    padding: 2rem;
`;
const RightColumn=styled.div`
    h4{
        margin-bottom:1rem;
    }
    padding:2rem;
    display:grid;
    grid-template-columns: 1fr 1fr;
    p{
        line-height:2rem;
        margin-bottom:1rem;
    }
`;
const Col1=styled.div``;
const Col2=styled.div``;
const SocialMedia=styled.div``;
const SocialMediaIcons=styled.div``;
const ChatButton=styled.div``;

const Footer = () => {
    return (
        <Footer1>
            <FooterWrapper>
                <LeftColumn>
                    <h1>Let's find<br/> Your Dream Home</h1>
                </LeftColumn>
                <RightColumn>
                   <Col1>
                        <h4>Contact US</h4>
                        <p>FAQ</p>
                        <p>Support</p>
                        <p>Questions</p>
                   </Col1>
                   <Col2>
                        <h4>Offices</h4>
                        <p>United States</p>
                        <p>India</p>
                        <p>Europe</p>
                   </Col2>
                </RightColumn>
                <SocialMedia>
                    <SocialMediaIcons>

                    </SocialMediaIcons>
                </SocialMedia>
            </FooterWrapper>
        </Footer1>
    )
}

export default Footer
