import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { Menu, X, Phone, Sparkles } from 'lucide-react';
import logoIcon from './logo.png';
import './Header.css';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { translate, language, setLanguage } = useLanguage();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    document.addEventListener('scroll', handleScroll);
    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const toggleLanguage = () => {
    setLanguage(language === 'telugu' ? 'english' : 'telugu');
  };

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <div className="container header-container">
      <div className="logo-container">
      <Link to="/" className="logo">
  <span className="logo-icon">
    <img src={logoIcon} alt="Logo Icon" />
  </span>
  <div>
    <span className="logo-text">SNEHA</span>
    <span className="logo-subtext">BEAUTY PARLOUR</span>
  </div>
</Link>

</div>


        <div className="contact-info">
          <Phone size={16} />
          <span>8978703629</span>
        </div>

        <button className="language-toggle" onClick={toggleLanguage}>
          {language === 'telugu' ? 'English' : 'తెలుగు'}
        </button>

        <nav className={`navigation ${isOpen ? 'active' : ''}`}>
          <button className="close-menu" onClick={toggleMenu}>
            <X size={24} />
          </button>
          <ul className="nav-links">
            <li className={location.pathname === '/' ? 'active' : ''}>
              <Link to="/" onClick={closeMenu}>{translate('home')}</Link>
            </li>
            <li className={location.pathname === '/services' ? 'active' : ''}>
              <Link to="/services" onClick={closeMenu}>{translate('services')}</Link>
            </li>
            <li className={location.pathname === '/gallery' ? 'active' : ''}>
              <Link to="/gallery" onClick={closeMenu}>{translate('gallery')}</Link>
            </li>
            <li className={location.pathname === '/products' ? 'active' : ''}>
              <Link to="/products" onClick={closeMenu}>{translate('products')}</Link>
            </li>
            <li className={location.pathname === '/contact' ? 'active' : ''}>
              <Link to="/contact" onClick={closeMenu}>{translate('contact')}</Link>
            </li>
            <li className={location.pathname === '/booking' ? 'active' : ''}>
              <Link to="/booking" onClick={closeMenu} className="booking-link">
                {translate('booking')}
              </Link>
            </li>
          </ul>
        </nav>

        <button className="menu-toggle" onClick={toggleMenu}>
          <Menu size={24} />
        </button>
      </div>
    </header>
  );
};

export default Header;
