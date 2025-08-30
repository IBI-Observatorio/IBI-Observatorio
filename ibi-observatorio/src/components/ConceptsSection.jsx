import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Database, TrendingUp, Target, BarChart3, Brain, Shield, Info } from 'lucide-react';
import { useState } from 'react';
import ParallaxSection from './ParallaxSection';
import Modal from './Modal';
import { detailedContent } from '../data/detailedContent';

const concepts = [
  {
    icon: Database,
    title: "Modelagem Avançada",
    description: "Representação matemática e lógica de sistemas logísticos complexos com simulação de eventos discretos e modelagem baseada em agentes.",
    detailKey: "modelagem"
  },
  {
    icon: TrendingUp,
    title: "Análise de Cenários",
    description: "Simulação de múltiplos cenários para projeções futuras, incluindo crescimento econômico, mudanças regulatórias e eventos climáticos.",
    detailKey: "cenarios"
  },
  {
    icon: Target,
    title: "Métricas de Desempenho",
    description: "Indicadores quantitativos para avaliar eficiência, eficácia e robustez do sistema de infraestrutura de transportes.",
    detailKey: "metricas"
  },
  {
    icon: BarChart3,
    title: "Análise de Sensibilidade",
    description: "Identificação de fatores críticos e quantificação de riscos associados a incertezas operacionais.",
    detailKey: "analiseRisco"
  },
  {
    icon: Brain,
    title: "Inteligência Artificial",
    description: "Aplicação de IA e machine learning para otimização de processos e análise preditiva de grandes volumes de dados.",
    detailKey: "otimizacao"
  },
  {
    icon: Shield,
    title: "Segurança da Informação",
    description: "Implementação de controles robustos de segurança em conformidade com LGPD e normas internacionais.",
    detailKey: "seguranca"
  }
];

const ConceptCard = ({ concept, index, onOpenModal }) => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const Icon = concept.icon;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-ibi-blue/50 transition-all duration-300 hover:shadow-2xl hover:shadow-ibi-blue/20 group relative"
    >
      {/* Botão de informações */}
      <button
        onClick={() => onOpenModal(concept.detailKey)}
        className="absolute top-4 right-4 p-2 text-gray-400 hover:text-ibi-blue transition-colors duration-200 hover:bg-white/10 rounded-full opacity-0 group-hover:opacity-100"
        title="Ver detalhes"
      >
        <Info className="w-5 h-5" />
      </button>

      <div className="mb-4 p-3 bg-gradient-to-br from-ibi-green/20 to-ibi-blue/20 rounded-lg inline-block group-hover:scale-110 transition-transform duration-300">
        <Icon className="w-8 h-8 text-ibi-blue" />
      </div>
      <h3 className="text-xl font-semibold text-white mb-3">{concept.title}</h3>
      <p className="text-gray-400 leading-relaxed mb-4">{concept.description}</p>
      
      {/* Link "Saiba mais" */}
      <button
        onClick={() => onOpenModal(concept.detailKey)}
        className="text-ibi-blue hover:text-ibi-green transition-colors duration-200 text-sm font-medium"
      >
        Saiba mais →
      </button>
    </motion.div>
  );
};

const ConceptsSection = () => {
  const [modalContent, setModalContent] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (detailKey) => {
    const content = detailedContent[detailKey];
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
    <section id="conceitos-fundamentais" className="py-20 bg-gradient-to-b from-gray-900 to-ibi-dark relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <ParallaxSection offset={30}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-ibi-green to-ibi-blue">
                Conceitos Fundamentais
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Tecnologias e metodologias avançadas para transformar a infraestrutura de transportes
            </p>
          </motion.div>
        </ParallaxSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {concepts.map((concept, index) => (
            <ConceptCard key={index} concept={concept} index={index} onOpenModal={openModal} />
          ))}
        </div>
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

export default ConceptsSection;