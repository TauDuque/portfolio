// src/pages/HabilidadesFerramentas/index.tsx
import React from "react";
import "./styles.css"; // Importa os estilos específicos da página
import TypescriptIconLight from "../../assets/images/ts-light.png";
import TypescriptIconDark from "../../assets/images/ts-dark.png";

interface HabilidadesFerramentasProps {
  isDarkMode: boolean;
}

const HabilidadesFerramentas: React.FC<HabilidadesFerramentasProps> = ({
  isDarkMode,
}) => {
  return (
    <div className="habilidades-ferramentas-container">
      <section className="habilidades-ferramentas-section">
        <h1 className="habilidades-ferramentas-title">
          Habilidades & Ferramentas
        </h1>
        <p className="habilidades-ferramentas-intro">
          Meu arsenal técnico e minhas competências interpessoais me permitem
          construir soluções robustas e colaborar de forma eficaz em equipes
          ágeis. Abaixo, detalho as tecnologias que domino e as soft skills que
          me definem como profissional.
        </p>
      </section>

      <section className="habilidades-ferramentas-section">
        <h2 className="habilidades-ferramentas-subtitle">
          Habilidades Técnicas
        </h2>
        <div className="skills-grid">
          {/* Linguagens */}
          <div className="skill-category">
            <h3>
              <i className="fas fa-code"></i> Linguagens
            </h3>
            <ul>
              <li>
                <i className="fa-brands fa-js"></i>
                <div>
                  <strong>JavaScript (ES6+)</strong>
                  <p>
                    Base para aplicações web modernas, com foco em performance e
                    reatividade.
                  </p>
                </div>
              </li>
              <li>
                <img
                  src={isDarkMode ? TypescriptIconDark : TypescriptIconLight}
                  alt="TypeScript Icon"
                  className="skill-img-icon"
                />
                <div>
                  <strong>TypeScript</strong>
                  <p>
                    Aplico tipagem estática para aumentar a robustez e a
                    manutenibilidade do código, garantindo projetos mais seguros
                    e escaláveis.
                  </p>
                </div>
              </li>
              <li>
                <i className="fa-brands fa-html5"></i>
                <div>
                  <strong>HTML5</strong>
                  <p>Estruturação semântica e acessível de conteúdo web.</p>
                </div>
              </li>
              <li>
                <i className="fa-brands fa-css3-alt"></i>
                <div>
                  <strong>CSS3</strong>
                  <p>
                    Estilização moderna e responsiva, com foco em design e
                    experiência do usuário.
                  </p>
                </div>
              </li>
            </ul>
          </div>

          {/* Front-end */}
          <div className="skill-category">
            <h3>
              <i className="fas fa-desktop"></i> Front-end
            </h3>
            <ul>
              <li>
                <i className="fa-brands fa-react"></i>
                <div>
                  <strong>React.js</strong>
                  <p>
                    Desenvolvo interfaces de usuário interativas e reativas,
                    utilizando hooks e o ecossistema React para criar
                    experiências fluidas e performáticas.
                  </p>
                </div>
              </li>
              <li>
                <i className="fa-solid fa-layer-group"></i>
                <div>
                  <strong>Next.js</strong>
                  <p>
                    Utilizo para construir aplicações React com renderização no
                    servidor (SSR), geração de sites estáticos (SSG) e
                    otimizações de performance, garantindo SEO e UX de alto
                    nível.
                  </p>
                </div>
              </li>
              <li>
                <i className="fa-solid fa-atom"></i>
                <div>
                  <strong>Redux</strong>
                  <p>
                    Gerenciamento de estado complexo e previsível em aplicações
                    de grande escala.
                  </p>
                </div>
              </li>
              <li>
                <i className="fa-solid fa-palette"></i>
                <div>
                  <strong>Styled Components</strong>
                  <p>
                    Estilização de componentes com CSS-in-JS, promovendo
                    modularidade e reusabilidade.
                  </p>
                </div>
              </li>
              <li>
                <i className="fa-solid fa-cloud-arrow-up"></i>
                <div>
                  <strong>Axios</strong>
                  <p>
                    Cliente HTTP para requisições assíncronas, facilitando a
                    comunicação com APIs.
                  </p>
                </div>
              </li>
              <li>
                <i className="fa-solid fa-cube"></i>
                <div>
                  <strong>Material UI</strong>
                  <p>
                    Criação de interfaces com componentes pré-construídos e
                    aderentes ao Material Design.
                  </p>
                </div>
              </li>
              <li>
                <i className="fa-solid fa-wind"></i>
                <div>
                  <strong>Tailwind CSS</strong>
                  <p>
                    Desenvolvo interfaces rapidamente com um framework CSS
                    utility-first, garantindo designs consistentes, responsivos
                    e altamente personalizáveis.
                  </p>
                </div>
              </li>
            </ul>
          </div>

          {/* Back-end */}
          <div className="skill-category">
            <h3>
              <i className="fas fa-server"></i> Back-end
            </h3>
            <ul>
              <li>
                <i className="fa-brands fa-node-js"></i>
                <div>
                  <strong>Node.js</strong>
                  <p>
                    Construo APIs RESTful robustas e escaláveis, gerenciando
                    lógica de negócios e integração com bancos de dados de forma
                    eficiente e segura.
                  </p>
                </div>
              </li>
              <li>
                <i className="fa-solid fa-network-wired"></i>
                <div>
                  <strong>Express.js</strong>
                  <p>
                    Framework para desenvolvimento rápido de APIs e servidores
                    web em Node.js.
                  </p>
                </div>
              </li>
              <li>
                <i className="fa-solid fa-database"></i>
                <div>
                  <strong>TypeORM</strong>
                  <p>
                    ORM para TypeScript e JavaScript, facilitando a interação
                    com bancos de dados relacionais e não relacionais.
                  </p>
                </div>
              </li>
              <li>
                <i className="fa-solid fa-bolt"></i>
                <div>
                  <strong>Prisma</strong>
                  <p>
                    Utilizo como ORM de nova geração para interagir com bancos
                    de dados de forma segura e eficiente, com tipagem completa e
                    migrações automatizadas.
                  </p>
                </div>
              </li>
              <li>
                <i className="fa-solid fa-hourglass-half"></i>
                <div>
                  <strong>Bull</strong>
                  <p>
                    Gerenciamento de filas de tarefas em segundo plano para
                    processamento assíncrono.
                  </p>
                </div>
              </li>
              <li>
                <i className="fa-solid fa-table"></i>
                <div>
                  <strong>Sequelize</strong>
                  <p>
                    ORM para Node.js, com suporte a múltiplos bancos de dados
                    relacionais.
                  </p>
                </div>
              </li>
              <li>
                <i className="fa-solid fa-exchange-alt"></i>
                <div>
                  <strong>RESTful APIs</strong>
                  <p>
                    Criação e consumo de APIs seguindo os princípios REST para
                    comunicação eficiente entre sistemas.
                  </p>
                </div>
              </li>
            </ul>
          </div>

          {/* Bases de Dados - MOVIDO PARA CIMA */}
          <div className="skill-category">
            <h3>
              <i className="fas fa-hdd"></i> Bases de Dados
            </h3>
            <ul>
              <li>
                <i className="fa-solid fa-leaf"></i>
                <div>
                  <strong>MongoDB</strong>
                  <p>
                    Banco de dados NoSQL flexível e escalável para dados não
                    estruturados.
                  </p>
                </div>
              </li>
              <li>
                <i className="fa-solid fa-database"></i>
                <div>
                  <strong>PostgreSQL</strong>
                  <p>
                    Banco de dados relacional robusto, com foco em integridade e
                    conformidade SQL.
                  </p>
                </div>
              </li>
              <li>
                <i className="fa-solid fa-database"></i>
                <div>
                  <strong>MySQL</strong>
                  <p>
                    Banco de dados relacional amplamente utilizado, conhecido
                    por sua performance e confiabilidade.
                  </p>
                </div>
              </li>
              <li>
                <i className="fa-solid fa-memory"></i>
                <div>
                  <strong>Redis</strong>
                  <p>
                    Armazenamento de dados em memória, ideal para cache e filas
                    de mensagens.
                  </p>
                </div>
              </li>
              <li>
                <i className="fa-solid fa-cloud"></i>
                <div>
                  <strong>Dynamo DB</strong>
                  <p>
                    Banco de dados NoSQL totalmente gerenciado e escalável da
                    AWS.
                  </p>
                </div>
              </li>
            </ul>
          </div>

          {/* Ferramentas & DevOps */}
          <div className="skill-category">
            <h3>
              <i className="fas fa-tools"></i> Ferramentas & DevOps
            </h3>
            <ul>
              <li>
                <i className="fa-brands fa-github"></i>
                <div>
                  <strong>GitHub</strong>
                  <p>
                    Controle de versão e colaboração em projetos de software.
                  </p>
                </div>
              </li>
              <li>
                <i className="fa-brands fa-docker"></i>
                <div>
                  <strong>Docker</strong>
                  <p>
                    Containerização de aplicações para ambientes de
                    desenvolvimento e produção consistentes.
                  </p>
                </div>
              </li>
              <li>
                <i className="fa-solid fa-bug"></i>
                <div>
                  <strong>SonarQube</strong>
                  <p>
                    Análise estática de código para garantir qualidade e
                    segurança.
                  </p>
                </div>
              </li>
              <li>
                <i className="fa-solid fa-vial"></i>
                <div>
                  <strong>Jest</strong>
                  <p>
                    Framework de testes JavaScript para garantir a
                    funcionalidade e robustez do código.
                  </p>
                </div>
              </li>
              <li>
                <i className="fa-solid fa-arrows-rotate"></i>
                <div>
                  <strong>CI/CD</strong>
                  <p>
                    Implementação de pipelines de Integração Contínua e Entrega
                    Contínua para automação de builds e deploys.
                  </p>
                </div>
              </li>
            </ul>
          </div>

          {/* Plataformas Cloud */}
          <div className="skill-category">
            <h3>
              <i className="fas fa-cloud"></i> Plataformas Cloud
            </h3>
            <ul>
              <li>
                <i className="fa-brands fa-microsoft"></i>
                <div>
                  <strong>Azure</strong>
                  <p>
                    Utilização de serviços de nuvem para hospedagem, banco de
                    dados e outras soluções.
                  </p>
                </div>
              </li>
            </ul>
          </div>

          {/* Metodologias */}
          <div className="skill-category">
            <h3>
              <i className="fas fa-project-diagram"></i> Metodologias
            </h3>
            <ul>
              <li>
                <i className="fa-solid fa-people-arrows"></i>
                <div>
                  <strong>Agile (Scrum/Kanban)</strong>
                  <p>
                    Aplicação de metodologias ágeis para gerenciamento de
                    projetos e entregas iterativas.
                  </p>
                </div>
              </li>
              <li>
                <i className="fa-solid fa-broom"></i>
                <div>
                  <strong>Clean Code</strong>
                  <p>
                    Escrita de código legível, manutenível e eficiente, seguindo
                    as melhores práticas.
                  </p>
                </div>
              </li>
              <li>
                <i className="fa-solid fa-cubes"></i>
                <div>
                  <strong>DDD (Domain-Driven Design)</strong>
                  <p>
                    Aplico princípios de DDD para modelar domínios complexos,
                    garantindo que a lógica de negócio esteja no centro do
                    desenvolvimento e seja compreendida por toda a equipe.
                  </p>
                </div>
              </li>
              <li>
                <i className="fa-solid fa-sitemap"></i>
                <div>
                  <strong>Clean Architecture</strong>
                  <p>
                    Estruturo aplicações com uma arquitetura limpa e
                    desacoplada, promovendo a testabilidade, manutenibilidade e
                    a independência de frameworks e bancos de dados.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="habilidades-ferramentas-section">
        <h2 className="habilidades-ferramentas-subtitle">Soft Skills</h2>
        <div className="soft-skills-grid">
          <div className="soft-skill-item">
            <i className="fa-solid fa-comments"></i>
            <h4>Comunicação</h4>
            <p>
              Facilito a troca de informações e ideias complexas, garantindo
              alinhamento e clareza em projetos.
            </p>
          </div>
          <div className="soft-skill-item">
            <i className="fa-solid fa-handshake"></i>
            <h4>Trabalho em Equipe</h4>
            <p>
              Colaboro ativamente, promovendo um ambiente de respeito e
              cooperação para alcançar objetivos comuns.
            </p>
          </div>
          <div className="soft-skill-item">
            <i className="fa-solid fa-lightbulb"></i>
            <h4>Resolução de Problemas</h4>
            <p>
              Abordo desafios com criatividade e pensamento analítico, buscando
              soluções eficazes e inovadoras.
            </p>
          </div>
          {/* Adaptabilidade - MOVIDO PARA CIMA */}
          <div className="soft-skill-item">
            <i className="fa-solid fa-shuffle"></i>
            <h4>Adaptabilidade</h4>
            <p>
              Ajusto-me rapidamente a novas tecnologias, metodologias e mudanças
              de requisitos, mantendo a produtividade.
            </p>
          </div>
          <div className="soft-skill-item">
            <i className="fa-solid fa-user-graduate"></i>
            <h4>Mentoria</h4>
            <p>
              Apoio o desenvolvimento de colegas, compartilhando conhecimento e
              promovendo o crescimento da equipe.
            </p>
          </div>
          <div className="soft-skill-item">
            <i className="fa-solid fa-rocket"></i>
            <h4>Proatividade</h4>
            <p>
              Tomo a iniciativa para identificar oportunidades de melhoria e
              antecipar desafios, agindo de forma independente.
            </p>
          </div>
          <div className="soft-skill-item">
            <i className="fa-solid fa-magnifying-glass"></i>
            <h4>Atenção ao Detalhe</h4>
            <p>
              Garanto a precisão e a qualidade em cada linha de código e em cada
              interação do usuário.
            </p>
          </div>
        </div>
      </section>

      <section className="habilidades-ferramentas-section">
        <h2 className="habilidades-ferramentas-subtitle">
          Formação e Cursos Relevantes
        </h2>
        <ul className="courses-list">
          <li>
            <i className="fa-solid fa-book-open"></i> Licenciado em Letras
            Portuguesas - USP - Universidade de São Paulo
          </li>
          <li>
            <i className="fa-solid fa-graduation-cap"></i> Ignite - Rocketseat
            (2020)
          </li>
          <li>
            <i className="fa-solid fa-graduation-cap"></i> CS50 - EdX.org (2021)
          </li>
          <li>
            <i className="fa-solid fa-graduation-cap"></i> Fundamentos de
            JavaScript Funcional - Cod3r (2020)
          </li>
          <li>
            <i className="fa-solid fa-graduation-cap"></i> 20 JavaScript Web
            Projects Udemy (2020)
          </li>
          <li>
            <i className="fa-solid fa-graduation-cap"></i> freeCodeCamp -
            JavaScript Algorithms and Data Structures (2020)
          </li>
          <li>
            <i className="fa-solid fa-graduation-cap"></i> Codecademy - Learn
            JavaScript (2021)
          </li>
          <li>
            <i className="fa-solid fa-graduation-cap"></i> MDN Web Docs - Guia
            de JavaScript (2021)
          </li>
        </ul>
      </section>
    </div>
  );
};

export default HabilidadesFerramentas;
