import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';
import logo from '../assets/tryLogo2.png';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [visible, setVisible] = useState(true);
  const [prevScrollY, setPrevScrollY] = useState(0);
  const [hideNavbar, setHideNavbar] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setVisible(prevScrollY > currentScrollY || currentScrollY < 10);

      if (hideNavbar) {
        setHideNavbar(false);
      }

      setPrevScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollY, hideNavbar]);

  const handleContactClick = async (event) => {
    event.preventDefault();

    if (location.pathname !== '/') {
      navigate('/');
      await new Promise((resolve) => setTimeout(resolve, 500));
    }

    setHideNavbar(true);
    setTimeout(() => {
      document.getElementById('footer').scrollIntoView({ behavior: 'smooth' });
    }, 300);
  };

  return (
    <AnimatePresence>
      {!hideNavbar && (
        <motion.nav
          initial={{ opacity: 1 }}
          animate={{ opacity: visible ? 1 : 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }} // Instant reappear, smooth hide
          className="navbar"
        >
          <div className="nav-container">
            <Link to="/" className="logo">
              <img src={logo} alt="Logo" className="logo-img" />
            </Link>

            <span className="brand-name">GreenKlan</span>

            <button className="mobile-menu-btn" onClick={() => setMenuOpen(!menuOpen)}>
              {menuOpen ? <FiX /> : <FiMenu />}
            </button>

            <div className={`nav-links ${menuOpen ? "active" : ""}`}>
              <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
              <Link to="/about" onClick={() => setMenuOpen(false)}>About</Link>
              <Link to="/projects" onClick={() => setMenuOpen(false)}>Projects</Link>
              <button className="contact-link" onClick={handleContactClick}>
                Contact
              </button>
            </div>
          </div>
        </motion.nav>
      )}
    </AnimatePresence>
  );
}
