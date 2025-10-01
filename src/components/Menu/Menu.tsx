"use client";

import { Header, Logo, Nav, List, ListItem, Link } from "./Menu.styles";
import { montserrat } from "@/styles/fonts";

export default function Menu() {
    return (
        <Header>
            <Logo>
                <img src="/images/logo.svg" alt="" />
            </Logo>

            <Nav className={`${montserrat.className} `}>
                <List style={{color:"#202020"}}>
                    <ListItem>
                        <Link href="">Como fazer</Link>
                        /
                    </ListItem>
                    <ListItem>
                        <Link href="">Ofertas</Link>
                        /
                    </ListItem>
                    <ListItem>
                        <Link href="">Depoimentos</Link>
                        /
                    </ListItem>
                    <ListItem>
                        <Link href="">Videos</Link>
                        /
                    </ListItem>
                    <ListItem>
                        <Link href="">Meu carrinho</Link>
                    </ListItem>
                </List>
            </Nav>
        </Header>
    )
}