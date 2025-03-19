import { motion } from 'framer-motion';
import { Palette, Code, Monitor, Cpu, Layers, Shield, Cloud, PenTool as Tool } from 'lucide-react';

const Services = () => {
  return (
    <div className="pt-20">
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-green-300 to-green-500 text-transparent bg-clip-text">
              Our Services
            </h1>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              We offer a comprehensive range of digital solutions to help your business thrive in the modern world.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard
              icon={<Palette />}
              title="UI/UX Design"
              description="Create intuitive and engaging user experiences with our expert design team. We focus on user-centered design principles to ensure your digital products are both beautiful and functional."
              features={[
                "User Research",
                "Wireframing",
                "Prototyping",
                "Visual Design",
                "Usability Testing"
              ]}
            />

            <ServiceCard
              icon={<Code />}
              title="Web Development"
              description="Build powerful and scalable web applications using modern technologies and best practices. We create responsive websites that work flawlessly across all devices."
              features={[
                "Frontend Development",
                "Responsive Design",
                "Performance Optimization",
                "SEO Integration",
                "Web Accessibility"
              ]}
            />

            <ServiceCard
              icon={<Monitor />}
              title="Full-Stack Development"
              description="End-to-end development solutions for complex digital products. We handle everything from database design to user interface implementation."
              features={[
                "Backend Development",
                "API Development",
                "Database Design",
                "System Architecture",
                "Cloud Integration"
              ]}
            />

            <ServiceCard
              icon={<Cpu />}
              title="PC Building & Setup"
              description="Custom PC building services tailored to your specific needs, whether for gaming, content creation, or professional work."
              features={[
                "Custom PC Assembly",
                "Hardware Selection",
                "Performance Testing",
                "Cable Management",
                "System Optimization"
              ]}
            />

            <ServiceCard
              icon={<Cloud />}
              title="Cloud Solutions"
              description="Leverage the power of cloud computing with our expert cloud infrastructure and deployment services."
              features={[
                "Cloud Migration",
                "Infrastructure Setup",
                "Scalability Planning",
                "Security Configuration",
                "Performance Monitoring"
              ]}
            />

            <ServiceCard
              icon={<Shield />}
              title="Security Services"
              description="Protect your digital assets with our comprehensive security solutions and best practices implementation."
              features={[
                "Security Audits",
                "Vulnerability Testing",
                "Security Implementation",
                "Monitoring Setup",
                "Incident Response"
              ]}
            />
          </div>
        </div>
      </section>
    </div>
  );
};

const ServiceCard = ({ 
  icon, 
  title, 
  description, 
  features 
}: { 
  icon: React.ReactNode; 
  title: string; 
  description: string;
  features: string[];
}) => (
  <motion.div
    whileHover={{ y: -5 }}
    className="bg-black/50 backdrop-blur-sm p-6 rounded-xl border border-green-500/20"
  >
    <div className="text-green-400 mb-4">{icon}</div>
    <h3 className="text-xl font-semibold text-white mb-3">{title}</h3>
    <p className="text-gray-400 mb-4">{description}</p>
    <ul className="space-y-2">
      {features.map((feature, index) => (
        <li key={index} className="flex items-center text-gray-300">
          <div className="w-1.5 h-1.5 bg-green-400 rounded-full mr-2" />
          {feature}
        </li>
      ))}
    </ul>
  </motion.div>
);

export default Services;