import estilos from "./sobre.module.css";
import Image from "next/image";
import BannerSobre from "/public/banner-sobre.png" ;
import Img1 from "/public/sobre-image.jpg";
import Img2 from "/public/sorveteria.jpg";

export default function Sobre (){
    return (
        <div>
            <section className={estilos.secao_banner}>
                <div className={estilos.titulo}>
                    <h1>A GELATERIA</h1>
                </div>
            </section>

            <section className={estilos.secao_sobre}>
                <h2>Sobre Nós</h2>
                <span>Nós simplesmente amamos sorvete!</span>

                <p>
                    Somos uma empresa apaixonada pelo que faz. Colocamos amor em cada sorvete produzido.
                    Fazemos o melhor sorvete para os nossos  clientes e gostamos de receber elogios.
                    Estamos operando desde 2009 com as melhores matérias-primas para a produção final do sorvete. Vendemos tatno para varejo  como  para atacado.
                </p>
                <p>
                    Nossos clientes podem comprar os nossos sorvetes e degustar na nossa loja ou levar par sua residência e aproveitar junto com a família. Também vendemos para estabelicimento e criamos eventos como festa de aniversário, formaturas e eventos empresarias. Para contratar os nossos serviços, basta entrar em contato conosco. Iremos proporcioanr o melhor atendimento e os melhores produtos para você fazer a sua festa mais saborosa, com o melhor sorvete da cidade.
                </p>
            </section>

            <section className={estilos.container_img}>
                <Image className={estilos.img} src={Img1} alt="Grupo de amigos"/>
                <Image className={estilos.img} src={Img2} alt="Sorveteria"/>

            </section>


        </div>
    )
};