import "./globals.css";
import Topo from "@/componentes/Topo";
import Rodape from "@/componentes/Rodape";

export const metadata = {
  title: "Sorveteria",
  description: "Melhores sabores de sorvete você encontra aqui !",
  viewport: "width=device-width, initial-scale=1"
};


export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body>
        <Topo/>
        {children}
        <Rodape/>
        
      </body>
    </html>
  );
}
