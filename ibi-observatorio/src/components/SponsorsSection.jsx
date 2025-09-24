import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useState } from 'react'
import { Handshake } from 'lucide-react'

const sponsors = [
  {
    name: 'Maersk',
    logo: '/brands/maersk-logo.png',
    website: 'https://www.maersk.com/local-information/brazil',
  },
  {
    name: 'APM Terminals',
    logo: '/brands/apm-terminals-logo.png',
    website: 'https://www.apmterminals.com/pt/brazil',
  },
]

function SponsorsSection() {
  const [hoveredIndex, setHoveredIndex] = useState(null)
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  })

  return (
    <section className="py-20 bg-gradient-to-b from-gray-900 to-ibi-dark relative overflow-hidden">
      <motion.div
        className="absolute inset-0 opacity-5"
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
              Apoiadores
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Empresas que apoiam o desenvolvimento do Observatório de Dados do IBI
          </p>
        </motion.div>

        <div ref={ref} className="flex flex-wrap justify-center items-center gap-12 md:gap-20 mb-16">
          {sponsors.map((sponsor, index) => (
            <motion.a
              key={sponsor.name}
              href={sponsor.website}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ scale: 1.05 }}
              className="relative group bg-white/5 backdrop-blur-sm rounded-2xl px-8 py-4 md:px-10 md:py-5 border border-white/10 hover:border-ibi-blue/50 transition-all duration-300 hover:shadow-2xl hover:shadow-ibi-blue/20"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="relative w-48 h-20 md:w-56 md:h-24 flex items-center justify-center">
                <img
                  src={sponsor.logo}
                  alt={`${sponsor.name} logo`}
                  className={`max-w-full max-h-full object-contain transition-all duration-500 ${
                    hoveredIndex === index
                      ? 'opacity-100'
                      : 'opacity-90'
                  }`}
                  style={{
                    filter: hoveredIndex === index
                      ? 'none'
                      : sponsor.name === 'Maersk'
                      ? 'contrast(10) brightness(3) grayscale(1) invert(1)'
                      : 'brightness(0) invert(1)',
                  }}
                />
              </div>
              <motion.div
                className="absolute inset-0 bg-gradient-to-t from-ibi-blue/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"
                animate={{
                  boxShadow: hoveredIndex === index
                    ? '0 10px 40px rgba(0, 166, 82, 0.15), 0 4px 15px rgba(0, 153, 216, 0.1)'
                    : '0 4px 6px rgba(0, 0, 0, 0.1)'
                }}
              />
            </motion.a>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-ibi-green/10 to-ibi-blue/10 rounded-2xl p-6 border border-white/10 max-w-2xl mx-auto">
            <div className="flex items-center justify-center gap-3 mb-3">
              <Handshake className="w-8 h-8 text-ibi-blue" />
              <h3 className="text-xl font-bold text-white">
                Seja um Apoiador
              </h3>
            </div>
            <p className="text-gray-400 text-center">
              Junte-se a nós na transformação da infraestrutura de transportes do Brasil.
              Entre em contato para saber como sua empresa pode apoiar este projeto inovador.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default SponsorsSection