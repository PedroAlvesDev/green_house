"use client";

import "./Newsletter.styles.ts"
import { Newsletter, Home, H1, Strong, P, Steps, Button, Form, Input, List, ListItem, Offers, Sign, Products, ProductsItem, BuyButton, Text } from "./Newsletter.styles"
import { elsie, montserrat } from "@/styles/fonts"
import Image from "next/image.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Ajuga from "../../../public/ajuga.png";
import Cordyline from "../../../public/cordeline.png";
import Crassula from "../../../public/crassula.png";
import Cyperus from "../../../public/cyperus.png";
import Delairea from "../../../public/delairea.png";
import Datura from "../../../public/datura.png";
import Hero from "../../../public/imagem-hero.png"


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
                <Image
                    src={Hero}
                    alt="Image Hero"
                    width={700}
                    height={700}
                />
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

                <Products>
                    <ProductsItem>
                        <Image
                            src={Ajuga}
                            alt="Ajuga reptans"
                            width={120}
                            height={120}
                        />
                        <Text className={montserrat.className}>
                            <h3 className={elsie.className}>Ajuga reptans
                            </h3>
                            <span>R$ 20,00</span>
                            <BuyButton>
                                Comprar
                                <FontAwesomeIcon icon={faArrowRight} />
                            </BuyButton>
                        </Text>

                    </ProductsItem>

                    <ProductsItem>
                        <Image
                            src={Cordyline}
                            alt="Cordyline fruticosa"
                            width={120}
                            height={120}
                        />
                        <Text className={montserrat.className}>
                            <h3 className={elsie.className}>Cordyline fruticosa
                            </h3>
                            <span>R$ 20,00</span>
                            <BuyButton>
                                Comprar
                                <FontAwesomeIcon icon={faArrowRight} />
                            </BuyButton>
                        </Text>

                    </ProductsItem>

                    <ProductsItem>
                        <Image
                            src={Crassula}
                            alt="Crassula ovata"
                            width={120}
                            height={120}
                        />
                        <Text className={montserrat.className}>
                            <h3 className={elsie.className}>Crassula ovata
                            </h3>
                            <span>R$ 20,00</span>
                            <BuyButton>
                                Comprar
                                <FontAwesomeIcon icon={faArrowRight} />
                            </BuyButton>
                        </Text>

                    </ProductsItem>

                    <ProductsItem>
                        <Image
                            src={Cyperus}
                            alt="Cyperus rotundus"
                            width={120}
                            height={120}
                        />
                        <Text className={montserrat.className}>
                            <h3 className={elsie.className}>Cyperus rotundus
                            </h3>
                            <span>R$ 20,00</span>
                            <BuyButton>
                                Comprar
                                <FontAwesomeIcon icon={faArrowRight} />
                            </BuyButton>
                        </Text>

                    </ProductsItem>

                    <ProductsItem>
                        <Image
                            src={Delairea}
                            alt="Delairea odorata"
                            width={120}
                            height={120}
                        />
                        <Text className={montserrat.className}>
                            <h3 className={elsie.className}>Delairea odorata
                            </h3>
                            <span>R$ 20,00</span>
                            <BuyButton>
                                Comprar
                                <FontAwesomeIcon icon={faArrowRight} />
                            </BuyButton>
                        </Text>

                    </ProductsItem>

                    <ProductsItem>
                        <Image
                            src={Datura}
                            alt="Datura metel"
                            width={120}
                            height={120}
                        />
                        <Text className={montserrat.className}>
                            <h3 className={elsie.className}>Datura metel
                            </h3>
                            <span>R$ 20,00</span>
                            <BuyButton>
                                Comprar
                                <FontAwesomeIcon icon={faArrowRight} />
                            </BuyButton>
                        </Text>

                    </ProductsItem>
                </Products>
            </Offers>
        </Newsletter>

    )
}