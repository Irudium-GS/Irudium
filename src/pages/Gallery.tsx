import { motion } from 'framer-motion';

const Gallery = () => {
  const projects = [
    {
      title: "E-commerce Platform",
      category: "Web Development",
      image: "https://images.unsplash.com/photo-1557821552-17105176677c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      description: "Modern e-commerce solution with advanced features"
    },
    {
      title: "Finance Dashboard",
      category: "UI/UX Design",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      description: "Intuitive financial management interface"
    },
    {
      title: "Social Media App",
      category: "Full-Stack Development",
      image: "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      description: "Feature-rich social networking platform"
    },
    {
      title: "Gaming PC Build",
      category: "PC Building",
      image: "https://images.unsplash.com/photo-1587202372634-32705e3bf49c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      description: "High-performance gaming computer setup"
    },
    {
      title: "Healthcare Portal",
      category: "Web Development",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      description: "Patient management system"
    },
    {
      title: "Mobile Banking App",
      category: "UI/UX Design",
      image: "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      description: "Secure and user-friendly banking application"
    }
  ];

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
              Our Work
            </h1>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Explore our portfolio of successful projects and digital solutions.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <ProjectCard key={index} {...project} index={index} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

const ProjectCard = ({ 
  title, 
  category, 
  image, 
  description, 
  index 
}: { 
  title: string; 
  category: string; 
  image: string; 
  description: string;
  index: number;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    whileHover={{ y: -5 }}
    className="bg-black/50 backdrop-blur-sm rounded-xl overflow-hidden border border-green-500/20"
  >
    <div className="relative h-48 overflow-hidden">
      <img 
        src={image} 
        alt={title} 
        className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
      />
      <div className="absolute top-4 left-4 bg-green-500 text-black px-3 py-1 rounded-full text-sm font-medium">
        {category}
      </div>
    </div>
    <div className="p-6">
      <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </div>
  </motion.div>
);

export default Gallery;