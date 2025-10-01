"use client";

import { Header, Logo, Nav, List, ListItem, Link } from "./Menu.styles";

export default function Menu() {
    return (
        <Header>
            <Logo>
                <img src="/images/logo.svg" alt="" />
            </Logo>

            <Nav>
                <List>
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