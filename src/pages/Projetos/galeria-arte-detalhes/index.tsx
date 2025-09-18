import { Link } from "react-router-dom";
import "./style.css"; // CSS específico para esta página

const GaleriaDeArteDetalhes = () => {
  return (
    <div className="project-detail-page-container">
      {/* Seção Hero - Imagem de Destaque */}
      <section className="project-hero-visual">
        {/*
          * IMAGEM PRINCIPAL DE DESTAQUE (SCREENSHOT 1) *
          Esta será a imagem que dará o primeiro impacto visual na página.
          Pode ser o screenshot mais bonito e representativo da UI.
        */}
        <img
          src="/src/assets/images/galeria_portada.png" // Substitua pelo caminho da sua imagem
          alt="Screenshot principal da Galeria de Arte Pessoal"
          className="hero-image"
        />
        <div className="hero-overlay">
          <h1 className="hero-title">Galeria de Arte Pessoal</h1>
          <p className="hero-subtitle">
            Sua jornada digital pelo mundo da arte
          </p>
        </div>
      </section>

      <div className="project-content-wrapper">
        {/* Visão Geral e Funcionalidades Chave */}
        <section className="detail-section">
          <h2 className="section-title">Visão Geral e Funcionalidades Chave</h2>
          <p className="section-text">
            A "Galeria de Arte Pessoal" é uma aplicação web que transforma a
            experiência de explorar o vasto acervo do renomado Metropolitan
            Museum of Art em uma jornada digital personalizada. Desenvolvida
            para conectar entusiastas da arte com obras significativas, o
            projeto oferece uma interface intuitiva para descoberta e interação,
            permitindo que cada usuário construa sua própria coleção de
            favoritos.
          </p>
          <h3 className="subsection-title">Funcionalidades Principais:</h3>
          <ul className="feature-list">
            <li>
              Autenticação de Usuário: Sistema seguro de login para acesso a
              funcionalidades personalizadas.
            </li>
            <li>
              Exploração do Acervo: Navegação e busca eficientes por obras de
              arte do Metropolitan Museum of Art.
            </li>
            <li>
              Detalhes da Obra: Visualização de informações completas sobre cada
              peça, incluindo artista, ano de criação e contexto.
            </li>
            <li>
              Favoritos Personalizados: Capacidade de selecionar e gerenciar uma
              coleção privada de obras preferidas.
            </li>
            <li>
              Conexão com a Arte: Uma experiência imersiva que visa aproximar o
              usuário dos grandes mestres e movimentos artísticos.
            </li>
          </ul>
        </section>

        {/* Bloco Visual 1: GIF 1 e Screenshot 2 */}
        <section className="visual-showcase">
          <div className="visual-item">
            <img
              src="/src/assets/gifs/gif_galeria_1.gif" // Substitua pelo caminho do seu GIF
              alt="GIF demonstrando navegação e busca na galeria"
              className="showcase-media"
            />
            <p className="media-caption">
              Navegação fluida e busca inteligente pelo acervo de obras.
            </p>
          </div>
          {/* <div className="visual-item">
            <img
              src="/src/assets/images/galeria_2.png" // Substitua pelo caminho do seu screenshot
              alt="Screenshot da página de detalhes de uma obra de arte"
              className="showcase-media"
            />
            <p className="media-caption">
              Página de detalhes da obra, com informações ricas e imagem em alta
              resolução.
            </p>
          </div> */}
        </section>

        {/* Stack Tecnológico */}
        <section className="detail-section">
          <h2 className="section-title">Stack Tecnológico</h2>
          <p className="section-text">
            Este projeto Full Stack foi construído com uma combinação robusta de
            tecnologias modernas, garantindo tanto uma interface de usuário
            dinâmica quanto um backend eficiente e escalável.
          </p>
          <div className="tech-stack-grid">
            <div className="tech-category">
              <h3 className="subsection-title">Frontend:</h3>
              <ul className="tech-list">
                <li>
                  React: Biblioteca JavaScript para construção de interfaces de
                  usuário reativas e componentizadas.
                </li>
                <li>
                  Redux: Gerenciamento de estado global para uma experiência de
                  usuário consistente e previsível.
                </li>
                <li>
                  Tailwind CSS: Framework CSS utilitário para estilização rápida
                  e responsiva, alinhada com uma estética minimalista e
                  elegante.
                </li>
              </ul>
            </div>
            <div className="tech-category">
              <h3 className="subsection-title">Backend:</h3>
              <ul className="tech-list">
                <li>
                  Node.js: Ambiente de execução JavaScript assíncrono e
                  orientado a eventos, ideal para APIs de alto desempenho.
                </li>
                <li>
                  Prisma: ORM (Object-Relational Mapper) moderno e type-safe
                  para interações eficientes e seguras com o banco de dados.
                </li>
                <li>
                  MySQL: Sistema de gerenciamento de banco de dados relacional,
                  confiável para armazenamento de dados de usuários e favoritos.
                </li>
                <li>
                  Autenticação JWT: Implementação de JSON Web Tokens para um
                  sistema de autenticação seguro e stateless.
                </li>
              </ul>
            </div>
          </div>
          {/* Opcional: Adicionar logos das tecnologias aqui */}
        </section>

        {/* Bloco Visual 2: GIF 2 */}
        <section className="visual-showcase single-item">
          {" "}
          {/* Adicionado classe single-item para layout de um item */}
          <div className="visual-item">
            <img
              src="/src/assets/images/galeria_2.png" // Substitua pelo caminho do seu screenshot
              alt="Screenshot da página de detalhes de uma obra de arte"
              className="showcase-media"
            />
            <p className="media-caption">
              Página de detalhes da obra, com maiores informações e mais
              detalhes da imagem.
            </p>
          </div>
        </section>

        {/* Arquitetura e Detalhes de Implementação */}
        <section className="detail-section">
          <h2 className="section-title">
            Arquitetura e Detalhes de Implementação
          </h2>
          <p className="section-text">
            A arquitetura da "Galeria de Arte Pessoal" foi projetada para ser
            modular e distribuída, otimizando o desempenho e a manutenção. O
            frontend e o backend operam de forma independente, comunicando-se
            através de uma API RESTful.
          </p>
          <h3 className="subsection-title">Hospedagem:</h3>
          <ul className="feature-list">
            <li>
              Frontend (Vercel): A interface do usuário é hospedada na Vercel,
              garantindo alta disponibilidade e entrega rápida de conteúdo
              estático.
            </li>
            <li>
              Backend (Railway): A API e a lógica de negócios residem na
              Railway, uma plataforma que oferece escalabilidade e gerenciamento
              simplificado de aplicações Node.js.
            </li>
          </ul>
          <h3 className="subsection-title">Banco de Dados:</h3>
          <p className="section-text">
            O MySQL, também hospedado na Railway e gerenciado via Prisma,
            armazena dados de usuários e suas coleções de obras favoritas,
            garantindo integridade e acesso rápido.
          </p>
          <h3 className="subsection-title">Integração:</h3>
          <p className="section-text">
            A comunicação entre o frontend e o backend é realizada através de
            requisições HTTP, com o backend atuando como um intermediário para a
            API externa do Metropolitan Museum of Art, processando e formatando
            os dados para o cliente.
          </p>
          {/* Opcional: Adicionar um diagrama de arquitetura aqui */}
        </section>

        {/* Desafios Técnicos e Soluções/Aprendizados */}
        <section className="detail-section">
          <h2 className="section-title">
            Desafios Técnicos e Soluções/Aprendizados
          </h2>
          <p className="section-text">
            O desenvolvimento da Galeria de Arte Pessoal apresentou
            oportunidades valiosas para aprofundar conhecimentos em integração
            de APIs e gerenciamento de estado complexo.
          </p>
          <h3 className="subsection-title">Integração com API Externa:</h3>
          <p className="section-text">
            Um dos principais desafios foi a integração eficiente e otimizada
            com a API do Metropolitan Museum of Art. Isso envolveu a compreensão
            da estrutura de dados da API, a implementação de estratégias de
            caching para reduzir requisições repetitivas e a adaptação dos dados
            recebidos para o modelo interno da aplicação. A solução envolveu a
            criação de uma camada de serviço no backend para abstrair a API
            externa, permitindo maior controle sobre os dados e facilitando
            futuras expansões.
          </p>
          <h3 className="subsection-title">
            Gerenciamento de Estado de Usuário:
          </h3>
          <p className="section-text">
            Com funcionalidades como login e a seleção de obras favoritas, o
            gerenciamento do estado global da aplicação tornou-se crucial. A
            implementação do Redux no frontend foi fundamental para manter a
            consistência dos dados do usuário e das obras favoritadas em
            diferentes componentes, garantindo uma experiência fluida e reativa.
            Isso solidificou a compreensão sobre a arquitetura Flux e a
            importância de um fluxo de dados unidirecional em aplicações
            complexas.
          </p>
        </section>

        {/* Links para o Projeto */}
        <section className="project-links">
          <Link
            to="https://galeria-pessoal-front-end.vercel.app/"
            rel="noopener noreferrer"
            className="btn-details"
            target="_blank"
          >
            Ver Projeto Online
          </Link>
          <Link
            to="https://github.com/TauDuque/galeria-pessoal-front-end"
            rel="noopener noreferrer"
            className="btn-details secondary"
            target="_blank"
          >
            Repositório Frontend
          </Link>
          <Link
            to="https://github.com/TauDuque/galeria-pessoal-back-end"
            rel="noopener noreferrer"
            className="btn-details secondary"
            target="_blank"
          >
            Repositório Backend
          </Link>
        </section>
      </div>
    </div>
  );
};

export default GaleriaDeArteDetalhes;
