// src/pages/SobreMim/index.tsx
import React from "react";
import "./style.css"; // O CSS está na mesma pasta

const SobreMim: React.FC = () => {
  return (
    <main className="sobre-mim-page">
      <section className="sobre-mim-content">
        <div className="sobre-mim-header">
          {/* Espaço para a foto */}
          <div className="profile-photo-container">
            <img
              src="/src/assets/images/lisboa_livraria_1.jpg" // Substitua por sua foto real
              alt="Tauan Ribeiro - Desenvolvedor Full Stack"
              className="profile-photo"
            />
          </div>
          {/* NOVO: Div para agrupar o título e o subtítulo */}
          <div className="sobre-mim-text-content">
            <h1 className="sobre-mim-title">
              Tauan Ribeiro: Desenvolvedor Full Stack JavaScript
            </h1>
            <p className="sobre-mim-subtitle">
              Soluções Inovadoras e Crescimento Contínuo
            </p>
          </div>
        </div>

        <div className="sobre-mim-text-container">
          <p>
            Como Desenvolvedor Full Stack JavaScript com 5 anos de experiência,
            sou apaixonado por transformar ideias complexas em aplicações web
            escaláveis e de alto desempenho. Minha expertise abrange o
            ecossistema JavaScript, com proficiência em{" "}
            <strong>Node.js, Express.js, React.js e Next.js</strong>, e uma
            paixão intrínseca pela resolução de problemas e pela criação de
            soluções eficientes e elegantes.
          </p>
          <p>
            Minha jornada no mundo da tecnologia é marcada por uma transição
            bem-sucedida de uma década de experiência em Humanidades, incluindo
            formação em Letras pela USP, tradução, revisão e ensino. Essa base
            me equipou com um conjunto de habilidades valiosas: uma atenção
            meticulosa aos detalhes, essencial para a qualidade do código e
            depuração; uma comunicação clara e eficaz, fundamental para a
            colaboração em equipe e a compreensão de requisitos; e um pensamento
            analítico aguçado para desvendar desafios complexos. Essa trajetória
            demonstra minha notável capacidade de aprendizado contínuo,
            adaptabilidade e resiliência diante de novos horizontes.
          </p>
          <p>
            O que mais me motiva no desenvolvimento de software é a infinidade
            de possibilidades que surgem ao iniciar um código, ao criar uma
            lógica ou uma função. Adoro a liberdade de explorar diversas
            abordagens e soluções criativas para um mesmo problema, sempre
            buscando o caminho mais otimizado. Sou um grande entusiasta da
            comunidade de desenvolvimento e acredito que este seja o ponto forte
            da nossa profissão. Valorizo muito a maneira como o compartilhamento
            de conhecimento, soluções e métodos é feito de maneira aberta e
            irrestrita, e como essa dinâmica impulsiona a evolução da comunidade
            como um todo – uma filosofia que busco replicar em qualquer ambiente
            de trabalho.
          </p>
          <p>
            Minha curiosidade me impulsiona a explorar as fronteiras da
            tecnologia. Sou um usuário ativo de Inteligência Artificial, que
            considero um poderoso multiplicador de produtividade e conhecimento,
            e busco aprofundar meus estudos em IA e Machine Learning. Além
            disso, acompanho com grande interesse o universo Blockchain,
            reconhecendo seu impacto crescente e seu potencial transformador.
          </p>
          <p>
            Atualmente estabelecido em Valência, Espanha, onde resido desde 2022
            e trabalho remotamente para uma empresa brasileira, busco uma
            oportunidade que me permita crescer e evoluir a longo prazo. Tenho
            grandes expectativas para minha carreira e almejo um ambiente onde
            possa contribuir significativamente para o sucesso da equipe e da
            empresa, enquanto continuo a aprimorar minhas habilidades e a
            expandir meu impacto. Sou um profissional focado, dedicado à
            produtividade e à busca incessante por melhorias contínuas.
          </p>
        </div>
      </section>
    </main>
  );
};

export default SobreMim;
