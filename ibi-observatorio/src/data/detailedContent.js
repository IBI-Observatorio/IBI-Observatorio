export const detailedContent = {
  simulacoes: {
    title: "Simulações em Logística - Detalhes",
    content: `
      <h3>Capacidades Avançadas do Observatório</h3>
      <p>O Observatório será capaz de realizar simulações em logística para a criação de modelos virtuais que replicam a dinâmica e o comportamento de sistemas logísticos complexos, como cadeias de suprimentos, redes de transporte e operações em terminais.</p>
      
      <p>O objetivo principal é testar diferentes cenários, estratégias, configurações e políticas operacionais para auxiliar na tomada de decisão.</p>
      
      <h4>Acompanhamento de Obras Públicas</h4>
      <p>O Observatório ainda será capaz de acompanhar o planejamento e execução de obras públicas.</p>
      
      <p>No planejamento, serão primeiramente abrangidos todos os projetos federais e estaduais, expandindo-se posteriormente para os municipais. Para cada um, será essencial detalhar se possuem:</p>
      <ul>
        <li>Licenciamento ambiental e/ou outras licenças pertinentes</li>
        <li>Recursos garantidos no Plano Plurianual e nas leis orçamentárias</li>
      </ul>
      
      <p>No que diz respeito às obras já em andamento, serão também avaliados:</p>
      <ul>
        <li>Disponibilidade de recursos para sua conclusão</li>
        <li>Cronograma físico e financeiro</li>
        <li>Responsáveis pela sua execução</li>
      </ul>
    `
  },

  modelagem: {
    title: "Modelagem Avançada - Técnicas e Metodologias",
    content: `
      <h3>Representação Abstrata de Sistemas Logísticos</h3>
      <p>A representação abstrata, matemática ou lógica do sistema logístico envolve definir componentes complexos, processos dinâmicos e regras de operação sofisticadas.</p>
      
      <h4>Componentes do Sistema</h4>
      <p><strong>Entidades:</strong> veículos, cargas, terminais, armazéns, vias</p>
      
      <h4>Processos Dinâmicos</h4>
      <p><strong>Eventos discretos:</strong> chegada de carga, carregamento, viagem, descarga, falha de equipamento</p>
      
      <h4>Regras de Operação</h4>
      <p><strong>Políticas:</strong> roteamento, agendamento, priorização</p>
      
      <h4>Tipos de Modelos Utilizados</h4>
      <ul>
        <li><strong>Simulação de Eventos Discretos (DES):</strong> Modelagem de sistemas onde o estado muda em pontos específicos no tempo</li>
        <li><strong>Modelagem Baseada em Agentes (ABM):</strong> Simulação de ações e interações de entidades autônomas</li>
        <li><strong>Simulação Contínua:</strong> Para sistemas onde as mudanças ocorrem continuamente ao longo do tempo</li>
      </ul>
    `
  },

  variaveis: {
    title: "Variáveis do Sistema - Análise Detalhada",
    content: `
      <h3>Elementos Dinâmicos do Sistema</h3>
      <p>Os elementos do sistema que podem mudar ao longo do tempo e influenciar significativamente o resultado das simulações.</p>
      
      <h4>Variáveis de Entrada</h4>
      <p><strong>Controláveis:</strong></p>
      <ul>
        <li>Volume de carga processada</li>
        <li>Políticas de roteamento</li>
        <li>Estratégias de agendamento</li>
        <li>Alocação de recursos</li>
      </ul>
      
      <p><strong>Incontroláveis:</strong></p>
      <ul>
        <li>Custos de transporte</li>
        <li>Disponibilidade de veículos</li>
        <li>Capacidade de infraestrutura existente</li>
        <li>Demanda do mercado</li>
        <li>Condições climáticas</li>
      </ul>
      
      <h4>Variáveis de Estado</h4>
      <p>Descrevem a condição do sistema em um dado momento:</p>
      <ul>
        <li>Número de veículos em fila de espera</li>
        <li>Nível de estoque em armazéns</li>
        <li>Taxa de ocupação de pátios e terminais</li>
        <li>Disponibilidade operacional de equipamentos</li>
      </ul>
    `
  },

  cenarios: {
    title: "Análise de Cenários - Metodologia Completa",
    content: `
      <h3>Simulação de Situações Hipotéticas</h3>
      <p>Conjuntos específicos de valores para as variáveis de entrada, utilizados para representar diferentes situações hipotéticas ou projeções futuras detalhadas.</p>
      
      <h4>Cenários Econômicos</h4>
      <ul>
        <li><strong>Crescimento Econômico:</strong> Análise de diferentes taxas de crescimento do PIB e seu impacto na demanda por transporte</li>
        <li><strong>Variação no Preço do Combustível:</strong> Simulação de diferentes cenários de preços de energia</li>
        <li><strong>Inflação e Câmbio:</strong> Impacto de variações monetárias nos custos logísticos</li>
      </ul>
      
      <h4>Cenários Operacionais</h4>
      <ul>
        <li><strong>Falha em Terminal Crítico:</strong> Análise de contingência para interrupções operacionais</li>
        <li><strong>Abertura de Nova Rodovia:</strong> Impacto de nova infraestrutura na malha existente</li>
        <li><strong>Implementação de Ferrovia:</strong> Mudanças modais e redistribuição de fluxos</li>
      </ul>
      
      <h4>Cenários Regulatórios e Ambientais</h4>
      <ul>
        <li><strong>Mudanças Regulatórias:</strong> Novas leis de transporte e suas consequências</li>
        <li><strong>Eventos Climáticos Extremos:</strong> Impacto de condições meteorológicas adversas</li>
        <li><strong>Restrições Ambientais:</strong> Limitações por questões de sustentabilidade</li>
      </ul>
      
      <p>A simulação permite comparar o desempenho do sistema sob múltiplos cenários, fornecendo insights valiosos para o planejamento estratégico.</p>
    `
  },

  metricas: {
    title: "Métricas de Desempenho - Indicadores Avançados",
    content: `
      <h3>Indicadores Quantitativos Especializados</h3>
      <p>Indicadores quantitativos usados para avaliar a eficiência, eficácia e robustez do sistema sob diferentes cenários operacionais.</p>
      
      <h4>Métricas Financeiras</h4>
      <ul>
        <li><strong>Custo Total de Transporte:</strong> Análise por tonelada/km, incluindo custos diretos e indiretos</li>
        <li><strong>Retorno sobre Investimento (ROI):</strong> Em melhorias de infraestrutura e modernização</li>
        <li><strong>Custo de Oportunidade:</strong> Perdas por ineficiências e gargalos</li>
      </ul>
      
      <h4>Métricas Operacionais</h4>
      <ul>
        <li><strong>Tempo Total de Trânsito (Lead Time):</strong> Da origem ao destino final</li>
        <li><strong>Utilização da Capacidade:</strong> Taxa de ocupação de vias, pátios, berços portuários</li>
        <li><strong>Nível de Serviço:</strong> Pontualidade, confiabilidade, frequência</li>
        <li><strong>Throughput:</strong> Volume processado por unidade de tempo</li>
      </ul>
      
      <h4>Métricas Ambientais</h4>
      <ul>
        <li><strong>Emissões de CO2:</strong> Por modal e rota utilizada</li>
        <li><strong>Consumo Energético:</strong> Eficiência energética por tonelada transportada</li>
        <li><strong>Impacto Ambiental:</strong> Pegada ecológica das operações</li>
      </ul>
      
      <h4>Métricas de Qualidade</h4>
      <ul>
        <li><strong>Taxa de Avarias:</strong> Qualidade no manuseio de cargas</li>
        <li><strong>Satisfação do Cliente:</strong> Índices de qualidade do serviço</li>
        <li><strong>Disponibilidade Operacional:</strong> Uptime de equipamentos e sistemas</li>
      </ul>
    `
  },

  analiseRisco: {
    title: "Análise de Sensibilidade e Risco - Metodologia Avançada",
    content: `
      <h3>Compreensão de Variabilidade e Incertezas</h3>
      <p>A simulação permite entender como a variação em uma ou mais variáveis de entrada afeta as métricas de desempenho, proporcionando uma visão completa dos riscos operacionais.</p>
      
      <h4>Identificação de Fatores Críticos</h4>
      <ul>
        <li><strong>Análise de Tornado:</strong> Identificação das variáveis com maior impacto nos resultados</li>
        <li><strong>Análise de Monte Carlo:</strong> Simulação de milhares de cenários com variáveis aleatórias</li>
        <li><strong>Teste de Stress:</strong> Avaliação sob condições extremas</li>
      </ul>
      
      <h4>Quantificação de Riscos</h4>
      <ul>
        <li><strong>Variação na Demanda:</strong> Impacto de flutuações de mercado</li>
        <li><strong>Tempo de Reparo de Ferrovia:</strong> Análise de interrupções não programadas</li>
        <li><strong>Falhas em Equipamentos Críticos:</strong> Avaliação de contingências</li>
        <li><strong>Variações Climáticas:</strong> Sazonalidade e eventos extremos</li>
      </ul>
      
      <h4>Estratégias de Mitigação</h4>
      <ul>
        <li>Desenvolvimento de planos de contingência</li>
        <li>Diversificação de rotas e modais</li>
        <li>Investimentos em redundância operacional</li>
        <li>Implementação de sistemas de monitoramento em tempo real</li>
      </ul>
    `
  },

  otimizacao: {
    title: "Otimização via Simulação - Metodologia Integrada",
    content: `
      <h3>Complementaridade entre Simulação e Otimização</h3>
      <p>Embora simulação e otimização sejam técnicas distintas, elas frequentemente se complementam para gerar soluções mais robustas e realistas.</p>
      
      <h4>Avaliação de Soluções Otimizadas</h4>
      <ul>
        <li><strong>Validação de Modelos:</strong> Simulações podem ser usadas para avaliar o desempenho de soluções propostas por modelos de otimização</li>
        <li><strong>Teste de Robustez:</strong> Verificação do comportamento das soluções sob incertezas</li>
        <li><strong>Análise de Sensibilidade:</strong> Compreensão da estabilidade das soluções otimizadas</li>
      </ul>
      
      <h4>Exploração do Espaço de Soluções</h4>
      <ul>
        <li><strong>Algoritmos Genéticos:</strong> Uso de simulação para avaliar fitness de soluções candidatas</li>
        <li><strong>Simulated Annealing:</strong> Busca por configurações ótimas usando simulação como função objetivo</li>
        <li><strong>Otimização por Enxame de Partículas:</strong> Exploração inteligente do espaço de parâmetros</li>
      </ul>
      
      <h4>Aplicações Práticas</h4>
      <ul>
        <li>Dimensionamento ótimo de frotas</li>
        <li>Localização de terminais e centros de distribuição</li>
        <li>Programação de manutenções preventivas</li>
        <li>Definição de políticas de estoque</li>
      </ul>
    `
  },

  requisitos: {
    title: "Requisitos Técnicos Essenciais - Especificação Completa",
    content: `
      <h3>Infraestrutura de Computação Avançada</h3>
      <p>Ambiente de computação escalável e resiliente, preferencialmente em nuvem pública para aproveitar serviços gerenciados, elasticidade e modelos de pagamento flexíveis.</p>
      
      <h4>Arquitetura Recomendada</h4>
      <ul>
        <li><strong>Microsserviços:</strong> Arquitetura baseada em microsserviços para flexibilidade</li>
        <li><strong>Contêineres:</strong> Docker e Kubernetes para escalabilidade</li>
        <li><strong>Service Mesh:</strong> Istio para comunicação segura entre serviços</li>
      </ul>
      
      <h4>Armazenamento de Dados Especializado</h4>
      <ul>
        <li><strong>Data Lake:</strong> S3 (AWS), Data Lake Storage (Azure), Cloud Storage (GCP)</li>
        <li><strong>Bancos Relacionais:</strong> PostgreSQL, MySQL, Aurora para dados estruturados</li>
        <li><strong>NoSQL:</strong> MongoDB, Cassandra para dados semi-estruturados</li>
        <li><strong>Data Warehouse:</strong> Snowflake, Databricks, Redshift, Synapse Analytics</li>
        <li><strong>Time Series:</strong> InfluxDB para dados temporais de sensores</li>
      </ul>
      
      <h4>Processamento de Dados Avançado</h4>
      <ul>
        <li><strong>ETL/ELT:</strong> Apache NiFi, Talend, Apache Flink, AWS Glue, Azure Data Factory</li>
        <li><strong>Processamento Distribuído:</strong> Apache Spark, Hadoop para big data</li>
        <li><strong>Stream Processing:</strong> Apache Kafka, Apache Storm para dados em tempo real</li>
      </ul>
      
      <h4>Análise e Business Intelligence</h4>
      <ul>
        <li><strong>BI Platforms:</strong> Power BI, Tableau, Qlik Sense</li>
        <li><strong>Machine Learning:</strong> Python (Pandas, NumPy, SciPy, Scikit-learn)</li>
        <li><strong>Deep Learning:</strong> TensorFlow, PyTorch para modelos complexos</li>
        <li><strong>Statistical Analysis:</strong> R para análises estatísticas avançadas</li>
      </ul>
      
      <h4>Visualização e Sistemas GIS</h4>
      <ul>
        <li><strong>GIS Platforms:</strong> ArcGIS, QGIS para análise espacial</li>
        <li><strong>Web Mapping:</strong> Mapbox, Google Earth Engine</li>
        <li><strong>APIs de Geocodificação:</strong> Integração com serviços de mapas</li>
        <li><strong>Dashboards Customizados:</strong> D3.js, Chart.js para visualizações específicas</li>
      </ul>
      
      <h4>Simulação Especializada</h4>
      <ul>
        <li><strong>Software Comercial:</strong> AnyLogic, Arena para modelagem complexa</li>
        <li><strong>Open Source:</strong> SimPy (Python) para simulação de eventos discretos</li>
        <li><strong>Transporte:</strong> VISUM, SUMO para simulação de tráfego</li>
        <li><strong>Supply Chain:</strong> Ferramentas especializadas em cadeia de suprimentos</li>
      </ul>
    `
  },

  seguranca: {
    title: "Segurança da Informação - Protocolo Completo",
    content: `
      <h3>Controles de Segurança Multi-Camada</h3>
      <p>Implementação de controles de segurança abrangentes em todas as camadas da arquitetura do sistema.</p>
      
      <h4>Segurança de Rede</h4>
      <ul>
        <li><strong>Virtual Private Clouds (VPCs):</strong> Isolamento de rede</li>
        <li><strong>Subnets Privadas:</strong> Segregação de ambientes</li>
        <li><strong>Firewalls de Aplicação:</strong> WAF para proteção de aplicações web</li>
        <li><strong>DDoS Protection:</strong> Proteção contra ataques de negação de serviço</li>
      </ul>
      
      <h4>Segurança de Dados</h4>
      <ul>
        <li><strong>Criptografia em Repouso:</strong> AES-256 para dados armazenados</li>
        <li><strong>Criptografia em Trânsito:</strong> TLS 1.3 para transmissão</li>
        <li><strong>Mascaramento de Dados:</strong> Proteção de informações sensíveis</li>
        <li><strong>Anonimização:</strong> Técnicas de privacy-preserving analytics</li>
      </ul>
      
      <h4>Gestão de Identidades e Acessos (IAM)</h4>
      <ul>
        <li><strong>Princípio do Privilégio Mínimo:</strong> Acesso limitado ao necessário</li>
        <li><strong>Autenticação Multifator (MFA):</strong> Camada adicional de segurança</li>
        <li><strong>Single Sign-On (SSO):</strong> Gestão centralizada de identidades</li>
        <li><strong>Controle de Acesso Baseado em Função (RBAC):</strong> Permissões por função</li>
      </ul>
      
      <h4>Monitoramento e Detecção</h4>
      <ul>
        <li><strong>SIEM (Security Information and Event Management):</strong> Correlação de eventos</li>
        <li><strong>Log Centralizado:</strong> Auditoria completa de atividades</li>
        <li><strong>Detecção de Anomalias:</strong> Machine learning para identificar padrões suspeitos</li>
        <li><strong>Threat Intelligence:</strong> Inteligência sobre ameaças</li>
      </ul>
      
      <h4>Conformidade Regulatória</h4>
      <ul>
        <li><strong>LGPD:</strong> Lei Geral de Proteção de Dados Pessoais</li>
        <li><strong>ISO 27001:</strong> Sistema de gestão de segurança da informação</li>
        <li><strong>SOC 2:</strong> Controles para segurança, disponibilidade e confidencialidade</li>
        <li><strong>GDPR:</strong> Para dados de cidadãos europeus</li>
      </ul>
      
      <h4>Plano de Resposta a Incidentes</h4>
      <ul>
        <li>Procedimentos de identificação e contenção</li>
        <li>Equipe de resposta designada</li>
        <li>Comunicação com stakeholders</li>
        <li>Recuperação e lições aprendidas</li>
      </ul>
    `
  },

  apis: {
    title: "APIs e Integração - Arquitetura de Conectividade",
    content: `
      <h3>Camada de APIs Robusta e Segura</h3>
      <p>Desenvolvimento de uma camada de APIs bem documentada e segura para permitir a integração eficiente do Observatório com sistemas externos.</p>
      
      <h4>Arquitetura de APIs</h4>
      <ul>
        <li><strong>RESTful APIs:</strong> Padrão REST para operações CRUD</li>
        <li><strong>GraphQL:</strong> Consultas flexíveis e eficientes</li>
        <li><strong>WebSockets:</strong> Comunicação em tempo real</li>
        <li><strong>gRPC:</strong> Comunicação de alta performance entre serviços</li>
      </ul>
      
      <h4>Integração Governamental</h4>
      <ul>
        <li><strong>SIAFI:</strong> Sistema Integrado de Administração Financeira</li>
        <li><strong>SIGPLAN:</strong> Sistema de Informações Gerenciais e de Planejamento</li>
        <li><strong>Portal da Transparência:</strong> Dados de contratos e licitações</li>
        <li><strong>DNIT:</strong> Dados de infraestrutura rodoviária</li>
        <li><strong>ANTAQ:</strong> Dados de transporte aquaviário</li>
        <li><strong>ANTT:</strong> Dados de transporte terrestre</li>
      </ul>
      
      <h4>Integração com Setor Privado</h4>
      <ul>
        <li><strong>Operadores Portuários:</strong> Dados operacionais de movimentação</li>
        <li><strong>Concessionárias:</strong> Dados de tráfego e manutenção</li>
        <li><strong>Empresas de Logística:</strong> Informações de fretes e rotas</li>
        <li><strong>Fornecedores de Tecnologia:</strong> Dados de IoT e sensores</li>
      </ul>
      
      <h4>Integração Acadêmica</h4>
      <ul>
        <li><strong>Universidades:</strong> Pesquisas e estudos setoriais</li>
        <li><strong>Institutos de Pesquisa:</strong> Dados científicos e tecnológicos</li>
        <li><strong>Centros de Inovação:</strong> Projetos piloto e experimentais</li>
      </ul>
      
      <h4>Segurança e Governança de APIs</h4>
      <ul>
        <li><strong>OAuth 2.0:</strong> Autenticação e autorização</li>
        <li><strong>Rate Limiting:</strong> Controle de taxa de requisições</li>
        <li><strong>API Gateway:</strong> Ponto único de entrada com controles</li>
        <li><strong>Monetização:</strong> Modelos de cobrança por uso, se aplicável</li>
      </ul>
    `
  },

  metricas_sucesso: {
    title: "Métricas de Sucesso - KPIs Detalhados",
    content: `
      <h3>Indicadores Quantitativos e Qualitativos</h3>
      <p>Sistema abrangente de métricas para avaliar o desempenho e impacto do Observatório de Dados.</p>
      
      <h4>Cobertura e Qualidade de Dados</h4>
      <ul>
        <li><strong>Número de Fontes Integradas:</strong> Meta de 100+ fontes de dados relevantes</li>
        <li><strong>Percentual de Cobertura:</strong> 85% dos dados de infraestrutura nacional</li>
        <li><strong>Frequência de Atualização:</strong> 95% dos dados atualizados conforme cronograma</li>
        <li><strong>Qualidade dos Dados:</strong> Taxa de erro inferior a 2%</li>
        <li><strong>Completude:</strong> 90% dos campos obrigatórios preenchidos</li>
      </ul>
      
      <h4>Uso e Adoção da Plataforma</h4>
      <ul>
        <li><strong>Usuários Ativos Mensais:</strong> Meta de 1.000+ usuários</li>
        <li><strong>Sessões por Usuário:</strong> Média de 5+ sessões/mês</li>
        <li><strong>Tempo de Sessão:</strong> 15+ minutos em média</li>
        <li><strong>Taxa de Retenção:</strong> 70% dos usuários retornam mensalmente</li>
        <li><strong>APIs Utilizadas:</strong> 500+ chamadas diárias</li>
      </ul>
      
      <h4>Impacto em Políticas Públicas</h4>
      <ul>
        <li><strong>Decisões Baseadas em Dados:</strong> 80% das decisões de investimento</li>
        <li><strong>Projetos Priorizados:</strong> Ranking de 100+ projetos/ano</li>
        <li><strong>Economia Gerada:</strong> R$ 500M+ em otimizações identificadas</li>
        <li><strong>Tempo de Análise:</strong> Redução de 60% no tempo de estudos</li>
      </ul>
      
      <h4>Performance Técnica</h4>
      <ul>
        <li><strong>Disponibilidade:</strong> 99.9% de uptime</li>
        <li><strong>Tempo de Resposta:</strong> < 3 segundos para consultas complexas</li>
        <li><strong>Escalabilidade:</strong> Suporte a 10.000+ usuários simultâneos</li>
        <li><strong>Throughput de Dados:</strong> Processamento de 1TB+ por dia</li>
      </ul>
      
      <h4>Transparência e Engajamento</h4>
      <ul>
        <li><strong>Downloads de Dados:</strong> 10.000+ downloads/mês</li>
        <li><strong>Relatórios Gerados:</strong> 500+ relatórios automáticos/mês</li>
        <li><strong>Satisfação do Usuário:</strong> Nota média 4.5/5.0</li>
        <li><strong>Cobertura na Mídia:</strong> 50+ menções/mês</li>
      </ul>
      
      <h4>Inovação e Desenvolvimento</h4>
      <ul>
        <li><strong>Novos Modelos de IA:</strong> 5+ modelos desenvolvidos/ano</li>
        <li><strong>Parcerias Técnicas:</strong> 20+ instituições colaboradoras</li>
        <li><strong>Publicações Científicas:</strong> 10+ papers/ano</li>
        <li><strong>Patentes:</strong> 3+ registros de propriedade intelectual</li>
      </ul>
    `
  }
};

export default detailedContent;