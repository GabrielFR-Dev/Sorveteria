import Image from "next/image";
import estilos from "./sabores.module.css";
import BannerSabores from "/public/banner-sabores.jpg";
import ImgOreo from "/public/sabor-oreo.png";
import ImgPistache from "/public/sabor-pistache.png";
import ImgCookies from "/public/sabor-cookies-avela.png";
import ImgKiwi from "/public/sabor-kiwi.png";
import ImgMorango from "/public/sabor-morango.png";
import ImgLimao from "/public/sabor-limao.png";


export default function Sabores() {
    return (
        <div>
            <section className={estilos.secao_banner}>
                <h1>NOSSOS SABORES</h1>
            </section>

            <section className={estilos.secao_sabores}>
                <h2>
                    SABORES DE SORVETE
                </h2>

                <div className={estilos.container_cards}>

                    <div className={estilos.card}>
                        <Image className={estilos.img} src={ImgOreo} alt="Oreo" />
                        <h3>Sorvete de Oreo</h3>
                        <p>
                            Delicioso sorvete sabor Oreo. Uma explosão de sabor.
                        </p>
                    </div>

                    <div className={estilos.card}>
                        <Image className={estilos.img} src={ImgPistache} alt="Pistache" />
                        <h3>Sorvete Pistache</h3>
                        <p>
                            Cremoso sorvete sabor pistache com pedacinhos de semente.
                        </p>
                    </div>

                    <div className={estilos.card}>
                        <Image className={estilos.img} src={ImgCookies} alt="Cookies" />
                        <h3>Sorvete Cookies & Avelã</h3>
                        <p>
                            O nosso melhor sorvete. Você vai adorar o sabor.
                        </p>
                    </div>

                    <div className={estilos.card}>
                        <Image className={estilos.img} src={ImgKiwi} alt="Kiwi" />
                        <h3>Sorvete Cookies & Avelã</h3>
                        <p>
                            O nosso melhor sorvete. Você vai adorar o sabor.
                        </p>
                    </div>

                    <div className={estilos.card}>
                        <Image className={estilos.img} src={ImgMorango} alt="Morango" />
                        <h3>Sorvete de Morango</h3>
                        <p>
                            Sorvete de morango gourmet. Tradicional e saboroso.
                        </p>
                    </div>

                    <div className={estilos.card}>
                        <Image className={estilos.img} src={ImgLimao} alt="Limao" />
                        <h3>Sorvete Limão Siciliano</h3>
                        <p>
                            O incrivel sorvete gourmet de limão siciliano vai te encantar.
                        </p>
                    </div>
                </div>
            </section>

        </div>
    )
};