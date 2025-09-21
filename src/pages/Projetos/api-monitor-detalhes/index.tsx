import { Link } from "react-router-dom";
import "./style.css"; // CSS específico para esta página

const APIMonitorDetalhes = () => {
  return (
    <div className="project-detail-page-container">
      {/* Seção Hero - Imagem de Destaque */}
      <section className="project-hero-visual">
        <img
          src="/src/assets/images/monitor_portada.png" // Substitua pelo caminho da sua imagem hero
          alt="Imagem de fundo abstrata de monitoramento de API"
          className="hero-image"
        />
        <div className="hero-overlay">
          <h1 className="hero-title">API Monitor</h1>
          <p className="hero-subtitle">
            Garantindo a Confiabilidade e Performance de Suas APIs
          </p>
        </div>
      </section>

      <div className="project-content-wrapper">
        {/* Visão Geral e Funcionalidades Chave */}
        <section className="detail-section">
          <h2 className="section-title">Visão Geral e Funcionalidades Chave</h2>
          <p className="section-text">
            O API Monitor é uma ferramenta essencial para desenvolvedores e
            equipes de operações que buscam garantir a saúde e o desempenho
            contínuo de suas APIs. Em um mundo onde a conectividade é vital, a
            falha de uma API pode ter impactos significativos. Esta aplicação
            foi desenvolvida para oferecer uma visão proativa e em tempo real do
            status de suas APIs, permitindo a detecção precoce de problemas e a
            manutenção da qualidade do serviço.
          </p>
          <h3 className="subsection-title">Funcionalidades Principais:</h3>
          <ul className="feature-list">
            <li>
              Monitoramento Contínuo: Verificações agendadas e automáticas da
              disponibilidade e tempo de resposta de APIs.
            </li>
            <li>
              Alertas Personalizáveis: Notificações instantâneas via e-mail ou
              outros canais quando uma API falha ou excede limites de
              desempenho.
            </li>
            <li>
              Histórico de Desempenho: Gráficos e logs detalhados para análise
              de tendências de uptime, latência e erros ao longo do tempo.
            </li>
            <li>
              Configuração Flexível: Adicione, edite e remova APIs para
              monitoramento com facilidade, definindo intervalos de verificação
              e critérios de sucesso/falha.
            </li>
            <li>
              Atualizações em Tempo Real: Dashboard interativo que reflete o
              status das APIs instantaneamente, graças à comunicação
              bidirecional.
            </li>
          </ul>
        </section>

        {/* Bloco Visual 1: GIF Grande e Único
        <section className="visual-showcase single-item">
          <div className="visual-item">
            <img
              src="/src/assets/gifs/gif_monitor.gif" // Substitua pelo caminho do seu GIF
              alt="GIF demonstrando o dashboard de monitoramento em tempo real"
              className="showcase-media"
            />
            <p className="media-caption">
              Visão geral do dashboard, mostrando o status em tempo real das
              APIs monitoradas.
            </p>
          </div>
        </section> */}

        {/* Stack Tecnológico */}
        <section className="detail-section">
          <h2 className="section-title">Stack Tecnológico</h2>
          <p className="section-text">
            Apesar de uma interface minimalista, o poder do API Monitor reside
            em sua robusta arquitetura de backend e na eficiência de suas
            tecnologias, que garantem escalabilidade, confiabilidade e
            comunicação em tempo real.
          </p>
          <div className="tech-stack-grid">
            <div className="tech-category">
              <h3 className="subsection-title">Frontend:</h3>
              <ul className="tech-list">
                <li>
                  React: Para uma interface de usuário responsiva e funcional,
                  focada na clareza dos dados de monitoramento.
                </li>
                <li>
                  Socket.IO Client: Habilita a comunicação bidirecional em tempo
                  real com o backend, garantindo que o dashboard seja sempre
                  atualizado.
                </li>
                <li>
                  Chart.js (ou similar): Para visualização de dados históricos
                  de desempenho, como gráficos de latência e uptime.
                </li>
                <li>
                  Tailwind CSS: Para estilização rápida e consistente, mantendo
                  o foco na funcionalidade e adaptabilidade.
                </li>
              </ul>
            </div>
            <div className="tech-category">
              <h3 className="subsection-title">Backend & Infraestrutura:</h3>
              <ul className="tech-list">
                <li>
                  Node.js & Express.js: Construção de uma API RESTful para
                  gerenciar as APIs monitoradas, configurações e interações com
                  o banco de dados.
                </li>
                <li>
                  Socket.IO: Permite a comunicação em tempo real entre o
                  servidor e os clientes, enviando atualizações de status das
                  APIs instantaneamente.
                </li>
                <li>
                  BULL & Redis: Utilizados para gerenciar filas de tarefas,
                  agendando e processando as verificações de API de forma
                  assíncrona e resiliente.
                </li>
                <li>
                  Prisma: ORM moderno e type-safe para interações eficientes e
                  seguras com o banco de dados PostgreSQL.
                </li>
                <li>
                  PostgreSQL: Banco de dados relacional robusto para
                  armazenamento persistente de dados de API, resultados de
                  monitoramento e configurações de usuário.
                </li>
                <li>
                  Nodemailer: Serviço de envio de e-mails para notificações de
                  alerta personalizáveis.
                </li>
                <li>
                  Docker: Utilizado para containerização da aplicação,
                  assegurando isolamento de dependências, portabilidade entre
                  ambientes de desenvolvimento e produção, e reprodutibilidade
                  do deploy.
                </li>
                <li>
                  Nginx: Atuando como reverse proxy e servidor de arquivos
                  estáticos, otimizando a entrega e segurança da aplicação.
                </li>
              </ul>
            </div>
          </div>
          {/* Opcional: Adicionar logos das tecnologias aqui */}
        </section>

        {/* Bloco Visual 2: Screenshot Grande e Único */}
        <section className="visual-showcase single-item">
          <div className="visual-item">
            <img
              src="/src/assets/images/monitor_detalhe.png" // Substitua pelo caminho do seu screenshot
              alt="Screenshot detalhado do histórico de desempenho de uma API"
              className="showcase-media"
            />
            <p className="media-caption">
              Detalhes do histórico de desempenho de uma API específica, com
              gráficos de latência e uptime.
            </p>
          </div>
        </section>

        {/* Arquitetura e Detalhes de Implementação */}
        <section className="detail-section">
          <h2 className="section-title">
            Arquitetura e Detalhes de Implementação
          </h2>
          <p className="section-text">
            O API Monitor adota uma arquitetura distribuída e orientada a
            eventos, onde o frontend e o backend se comunicam via REST e
            WebSockets (Socket.IO). O coração da aplicação é um sistema de filas
            gerenciado por BULL e Redis, que orquestra as verificações de API de
            forma assíncrona e resiliente.
          </p>
          <h3 className="subsection-title">Fluxo de Dados e Comunicação:</h3>
          <ul className="feature-list">
            <li>
              O usuário configura uma API para monitoramento via frontend.
            </li>
            <li>
              O backend registra a API no PostgreSQL (via Prisma) e adiciona uma
              tarefa à fila do BULL.
            </li>
            <li>
              Workers independentes consomem tarefas da fila do BULL, realizando
              requisições HTTP para as APIs externas, medindo tempo de resposta
              e status.
            </li>
            <li>
              Os resultados são enviados de volta ao backend, que os persiste no
              PostgreSQL e, em caso de alterações críticas de status, dispara
              eventos via Socket.IO para o frontend.
            </li>
            <li>
              O frontend recebe essas atualizações em tempo real, mantendo o
              dashboard sempre sincronizado.
            </li>
            <li>
              Se houver falha ou degradação, o backend envia alertas via
              Nodemailer.
            </li>
          </ul>
          <h3 className="subsection-title">Infraestrutura e Deploy:</h3>
          <p className="section-text">
            A aplicação é containerizada com Docker, garantindo portabilidade e
            consistência entre ambientes. O deploy é realizado em uma VM na
            DigitalOcean, onde o Nginx atua como um reverse proxy. O Nginx não
            só direciona o tráfego para o backend Node.js e o servidor
            Socket.IO, mas também serve arquivos estáticos do frontend e
            gerencia o balanceamento de carga, otimizando a performance e a
            segurança da aplicação.
          </p>
          <h3 className="subsection-title">
            Decisões de Arquitetura: Nginx e Socket.IO
          </h3>
          <ul className="feature-list">
            <li>
              Nginx: Foi estrategicamente implementado como reverse proxy para
              otimizar a entrega do frontend estático, balancear a carga para o
              backend Node.js e gerenciar a terminação SSL. Sua robustez e
              eficiência liberaram o backend para focar exclusivamente na lógica
              de negócios, ao mesmo tempo em que proporcionou uma camada
              essencial de segurança e performance para a aplicação.
            </li>
            <li>
              Socket.IO: A escolha do Socket.IO foi fundamental para a proposta
              de valor do API Monitor, viabilizando a comunicação bidirecional
              em tempo real. Isso permitiu que o dashboard exibisse o status das
              APIs instantaneamente, eliminando a necessidade de polling e
              garantindo uma experiência de usuário fluida e reativa, com menor
              latência e uso otimizado dos recursos do servidor.
            </li>
          </ul>
        </section>

        {/* Desafios Técnicos e Soluções/Aprendizados */}
        <section className="detail-section">
          <h2 className="section-title">
            Desafios Técnicos e Soluções/Aprendizados
          </h2>
          <p className="section-text">
            O desenvolvimento do API Monitor foi uma jornada de aprendizado
            intensivo, especialmente na construção de uma arquitetura robusta e
            escalável para monitoramento.
          </p>
          <h3 className="subsection-title">
            Infraestrutura e DevOps (VM, Docker, Nginx):
          </h3>
          <p className="section-text">
            Um dos maiores desafios e aprendizados foi a configuração completa
            da infraestrutura. Desde a criação e gerenciamento de uma VM na
            DigitalOcean, passando pela **containerização da aplicação com
            Docker, que garantiu um ambiente isolado e consistente para todas as
            dependências, até a configuração do Nginx como reverse proxy. Este
            processo exigiu aprofundamento em conceitos de rede, orquestração de
            containers e otimização de servidores, resultando em um deploy
            robusto e eficiente que não só simplificou o processo, mas também
            elevou a robustez e a escalabilidade da solução.
          </p>
          <h3 className="subsection-title">
            Comunicação em Tempo Real com Socket.IO:
          </h3>
          <p className="section-text">
            A implementação do Socket.IO para comunicação bidirecional em tempo
            real foi outro ponto de grande aprendizado. Dominar a configuração
            do servidor e do cliente, e garantir que as atualizações de status
            das APIs fossem entregues instantaneamente e de forma confiável ao
            dashboard, foi fundamental para a proposta de valor da aplicação.
          </p>
          <h3 className="subsection-title">
            Gerenciamento de Filas com BULL e Redis:
          </h3>
          <p className="section-text">
            Para lidar com o agendamento e processamento assíncrono das
            verificações de API, a integração de BULL (com Redis como backend)
            foi crucial. Isso permitiu criar um sistema de filas resiliente,
            capaz de processar um grande volume de tarefas de monitoramento sem
            bloquear o servidor principal, garantindo que as verificações
            ocorram de forma confiável e escalável.
          </p>
          <h3 className="subsection-title">
            Agendamento Confiável e Precisão do Monitoramento:
          </h3>
          <p className="section-text">
            Garantir que as verificações de API ocorram nos intervalos exatos,
            mesmo sob carga, exigiu uma cuidadosa implementação de agendadores e
            workers, com mecanismos de retry e tratamento de falhas. A
            configuração de critérios de sucesso (status HTTP, conteúdo da
            resposta) e a implementação de múltiplas tentativas antes de
            declarar uma API como 'down' foram cruciais para evitar alertas
            desnecessários e garantir a precisão do status reportado.
          </p>
          <h3 className="subsection-title">
            Visualização de Dados Históricos:
          </h3>
          <p className="section-text">
            Desenvolver uma forma eficiente de armazenar e consultar grandes
            volumes de dados de monitoramento para gerar gráficos de tendências
            de desempenho foi um aprendizado significativo em otimização de
            banco de dados e processamento de dados.
          </p>
        </section>

        {/* Links para o Projeto */}
        <section className="project-links">
          <Link
            to="https://api-monitor-front.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-details"
          >
            Ver Projeto Online
          </Link>
          <Link
            to="https://github.com/TauDuque/api-monitor-front"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-details secondary"
          >
            Repositório Frontend
          </Link>
          <Link
            to="https://github.com/TauDuque/api-monitor-back"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-details secondary"
          >
            Repositório Backend
          </Link>
        </section>
      </div>
    </div>
  );
};

export default APIMonitorDetalhes;
