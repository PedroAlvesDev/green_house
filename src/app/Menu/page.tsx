import Image from "next/image"
import { text } from "stream/consumers"
import "./Menu.css"
export default function Menu() {
    return (
        <header>
            <div className="logo">
                <img src="/images/logo.svg" alt="" />
            </div>

            <nav className="menu">
                <ul>
                    <li>
                        <a href="">Como fazer</a>
                        /
                    </li>
                    <li>
                        <a href="">Ofertas</a>
                        /
                    </li>
                    <li>
                        <a href="">Depoimentos</a>
                        /
                    </li>
                    <li>
                        <a href="">Videos</a>
                        /
                    </li>
                    <li>
                        <a href="">Meu carrinho</a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}