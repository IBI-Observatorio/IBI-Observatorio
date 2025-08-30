import { motion } from 'framer-motion';
import { ExternalLink, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-ibi-dark border-t border-white/10">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <img src="/logo.png" alt="IBI Logo" className="w-32 mb-4" />
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              Instituto Brasileiro de Infraestrutura - Transformando dados em 
              inteligência estratégica para a infraestrutura nacional.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-white font-semibold mb-4">Contato</h3>
            <div className="space-y-2 text-sm text-gray-400">
              <div className="flex items-center">
                <Mail className="w-4 h-4 mr-2" />
                contato@ibi.gov.br
              </div>
              <div className="flex items-center">
                <Phone className="w-4 h-4 mr-2" />
                +55 (61) 3543-4283
              </div>
              <div className="flex items-center">
                <MapPin className="w-4 h-4 mr-2" />
                Brasília, DF - Brasil
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className="text-white font-semibold mb-4">Links</h3>
            <div className="space-y-2">
              <a 
                href="https://portoseaeroportosfppa.com.br/ibi/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center text-sm text-gray-400 hover:text-ibi-blue transition-colors duration-200"
              >
                <ExternalLink className="w-4 h-4 mr-2" />
                Site Oficial IBI
              </a>
              <a 
                href="https://portoseaeroportosfppa.com.br/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center text-sm text-gray-400 hover:text-ibi-blue transition-colors duration-200"
              >
                <ExternalLink className="w-4 h-4 mr-2" />
                Frente Parlamentar
              </a>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-8 pt-8 border-t border-white/10 text-center"
        >
          <p className="text-gray-500 text-sm">
            © 2025 Instituto Brasileiro de Infraestrutura. Todos os direitos reservados.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;