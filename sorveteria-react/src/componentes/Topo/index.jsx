import Estilos from "./Topo.module.css";
import Link from "next/link";
import Image from "next/image";
import Logo from "/public/logo.png";


export default function Topo() {
    return (

        <header className={Estilos.container_topo}>

            <div className={Estilos.topo}>
                <Image className={Estilos.img} src={Logo} alt="Logo" />

                <nav className={Estilos.navegacao}>
                    <Link href="/" className={Estilos.link}>Home</Link>
                    <Link href="/Sabores" className={Estilos.link}>Sabores</Link>
                    <Link href="/Sobre" className={Estilos.link}>Sobre</Link>
                </nav>
            </div>

        </header>

    );
}