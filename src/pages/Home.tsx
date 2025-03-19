import { motion } from 'framer-motion';
import { Code, Monitor, Cpu, Palette } from 'lucide-react';
import ParticlesBackground from '../components/ParticlesBackground';

const Home = () => {
  return (
    <div className="relative min-h-screen">
      <div className="absolute inset-0 z-0">
        <ParticlesBackground />
      </div>
      
      <div className="relative z-10">
        {/* Hero Section */}
        <section className="min-h-screen flex items-center justify-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-green-300 via-green-400 to-green-500 text-transparent bg-clip-text">
              Welcome to Irudium
            </h1>
            <p className="text-gray-300 text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
              Transforming ideas into digital excellence through innovative solutions
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-green-400 to-green-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:shadow-lg transition-all duration-300"
            >
              Get Started
            </motion.button>
          </motion.div>
        </section>

        {/* Services Preview */}
        <section className="py-20 px-4 bg-black/80">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-green-300 to-green-500 text-transparent bg-clip-text">
              Our Expertise
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <ServiceCard
                icon={<Palette className="w-8 h-8 text-green-400" />}
                title="UI/UX Design"
                description="Creating intuitive and engaging user experiences that delight your customers"
              />
              <ServiceCard
                icon={<Code className="w-8 h-8 text-green-400" />}
                title="Web Development"
                description="Building responsive and scalable web applications using cutting-edge technologies"
              />
              <ServiceCard
                icon={<Monitor className="w-8 h-8 text-green-400" />}
                title="Full-Stack Development"
                description="End-to-end development solutions for your digital products"
              />
              <ServiceCard
                icon={<Cpu className="w-8 h-8 text-green-400" />}
                title="PC Building & Setup"
                description="Custom PC building and professional software installation services"
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

const ServiceCard = ({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) => (
  <motion.div
    whileHover={{ y: -10 }}
    className="bg-black/50 backdrop-blur-sm p-6 rounded-xl border border-green-500/20"
  >
    <div className="mb-4">{icon}</div>
    <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
    <p className="text-gray-400">{description}</p>
  </motion.div>
);

export default Home;