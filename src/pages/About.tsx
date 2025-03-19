import { motion } from 'framer-motion';
import { Users, Trophy, Target, Heart, Github, Linkedin, Twitter, Mail } from 'lucide-react';
import Gopi from '../components/Assets/Gopi.jpg';
import Sudharsan from '../components/Assets/Sudharsan.jpg';
import Ruby from '../components/Assets/Ruby.jpeg';
const About = () => {
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
              About Irudium
            </h1>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              We are a passionate team of digital innovators, dedicated to transforming ideas into exceptional digital experiences.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-6"
            >
              <h2 className="text-3xl font-bold text-green-400">Our Story</h2>
              <p className="text-gray-300">
                Founded in 2023, Irudium emerged from a vision to bridge the gap between innovative ideas and technical excellence. 
                Our journey began with a small team of passionate developers and has grown into a full-service digital solutions provider.
              </p>
              <p className="text-gray-300">
                Today, we pride ourselves on delivering cutting-edge solutions across web development, UI/UX design, and technical consulting.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-6"
            >
              <h2 className="text-3xl font-bold text-green-400">Our Mission</h2>
              <p className="text-gray-300">
                To empower businesses and individuals with innovative digital solutions that drive growth and success. 
                We believe in creating technology that not only works flawlessly but also delights users and delivers real value.
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            <StatsCard
              icon={<Users className="w-8 h-8 text-green-400" />}
              number="50+"
              label="Happy Clients"
            />
            <StatsCard
              icon={<Trophy className="w-8 h-8 text-green-400" />}
              number="100+"
              label="Projects Completed"
            />
            <StatsCard
              icon={<Target className="w-8 h-8 text-green-400" />}
              number="95%"
              label="Success Rate"
            />
            <StatsCard
              icon={<Heart className="w-8 h-8 text-green-400" />}
              number="24/7"
              label="Support"
            />
          </div>

          <h2 className="text-3xl font-bold text-center text-green-400 mb-16">Meet Our Team</h2>

          <div className="space-y-32">
            <TeamMember
              name="G Sudharsan"
              role="Founder & CEO"
              image= {Sudharsan}
              description="John brings over 15 years of experience in software development and business leadership. His vision drives Irudium's innovation and growth strategy. With a background in both technical development and business management, he ensures that our solutions are not only technically excellent but also aligned with our clients' business goals."
              imageLeft={true}
              socials={{
                github: "https://github.com",
                linkedin: "https://linkedin.com",
                twitter: "https://twitter.com",
                email: "mailto:john@irudium.com"
              }}
            />

            <TeamMember
              name="GS"
              role="Founder & CTO"
              image= {Gopi}
              description="Jane is an award-winning designer with a passion for creating beautiful and functional user experiences. Her expertise in UI/UX design has helped shape numerous successful digital products. She leads our design team with a focus on user-centered design principles and innovative solutions that exceed client expectations."
              imageLeft={false}
              socials={{
                github: "https://github.com",
                linkedin: "https://linkedin.com",
                twitter: "https://twitter.com",
                email: "mailto:jane@irudium.com"
              }}
            />

            <TeamMember
              name="Ruby Shankar"
              role="Junior Developer"
              image= {Ruby}
              description="Mike is our technical mastermind, with deep expertise in full-stack development and system architecture. He leads our development team in creating robust, scalable solutions using cutting-edge technologies. His approach to problem-solving and technical innovation has been instrumental in delivering complex projects successfully."
              imageLeft={true}
              socials={{
                github: "https://github.com",
                linkedin: "https://linkedin.com",
                twitter: "https://twitter.com",
                email: "mailto:mike@irudium.com"
              }}
            />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mt-32 text-center"
          >
            <h2 className="text-3xl font-bold text-green-400 mb-8">Client Testimonials</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Testimonial
                text="Working with Irudium was a game-changer for our business. Their team's expertise and dedication delivered results beyond our expectations."
                author="Sarah Johnson"
                company="TechCorp CEO"
                image="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
              />
              <Testimonial
                text="The attention to detail and technical excellence shown by the Irudium team is outstanding. They truly care about their clients' success."
                author="Mark Williams"
                company="StartUp Founder"
                image="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
              />
              <Testimonial
                text="Irudium's innovative approach to problem-solving and their commitment to quality sets them apart in the industry."
                author="Emily Chen"
                company="Design Director"
                image="https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
              />
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

const StatsCard = ({ icon, number, label }: { icon: React.ReactNode; number: string; label: string }) => (
  <motion.div
    whileHover={{ y: -5 }}
    className="bg-black/50 backdrop-blur-sm p-6 rounded-xl border border-green-500/20 text-center"
  >
    <div className="flex justify-center mb-4">{icon}</div>
    <h3 className="text-3xl font-bold text-green-400 mb-2">{number}</h3>
    <p className="text-gray-400">{label}</p>
  </motion.div>
);

const TeamMember = ({ 
  name, 
  role, 
  image, 
  description,
  imageLeft,
  socials
}: { 
  name: string;
  role: string;
  image: string;
  description: string;
  imageLeft: boolean;
  socials: {
    github: string;
    linkedin: string;
    twitter: string;
    email: string;
  };
}) => {
  const contentOrder = imageLeft ? "md:order-2" : "md:order-1";
  const imageOrder = imageLeft ? "md:order-1" : "md:order-2";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center"
    >
      <div className={`space-y-4 ${contentOrder}`}>
        <h3 className="text-2xl font-bold text-white">{name}</h3>
        <p className="text-green-400 font-medium">{role}</p>
        <p className="text-gray-300">{description}</p>
        <div className="flex space-x-4">
          <a href={socials.github} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-green-400 transition-colors">
            <Github className="w-6 h-6" />
          </a>
          <a href={socials.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-green-400 transition-colors">
            <Linkedin className="w-6 h-6" />
          </a>
          <a href={socials.twitter} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-green-400 transition-colors">
            <Twitter className="w-6 h-6" />
          </a>
          <a href={socials.email} className="text-gray-400 hover:text-green-400 transition-colors">
            <Mail className="w-6 h-6" />
          </a>
        </div>
      </div>
      <motion.div 
        className={`relative group ${imageOrder}`}
        whileHover={{ scale: 1.02 }}
      >
        <img 
          src={image} 
          alt={name} 
          className="w-100 h-[600px]   rounded-xl"
        />
      </motion.div>
    </motion.div>
  );
};

const Testimonial = ({ text, author, company, image }: { text: string; author: string; company: string; image: string }) => (
  <motion.div
    whileHover={{ y: -5 }}
    className="bg-black/50 backdrop-blur-sm p-6 rounded-xl border border-green-500/20"
  >
    <div className="flex items-center space-x-4 mb-4">
      <img src={image} alt={author} className="w-12 h-12 rounded-full object-cover" />
      <div>
        <h4 className="text-white font-semibold">{author}</h4>
        <p className="text-green-400 text-sm">{company}</p>
      </div>
    </div>
    <p className="text-gray-300 italic">&ldquo;{text}&rdquo;</p>
  </motion.div>
);

export default About;