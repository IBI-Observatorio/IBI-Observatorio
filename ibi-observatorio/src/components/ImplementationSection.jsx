import { motion, useScroll, useTransform } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useRef, useState, useEffect } from 'react';
import { 
  FileText, 
  Database, 
  Cog, 
  Rocket, 
  Settings, 
  CheckCircle,
  Calendar,
  Users,
  Info
} from 'lucide-react';
import Modal from './Modal';
import { detailedContent } from '../data/detailedContent';
import transport1 from '../assets/transport-1.png';
import transport2 from '../assets/transport-2.png';
import transport3 from '../assets/transport-3.png';
import transport4 from '../assets/transport-4.png';
import transport5 from '../assets/transport-5.png';
import transport6 from '../assets/transport-6.png';

const transportImages = [
  transport1, transport2, transport3, transport4, transport5, transport6
];

const phases = [
  {
    phase: "Fase 1",
    title: "Planejamento Estratégico",
    duration: "2-4 semanas",
    description: "Formação do comitê estratégico, workshops com stakeholders e definição da arquitetura tecnológica.",
    icon: FileText,
    tasks: [
      "Formação do comitê estratégico",
      "Workshops com stakeholders",
      "Mapeamento de fontes de dados",
      "Definição da arquitetura",
      "Modelo de governança"
    ]
  },
  {
    phase: "Fase 2",
    title: "Infraestrutura e Aquisição",
    duration: "4-8 semanas", 
    description: "Estabelecimento da infraestrutura tecnológica e início da coleta de dados.",
    icon: Database,
    tasks: [
      "Configuração da infraestrutura",
      "Implementação de pipelines",
      "Coleta inicial de dados",
      "Estabelecimento de conectividade",
      "Testes de integração"
    ]
  },
  {
    phase: "Fase 3",
    title: "Modelagem e Integração",
    duration: "4-18 semanas",
    description: "Limpeza, validação e estruturação dos dados para análise e desenvolvimento de modelos.",
    icon: Cog,
    tasks: [
      "Limpeza e validação de dados",
      "Desenvolvimento do modelo de dados",
      "Implementação de regras de segurança",
      "Criação de catálogos",
      "Garantia de qualidade"
    ]
  },
  {
    phase: "Fase 4",
    title: "Desenvolvimento de Aplicações",
    duration: "4-12 semanas",
    description: "Criação de dashboards, ferramentas analíticas e modelos de machine learning.",
    icon: Settings,
    tasks: [
      "Desenvolvimento de dashboards",
      "Ferramentas de análise espacial",
      "Modelos de simulação",
      "Machine learning",
      "APIs e interfaces"
    ]
  },
  {
    phase: "Fase 5", 
    title: "Teste e Lançamento",
    duration: "4-12 meses",
    description: "Testes extensivos, programa piloto e lançamento oficial da plataforma.",
    icon: Rocket,
    tasks: [
      "Testes internos completos",
      "Programa piloto",
      "Treinamento de usuários",
      "Documentação",
      "Lançamento oficial"
    ]
  },
  {
    phase: "Fase 6",
    title: "Operação e Evolução",
    duration: "Contínuo",
    description: "Operação diária, manutenção, suporte e desenvolvimento contínuo de novas funcionalidades.",
    icon: CheckCircle,
    tasks: [
      "Operação diária",
      "Monitoramento contínuo",
      "Suporte técnico",
      "Desenvolvimento contínuo",
      "Sustentabilidade financeira"
    ]
  }
];

