"use client";

import styled from "styled-components";

export const Header = styled.header`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: 20px;
`;

export const Logo = styled.div`
  img {
    max-height: 50px;
  }
`;

export const Nav = styled.nav`
    display: flex;
    justify-content: space-between;
`;

export const List = styled.ul`
    display: flex;
    justify-content: space-between;
    list-style: none;
`;

export const ListItem = styled.li`
    margin: 0 10px;
`;

export const Link = styled.a`
    margin: 0 10px;
    text-decoration: none;
    color: inherit;
`;