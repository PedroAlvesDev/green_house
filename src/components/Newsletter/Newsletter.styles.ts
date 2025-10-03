"use client";

import styled from "styled-components";

//  style={{color: "#202020"}}

export const Newsletter = styled.div`
    margin: 20px;
    width: 50%;


`;

export const Home = styled.div`
    display: flex;
    flex-direction: column;
    color: #202020;
`;

export const H1 = styled.h1`
    font-size: 16px;
    font-weight: 400;
    font-weight: lighter ;
    color: inherit;
`;

export const Strong = styled.strong`
    font-weight: 900;
    font-size: 58px;
    color: inherit;
`;

export const P = styled.p`
    font-size: 16px;

`;

export const Sign = styled.div`
    margin: 30px 0;

        img {
        position: absolute;
        top: 0;
        right: 10px;
    }
`;

export const Form = styled.form`
`;

export const Input = styled.input`
    padding: 16px;
    border: none;
    background-color: #FFFFFF;
    width: 60%;

`;

export const Button = styled.button`
    padding: 16px;
    border: none;
    background-color: #FFCB47;
    color: #FFFFFF;
    cursor: pointer;

`;

export const Steps = styled.div`
    text-align: justify;
`;

export const List = styled.ul`

`;

export const ListItem = styled.li`
    font-size: 22px;
    font-weight: 400;
    font-weight: lighter ;
    color: inherit;
`;

export const Offers = styled.div`
    margin-top: 30px;
    text-align: center;
    width: 100vh;
    
`;

export const Products = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr); /* 3 colunas fixas */
    gap: 10px;
`;

export const ProductsItem = styled.div`
    display: flex;
    margin-top: 16px;

    width: 260px;
    height: max-content;
    color: #202020;
    background-color: #FFFFFF;
    padding: 10px;
    border-radius: 10px;

    img {
        position: static;
    }
`;

export const Text = styled.div`
    display: flex;
    flex-direction: column;
    text-align: left;

    h3 {
        margin: 12px 0 4px;
        font-size: 24px;
        font-weight: 700;
        color: #202020;
        /* padding: 0 10px; */
        background-color: inherit;

    }

    span {
        padding: 10px 0;
        /* font-size: 16px; */
        font-weight: 400;
        color: #8f8f8f;
    }

`;

export const BuyButton = styled.button`
    display: flex;
    align-items: center;

    width: max-content;
    height: max-content;
    
    gap: 16px;

    border: none;
    background: none;
    color: #FFCB47;
    cursor: pointer;

    padding: 10px 0;

`;