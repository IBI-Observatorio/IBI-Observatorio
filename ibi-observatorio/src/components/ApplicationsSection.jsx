import { motion, useScroll, useTransform, useMotionValue, animate } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useRef, useEffect, useState } from 'react';
import { 
  Route, 
  Building2, 
  TrendingUp, 
  Eye, 
  Shield, 
  Users,
  DollarSign,
  Zap,
  MapPin,
  Lock,
  Leaf,
  Wrench
} from 'lucide-react';

const applications = [
  {
    title: "Priorização de Projetos",
    description: "Análises baseadas em evidências para classificar investimentos usando critérios objetivos como retorno socioeconômico e impacto na redução de custos logísticos.",
    icon: TrendingUp,
    color: "from-blue-500 to-cyan-500"
  },
  {
    title: "Modelagem de Concessões",
    description: "Simulações para estruturação de PPPs, análise de viabilidade econômica e previsão de retorno sobre investimentos em infraestrutura.",
    icon: Building2,
    color: "from-green-500 to-emerald-500"
  },
  {
    title: "Monitoramento Contínuo",
    description: "Acompanhamento em tempo real do desempenho da infraestrutura, identificando gargalos e áreas que requerem investimentos.",
    icon: Eye,
    color: "from-purple-500 to-pink-500"
  },
  {
    title: "Análise Preditiva",
    description: "Machine learning para prever tendências de demanda e antecipar necessidades de manutenção na rede de transportes.",
    icon: Route,
    color: "from-orange-500 to-red-500"
  },
  {
    title: "Transparência",
    description: "Disponibilização de dados agregados para sociedade civil, aumentando a transparência nos processos de planejamento.",
    icon: Users,
    color: "from-indigo-500 to-blue-500"
  },
  {
    title: "Inteligência Artificial",
    description: "Otimização de processos de análise de grandes volumes de dados e desenvolvimento de sistemas de suporte à decisão.",
    icon: Zap,
    color: "from-yellow-500 to-orange-500"
  }
];

const impacts = [
  { icon: DollarSign, title: "Redução de Custos Logísticos", value: 30 },
  { icon: Zap, title: "Aumento de Eficiência", value: 45 },
  { icon: MapPin, title: "Melhoria de Conectividade", value: 60 },
  { icon: Lock, title: "Aumento de Segurança", value: 50 },
  { icon: Leaf, title: "Sustentabilidade Ambiental", value: 40 },
  { icon: Wrench, title: "Otimização de Manutenção", value: 35 }
];

const AnimatedCounter = ({ value, inView }) => {
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (inView) {
      const controls = animate(0, value, { 
        duration: 2,
        ease: "easeOut",
        onUpdate: (latest) => {
          setDisplayValue(Math.round(latest));
        }
      });
      return controls.stop;
    }
  }, [inView, value]);

  return (
    <motion.div className="text-3xl font-bold text-ibi-blue mb-1">
      {displayValue}%
    </motion.div>
  );
};

const ApplicationsSection = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const scrollRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ["start end", "end start"]
  });

  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8]);

  return (
    <section ref={scrollRef} className="py-20 bg-gradient-to-b from-ibi-dark to-gray-900 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-ibi-blue to-ibi-green">
              Aplicações e Relevância
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Transformando a infraestrutura de transportes através de dados e inteligência
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {applications.map((app, index) => {
            const Icon = app.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl blur-xl"
                     style={{ backgroundImage: `linear-gradient(to right, var(--tw-gradient-stops))` }}
                >
                  <div className={`absolute inset-0 bg-gradient-to-r ${app.color}`}></div>
                </div>
                <div className="relative bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-white/30 transition-all duration-300">
                  <div className={`mb-4 p-3 bg-gradient-to-br ${app.color} rounded-lg inline-block`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{app.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{app.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          ref={ref}
          style={{ scale }}
          className="bg-gradient-to-r from-ibi-green/10 to-ibi-blue/10 rounded-3xl p-12 border border-white/10"
        >
          <h3 className="text-3xl font-bold text-center text-white mb-12">
            Impactos Tangíveis na Infraestrutura Nacional
          </h3>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {impacts.map((impact, index) => {
              const Icon = impact.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="mb-3 mx-auto w-16 h-16 bg-gradient-to-br from-ibi-green to-ibi-blue rounded-full flex items-center justify-center">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <AnimatedCounter value={impact.value} inView={inView} />
                  <div className="text-xs text-gray-400">{impact.title}</div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ApplicationsSection;