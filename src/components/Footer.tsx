import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';
import './Footer.css';

const Footer: React.FC = () => {
  const { translate } = useLanguage();
  
  return (
    <footer className="footer">
      <div className="footer-waves">
        <div className="wave wave1"></div>
        <div className="wave wave2"></div>
        <div className="wave wave3"></div>
      </div>
      
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3 className="footer-title">SNEHA</h3>
            <p className="footer-description">
              {translate('aboutUsDescription')}
            </p>
            <div className="footer-social">
              <a href="#" className="social-link">
                <Facebook size={18} />
              </a>
              <a href="#" className="social-link">
                <Instagram size={18} />
              </a>
              <a href="#" className="social-link">
                <Twitter size={18} />
              </a>
            </div>
          </div>
          
          <div className="footer-section">
            <h3 className="footer-title">{translate('ourServices')}</h3>
            <ul className="footer-links">
              <li><a href="#">{translate('facial')}</a></li>
              <li><a href="#">{translate('manicure')}</a></li>
              <li><a href="#">{translate('mehendi')}</a></li>
              <li><a href="#">{translate('hairStyles')}</a></li>
              <li><a href="#">{translate('makeup')}</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h3 className="footer-title">{translate('contactUs')}</h3>
            <div className="contact-info">
              <div className="contact-item">
                <MapPin size={16} />
                <span>3rd Road,Dwaraka Nagar,Eluru</span>
              </div>
              <div className="contact-item">
                <Phone size={16} />
                <span>8978703629</span>
              </div>
              <div className="contact-item">
                <Mail size={16} />
                <span>snehabeautyparlour@gmail.com</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p className="copyright">{translate('copyright')}</p>
          <p className="ladies-only">ONLY FOR LADIES</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;