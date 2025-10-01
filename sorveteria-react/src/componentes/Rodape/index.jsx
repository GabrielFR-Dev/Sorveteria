import Image from "next/image";
import Logo from "/public/logo.png";
import estilos from "./Rodape.module.css";

export default function Rodape () {
    return (
        <footer>
            <Image className={estilos.logo} src={Logo} alt="Logo"/>
            <div className={estilos.container_divs}>
                
                <div className={estilos.div}>
                    <h4>ENDEREÇO</h4>
                    <p>
                        Av. Bernardinho de campos 98 são paulo, SP 12345-678
                    </p>
                </div>

                <div className={estilos.div}>
                    <h4>CONTATO</h4>
                    <p>
                        info@meusite.com
                        tel(xx) xxxxx-xxxx
                    </p> 
                </div>

                <div className={estilos.div}>
                    <h4>HORÁRIOS</h4>
                    <p>
                        ABERTO TODOS OS DIAS 10:00 - 22:00
                    </p> 
                </div>
            </div>

            <p>Gelateria. Orgulhosamente desenvolvido por 'Gabriel ferreira'</p>
        </footer>
    )
};
