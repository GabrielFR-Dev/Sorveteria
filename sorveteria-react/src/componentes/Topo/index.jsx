import Estilos from "./Topo.module.css";
import Link from "next/link";
import Image from "next/image";
import Logo from  "/public/logo.png";


export default function Topo () {
    return (
        
        <header className={Estilos.container_topo}>
             
                <Image className={Estilos.img} src={Logo} alt="Logo" />

                <nav className={Estilos.navegacao}>
                    <Link href="/">Home</Link>
                    <Link href="/Sabores">Sabores</Link>
                    <Link href="/Sobre">Sobre</Link>
                </nav>
                
        </header>

    );
}