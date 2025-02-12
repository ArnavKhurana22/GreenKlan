import { motion } from 'framer-motion';
import abhishekImg from '../assets/abhishek.png';
import gauravImg from '../assets/gaurav.png';
import arnavImg from '../assets/arnav.png';
import himajaImg from '../assets/himaja.jpg';

const founders = [
  {
    name: "Abhishek Ray",
    role: "Executive Director",
    bio: "Environmental scientist with 10+ years in conservation projects. Spearheaded reforestation initiatives across 15 countries.",
    image: abhishekImg
  },
  {
    name: "Gaurav Bhardwaj",
    role: "Program Manager",
    bio: "Community engagement specialist focused on urban sustainability. Founder of Green Cities Initiative.",
    image: gauravImg
  },
  {
    name: "Arnav Khurana",
    role: "Technical Director",
    bio: "Renewable energy expert with background in sustainable architecture. Developed award-winning carbon tracking systems.",
    image: arnavImg
  },
  {
    name: "Himaja Mullapudi",
    role: "Outreach Coordinator",
    bio: "Environmental educator and activist. Organized youth climate strikes reaching 500k+ participants globally.",
    image: himajaImg
  }
];

export default function About() {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="about-page"
    >
      <section className="founders-section">
        <h1 className="section-title">Meet Our Founders</h1>
        <div className="founders-grid">
          {founders.map((founder, index) => (
            <motion.article
              key={index}
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: index * 0.2 }}
              className="founder-card"
            >
              <img 
                src={founder.image} 
                alt={founder.name}
                className="founder-image"
              />
              <h3>{founder.name}</h3>
              <p className="role">{founder.role}</p>
              <p className="bio">{founder.bio}</p>
            </motion.article>
          ))}
        </div>
      </section>
    </motion.main>
  );
}
