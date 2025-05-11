import React, { useEffect, useRef } from 'react';
import { useLanguage } from '../context/LanguageContext';
import './ServiceCard.css';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  image: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon, image }) => {
  const { translate } = useLanguage();
  const cardRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          cardRef.current?.classList.add('visible');
        }
      },
      { threshold: 0.1 }
    );
    
    if (cardRef.current) {
      observer.observe(cardRef.current);
    }
    
    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);
  
  return (
    <div className="service-card fade-in" ref={cardRef}>
      <div className="service-image">
        <img src={image} alt={title} />
        <div className="service-overlay">
          <div className="service-icon">{icon}</div>
        </div>
      </div>
      <div className="service-content">
        <h3 className="service-title">{translate(title)}</h3>
        <p className="service-description">{description}</p>
        <button className="service-button">{translate('bookNow')}</button>
      </div>
    </div>
  );
};

export default ServiceCard;