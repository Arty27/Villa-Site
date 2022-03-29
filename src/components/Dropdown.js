import React from "react";
import styled from "styled-components";
import { menuData } from "../data/MenuData";
import { Button } from "./Button";
import { Link } from "react-router-dom";
import { FaTimes } from "react-icons/fa";

const DropDownContainer = styled.div`
    position: fixed;
    z-index: 999;
    width: 100%;
    height: 100%;
    background: #cd853f;
    display: grid;
    align-items: center;
    top: 0;
    left: 0;
    transition: 0.3s ease-in-out;
    opacity: ${({ isOpen }) => (isOpen ? "1" : "0")};
    top: ${({ isOpen }) => (isOpen ? "0" : "-100%")};
`;

const Icon = styled.div`
    position: absolute;
    top: 1.2rem;
    right: 1.5rem;
    background: transparent;
    font-size: 2rem;
    outline: none;
    cursor: pointer;
`;

const CloseIcon = styled(FaTimes)`
    color: #000d1a;
`;
const DropDownWrapper = styled.div``;
const DropDownMenu = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(4, 80px);
    text-align: center;
    margin-bottom: 4rem;

    @media screen and (max-width: 480px) {
        grid-template-rows: repeat(4, 60px);
    }
`;
const DropDownLink = styled(Link)`
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.5rem;
    text-decoration: none;
    list-style: none;
    transition: 0.2s ease-in-out;
    &:hover {
        color: #000d1a;
    }
`;
const BtnWrap = styled.div`
    display: flex;
    justify-content: center;
`;

const Dropdown = ({ isOpen, toggle }) => {
    return (
        <DropDownContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <DropDownWrapper>
                <DropDownMenu>
                    {menuData.map((item, index) => (
                        <DropDownLink to={item.link} key={index}>
                            {item.title}
                        </DropDownLink>
                    ))}
                </DropDownMenu>
                <BtnWrap>
                    <Button primary="true" round="true" big="true" to="/contact">
                        Contact Us
                    </Button>
                </BtnWrap>
            </DropDownWrapper>
        </DropDownContainer>
    );
};

export default Dropdown;