const PhaseCard = ({ phase, index, totalPhases, scrollProgress }) => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: false
  });

  const Icon = phase.icon;

  // Calcular progresso da fase baseado no scroll
  const phaseThreshold = index / totalPhases;
  const nextPhaseThreshold = (index + 1) / totalPhases;
  
  const phaseProgress = Math.max(0, Math.min(1, 
    (scrollProgress - phaseThreshold) / (nextPhaseThreshold - phaseThreshold)
  ));
  
  const isActive = scrollProgress > phaseThreshold;
  const isCompleted = scrollProgress > nextPhaseThreshold;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      className={`relative flex items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'} mb-16`}
    >
      {/* Linha tracejada conectando círculo ao card */}
      <motion.div 
        className={`absolute top-10 z-0 border-t-2 border-dashed border-white/20 ${
          index % 2 === 0 
            ? 'right-1/2 w-40' 
            : 'left-1/2 w-40'
        }`}
        style={{
          transform: index % 2 === 0 ? 'translateX(-24px)' : 'translateX(24px)'
        }}
        animate={{
          opacity: isActive ? 1 : 0
        }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      />

      {/* Phase number circle */}
      <motion.div
        className={`absolute left-1/2 top-4 -ml-6 w-12 h-12 rounded-full flex items-center justify-center z-10 shadow-lg transition-all duration-500 ${
          isCompleted 
            ? 'bg-gradient-to-br from-ibi-green to-ibi-blue' 
            : isActive 
            ? 'bg-gradient-to-br from-ibi-green/70 to-ibi-blue/70' 
            : 'bg-gray-600'
        }`}
        animate={{
          scale: isCompleted ? 1.1 : isActive ? 1.05 : 1,
          boxShadow: isActive ? '0 0 20px rgba(0, 166, 82, 0.5)' : '0 4px 6px rgba(0, 0, 0, 0.1)'
        }}
        transition={{ duration: 0.3 }}
      >
        <motion.span 
          className={`font-bold transition-colors duration-300 ${
            isActive ? 'text-white' : 'text-gray-400'
          }`}
        >
          {index + 1}
        </motion.span>
      </motion.div>

      <div className={`w-full max-w-xl ${index % 2 === 0 ? 'mr-8' : 'ml-8'}`}>
        <motion.div
          whileHover={{ scale: 1.02 }}
          className={`bg-white/5 backdrop-blur-sm rounded-2xl p-6 border transition-all duration-500 hover:shadow-xl ${
            isActive 
              ? 'border-ibi-blue/70 shadow-lg shadow-ibi-blue/20' 
              : 'border-white/10 hover:border-ibi-blue/50'
          }`}
          animate={{
            boxShadow: isActive 
              ? '0 10px 40px rgba(0, 166, 82, 0.15), 0 4px 15px rgba(0, 153, 216, 0.1)' 
              : '0 4px 6px rgba(0, 0, 0, 0.1)'
          }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center mb-4">
            <div className="p-2 bg-gradient-to-br from-ibi-green/20 to-ibi-blue/20 rounded-lg mr-3">
              <Icon className="w-6 h-6 text-ibi-blue" />
            </div>
            <div>
              <div className="text-sm text-ibi-green font-medium">{phase.phase}</div>
              <div className="text-lg font-semibold text-white">{phase.title}</div>
            </div>
          </div>
          
          <div className="flex items-center text-gray-400 text-sm mb-4">
            <Calendar className="w-4 h-4 mr-1" />
            {phase.duration}
          </div>
          
          <p className="text-gray-400 text-sm mb-4 leading-relaxed">
            {phase.description}
          </p>
          
          <div className="space-y-2">
            {phase.tasks.map((task, taskIndex) => (
              <motion.div
                key={taskIndex}
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: (index * 0.2) + (taskIndex * 0.1) }}
                className="flex items-center text-gray-300 text-xs"
              >
                <div className="w-1 h-1 bg-ibi-blue rounded-full mr-2" />
                {task}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

const ImplementationSection = () => {
  const sectionRef = useRef(null);
  const timelineRef = useRef(null);
  const [modalContent, setModalContent] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentScrollProgress, setCurrentScrollProgress] = useState(0);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start center", "end center"]
  });

  // Progresso específico para a timeline
  const { scrollYProgress: timelineProgress } = useScroll({
    target: timelineRef,
    offset: ["start 0.8", "end 0.2"]
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const timelineHeight = useTransform(timelineProgress, [0, 1], ["0%", "100%"]);

  // Determinar estágio ativo baseado no scroll progress
  const getActiveStage = (progress) => {
    const totalPhases = phases.length;
    for (let i = 0; i < totalPhases; i++) {
      const phaseThreshold = i / totalPhases;
      const nextPhaseThreshold = (i + 1) / totalPhases;
      
      if (progress >= phaseThreshold && progress < nextPhaseThreshold) {
        return i;
      }
    }
    return totalPhases - 1; // último estágio se estiver no final
  };

  const activeStage = getActiveStage(currentScrollProgress);

  // Atualizar progresso do scroll
  useEffect(() => {
    const unsubscribe = timelineProgress.onChange((latest) => {
      setCurrentScrollProgress(latest);
    });
    return () => unsubscribe();
  }, [timelineProgress]);

  const openModal = (contentKey) => {
    const content = detailedContent[contentKey];
    if (content) {
      setModalContent(content);
      setIsModalOpen(true);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalContent(null);
  };

  return (
    <section ref={sectionRef} className="py-20 bg-gradient-to-b from-gray-900 to-ibi-dark relative overflow-hidden">
      <motion.div 
        className="absolute inset-0 opacity-5"
        style={{ y: backgroundY }}
      >
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-ibi-blue via-transparent to-transparent"></div>
      </motion.div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-ibi-green to-ibi-blue">
              Implementação e Sustentabilidade
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Um plano detalhado e estruturado para a criação do Observatório de Dados
          </p>
        </motion.div>

        <div className="relative" ref={timelineRef}>
          {/* Timeline central progressiva */}
          <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gray-600 transform -translate-x-1/2 z-0" />
          
          {/* Linha progressiva animada */}
          <motion.div
            className="absolute left-1/2 top-0 w-1 bg-gradient-to-b from-ibi-green to-ibi-blue transform -translate-x-1/2 z-1 shadow-sm"
            style={{
              height: timelineHeight,
              boxShadow: "0 0 15px rgba(0, 166, 82, 0.5)"
            }}
          >
            </motion.div>
            
            {/* Ícone de transporte na ponta da linha - muda conforme estágio ativo */}
            <motion.div
              className="absolute left-1/2 transform -translate-x-1/2 z-10 scale-50"
              style={{
                top: timelineHeight,
                marginTop: '-116px',
                filter: 'drop-shadow(0 4px 6px rgba(0, 0, 0, 0.3))'
              }}
            >
              <motion.img 
                key={activeStage} // Força re-render quando estágio muda
                src={transportImages[activeStage]} 
                alt={`Transport Stage ${activeStage + 1}`} 
                className="object-contain"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
              />
            </motion.div>

          {phases.map((phase, index) => (
            <PhaseCard 
              key={index} 
              phase={phase} 
              index={index} 
              totalPhases={phases.length}
              scrollProgress={currentScrollProgress}
            />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mt-40 text-center"
        >
          <div className="bg-gradient-to-r from-ibi-green/10 to-ibi-blue/10 rounded-2xl p-8 border border-white/10">
            <Users className="w-12 h-12 text-ibi-blue mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-white mb-4">
              Projeto Complexo, Impacto Transformador
            </h3>
            <p className="text-gray-400 max-w-2xl mx-auto mb-6">
              A implementação de um Observatório desta magnitude requer planejamento meticuloso 
              e compromisso de longo prazo, mas os resultados prometem revolucionar a 
              infraestrutura de transportes no Brasil.
            </p>

            {/* Botões para informações técnicas detalhadas */}
            <div className="flex flex-wrap justify-center gap-4 mt-8">
              <button
                onClick={() => openModal('requisitos')}
                className="bg-ibi-blue/20 hover:bg-ibi-blue/30 text-ibi-blue border border-ibi-blue/50 px-6 py-3 rounded-full transition-all duration-300 flex items-center gap-2 text-sm font-medium"
              >
                <Info className="w-4 h-4" />
                Requisitos Técnicos
              </button>
              
              <button
                onClick={() => openModal('seguranca')}
                className="bg-ibi-green/20 hover:bg-ibi-green/30 text-ibi-green border border-ibi-green/50 px-6 py-3 rounded-full transition-all duration-300 flex items-center gap-2 text-sm font-medium"
              >
                <Info className="w-4 h-4" />
                Segurança da Informação
              </button>
              
              <button
                onClick={() => openModal('apis')}
                className="bg-purple-500/20 hover:bg-purple-500/30 text-purple-400 border border-purple-500/50 px-6 py-3 rounded-full transition-all duration-300 flex items-center gap-2 text-sm font-medium"
              >
                <Info className="w-4 h-4" />
                APIs e Integração
              </button>

              <button
                onClick={() => openModal('metricas_sucesso')}
                className="bg-yellow-500/20 hover:bg-yellow-500/30 text-yellow-400 border border-yellow-500/50 px-6 py-3 rounded-full transition-all duration-300 flex items-center gap-2 text-sm font-medium"
              >
                <Info className="w-4 h-4" />
                Métricas de Sucesso
              </button>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Modal */}
      {modalContent && (
        <Modal
          isOpen={isModalOpen}
          onClose={closeModal}
          title={modalContent.title}
        >
          <div dangerouslySetInnerHTML={{ __html: modalContent.content }} />
        </Modal>
      )}
    </section>
  );
};

export default ImplementationSection;