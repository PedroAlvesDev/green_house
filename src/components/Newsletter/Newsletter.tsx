"use client";

import "./Newsletter.styles.ts"
import { Newsletter, Home, H1, Strong, P, Steps, Button, Form, Input, List, ListItem, Offers, Sign } from "./Newsletter.styles"
import { elsie, montserrat } from "@/styles/fonts"

export function SignNewsletter() {
    return (
        <Newsletter className={`${montserrat.className}`}>
            <Home>
                <H1>Sua casa com as
                    <br />
                    <Strong className={`${elsie.className}`}>melhores plantas</Strong>
                </H1>

                <P>Encontre aqui uma vasta seleção de plantas para decorar a sua casa e torná-lo uma pessoa mais feliz no seu dia a dia. Entre com seu e-mail e assine nossa newsletter para saber das novidades da marca.</P>
            </Home>


            <Sign>
                <Form>
                    <Input type="e-mail" placeholder="Insira seu e-mail" />
                    <Button>Assinar newsletter</Button>
                </Form>
            </Sign>

            <Steps>
                <H1>Como conseguir <br />
                    <Strong className={`${elsie.className}`}>minha planta</Strong>
                    <List>
                        <ListItem>Escolha suas plantas</ListItem>
                        <ListItem>Faça seu pedido</ListItem>
                        <ListItem>Aguarde na sua casa</ListItem>
                    </List>
                </H1>
            </Steps>

            <Offers>
                <H1>Conheça nossas <br />
                    <Strong className={`${elsie.className}`}>ofertas</Strong>
                </H1>
            </Offers>
        </Newsletter>


    )
}