import "./Newsletter.css"

export function SignNewsletter() {
    return (
        <div>
            <div className="home">
                <h1>Sua casa com as
                    <br />
                    <strong>melhores plantas</strong></h1>

                <p>Encontre aqui uma vasta seleção de plantas para decorar a sua casa e torná-lo uma pessoa mais feliz no seu dia a dia. Entre com seu e-mail e assine nossa newsletter para saber das novidades da marca.</p>
            </div>


            <div className="sign">
                <form>
                    <input type="e-mail" placeholder="Insira seu e-mail" />
                    <button>Assinar newsletter</button>
                </form>
            </div>

            <div className="steps">
                <h1>Como conseguir <br />
                    <strong>minha planta</strong>
                    <ul>
                        <li>Escolha suas plantas</li>
                        <li>Faça seu pedido</li>
                        <li>Aguarde na sua casa</li>
                    </ul>
                </h1>
            </div>

            <div className="offers">
                <h1>Conheça nossas <br />
                    <strong>ofertas</strong>
                </h1>
            </div>
        </div>


    )
}