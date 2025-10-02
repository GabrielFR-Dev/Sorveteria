import Image from "next/image"; // Importa o componente de imagem do Next.js
import estilos from "./page.module.css"; // Importa os estilos CSS do arquivo correspondente
import BannerSabores from "/public/banner-sabores.jpg"; // Importa a imagem do banner de sabores
import BannerEventos from "/public/eventos-image.jpg"; // Importa a imagem do banner de eventos
import BannerSobreNos from "/public/sobre-image.jpg"; // Importa a imagem do banner sobre nós

// Componente principal da página
export default function Home() {
  return (
    <main className={estilos.main}> {/* Elemento principal da página */}

      {/* Seção do banner principal */}
      <section className={estilos.secao_banner}>
        <h1> SORVETE ARTESANAL</h1> {/* Título principal */}
      </section>

      <section className={estilos.container_cards}>
        {/* Seção dos sabores */}
        <section className={estilos.card_home}>

          {/* Container para a imagem */}
          <div className={estilos.container_imagem}>
            <Image className={estilos.img} src={BannerSabores} alt="Sabores" /> {/* Imagem do banner de sabores */}
          </div>

          {/* Container para o texto */}
          <div className={estilos.container_textual}>
            <h2> NOSSOS SABORES </h2> {/* Título da seção */}
            <span> Novos e deliciosos </span> {/* Subtítulo */}
            <p>
              Sorvete bom é aquele feito com os melhores ingredientes! Aqui na gelateria todos os nossos produtos são naturais, à base de frutas e sem nenhum conservante! Também temos opções sem lactose e sem açúcar. Venha conhecer e perceber que tem como o sorvete ser delicioso e saudável ao mesmo tempo!
            </p> {/* Descrição dos sabores */}
          </div>

        </section>

        {/* Seção dos eventos */}
        <section className={estilos.card_home}>

          {/* Container para o texto */}
          <div className={estilos.container_textual}>
            <h2> NOSSOS EVENTOS </h2> {/* Título da seção */}
            <span> Delicias com sorvete! </span> {/* Subtítulo */}
            <p>
              Mais do que uma sorveteria, uma extensão da sua casa! Estamos aqui prontinhos para te atender e oferecer os melhores eventos com os melhores sorvete da sua vida! Venha nos conhecer e passar um tempo aqui com a gente.
            </p> {/* Descrição dos eventos */}
          </div>

        </section>
      </section>

    </main>
  );
}