import { motion } from 'framer-motion';
import { FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <motion.footer
      id="footer"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="footer"
    >
      <div className="footer-content">
        <div className="footer-section">
          <h4>Contact Us</h4>
          <p>123 Green Street</p>
          <p>Eco City, Earth 12345</p>
          <p>agahenv@gmail.com</p>
        </div>

        <div className="quick-links">
          <p><strong>Quick Links</strong></p>
          <p><Link to="/about">Our Team</Link></p>
          <p><Link to="/projects">Initiatives</Link></p>
        </div>

        <div className="footer-section">
          <h4>Follow Us</h4>
          <div className="social-icons">
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaLinkedin /></a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2025 Green Klan. All rights reserved.</p>
      </div>
    </motion.footer>
  );
}
