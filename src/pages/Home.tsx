import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import ServiceCard from '../components/ServiceCard';
import ProductCard from '../components/ProductCard';
import { Scissors, Smile, Star, Heart, Calendar, Gift } from 'lucide-react';
import './Home.css';

const Home: React.FC = () => {
  const { translate } = useLanguage();
  const navigate = useNavigate();
  const heroRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll('.fade-in');
      elements.forEach((element) => {
        const rect = element.getBoundingClientRect();
        const isVisible = rect.top <= window.innerHeight * 0.8;
        
        if (isVisible) {
          element.classList.add('visible');
        }
      });
      
      if (heroRef.current) {
        const scrollValue = window.scrollY;
        heroRef.current.style.backgroundPositionY = `${scrollValue * 0.5}px`;
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  const services = [
    {
      title: 'facial',
      description: 'Our facials deeply cleanse, exfoliate, and rejuvenate your skin for a radiant glow.',
      icon: <Smile size={24} />,
      image: 'https://media.istockphoto.com/id/921797424/photo/woman-in-mask-on-face-in-spa-beauty-salon.jpg?s=612x612&w=0&k=20&c=gGSPZOjIS2wcwQyOcjANOKpRVU0KR_iEDbRACnAoIXA='
    },
    {
      title: 'manicure',
      description: 'Pamper your hands with our luxurious manicure treatments using premium products.',
      icon: <Star size={24} />,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAdODBdbxIFhvnwzu3bK1X42EmW9CkgVSLXQ&s'
    },
    {
      title: 'hairStyles',
      description: 'Transform your look with trending hairstyles crafted by our expert stylists.',
      icon: <Scissors size={24} />,
      image: 'https://i.ytimg.com/vi/6rWFK9RxKKY/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLAQDTlHNrxNEWYPd8iI3BD18xuIpg'
    },
    {
      title: 'makeup',
      description: 'Enhance your natural beauty with our professional makeup services for any occasion.',
      icon: <Heart size={24} />,
      image: 'https://naomisheadmasters.com/wp-content/uploads/2023/12/Makeup-Artist-In-Zirakpur.jpg'
    }
  ];
  
  const products = [
    {
      name: 'Face Care Collection',
      image: 'https://m.media-amazon.com/images/I/71tH0J6yEvL._AC_UF1000,1000_QL80_.jpg',
      description: 'Complete range of face care products for all skin types.'
    },
    {
      name: 'Hair Care Essentials',
      image: 'https://media.istockphoto.com/id/1012364510/photo/set-of-hair-care-products.jpg?s=612x612&w=0&k=20&c=C_sHvH0fR7f7BWFLC447rsjQIhLdSy7cmh07SzUEHV8=',
      description: 'Premium hair care products for healthy and beautiful hair.'
    },
    {
      name: 'Makeup Collection',
      image: 'https://media.allure.com/photos/5f4566212ac4a97bd9d2f67c/16:9/w_2560%2Cc_limit/Barbie%2520Collection%2520Shot%2520HERO%2520SHOT.jpg',
      description: 'Professional makeup products for every occasion.'
    }
  ];
  
  return (
    <div className="home">
      <div className="hero" ref={heroRef}>
        <div className="hero-content container">
          <h1 className="hero-title animate-fade-in">{translate('welcomeHeading')}</h1>
          <p className="hero-subtitle animate-slide-up">{translate('welcomeSubheading')}</p>
          <div className="hero-buttons animate-slide-up">
            <button 
              className="btn btn-primary"
              onClick={() => navigate('/booking')}
            >
              {translate('bookNow')}
            </button>
            <button 
              className="btn btn-secondary"
              onClick={() => navigate('/services')}
            >
              {translate('exploreServices')}
            </button>
          </div>
          
          <div className="hero-features animate-slide-up">
            <div className="hero-feature">
              <div className="feature-icon">
                <Scissors size={20} />
              </div>
              <span>{translate('hairStyles')}</span>
            </div>
            <div className="hero-feature">
              <div className="feature-icon">
                <Gift size={20} />
              </div>
              <span>{translate('facial')}</span>
            </div>
            <div className="hero-feature">
              <div className="feature-icon">
                <Calendar size={20} />
              </div>
              <span>{translate('makeup')}</span>
            </div>
          </div>
        </div>
        <div className="hero-overlay"></div>
        <div className="hero-wave"></div>
      </div>
      
      <section className="about section">
        <div className="container">
          <div className="about-content">
            <div className="about-image fade-in">
              <img src="https://images.pexels.com/photos/3738349/pexels-photo-3738349.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="About Sneha Beauty Parlour" />
              <div className="experience-badge">
                <span className="years">20+</span>
                <span className="text">Years Experience</span>
              </div>
            </div>
            
            <div className="about-text fade-in">
              <h2 className="section-title">{translate('aboutUs')}</h2>
              <p className="telugu">
                స్నేహ బ్యూటీ పార్లర్ అనేది మహిళలకు సంపూర్ణ అందాన్ని అందించడానికి అంకితమైన ప్రీమియం బ్యూటీ పార్లర్. మా ప్రొఫెషనల్ బ్యూటీషియన్ D.S.N. మల్లేశ్వరి 20 సంవత్సరాల అనుభవంతో ప్రభుత్వ సర్టిఫైడ్ బ్యూటీషియన్.
              </p>
              <p>
                {translate('aboutUsDescription')}
              </p>
              
              <div className="about-features">
                <div className="about-feature fade-in">
                  <div className="feature-icon">
                    <Star size={20} />
                  </div>
                  <div className="feature-text">
                    <h4>Government Certified</h4>
                    <p>Professional certified beautician with 20 years experience</p>
                  </div>
                </div>
                
                <div className="about-feature fade-in">
                  <div className="feature-icon">
                    <Smile size={20} />
                  </div>
                  <div className="feature-text">
                    <h4>Home Service Available</h4>
                    <p>Convenient beauty services at your doorstep</p>
                  </div>
                </div>
              </div>
              
              <button 
                className="btn btn-primary"
                onClick={() => navigate('/contact')}
              >
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </section>
      
      <section className="services section">
        <div className="container">
          <h2 className="section-title">{translate('ourServices')}</h2>
          
          <div className="services-grid grid grid-4">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                title={service.title}
                description={service.description}
                icon={service.icon}
                image={service.image}
              />
            ))}
          </div>
          
          <div className="view-all text-center">
            <button 
              className="btn btn-secondary"
              onClick={() => navigate('/services')}
            >
              View All Services
            </button>
          </div>
        </div>
      </section>
      
      <section className="products section">
        <div className="container">
          <h2 className="section-title">{translate('latestProducts')}</h2>
          
          <div className="products-grid grid grid-3">
            {products.map((product, index) => (
              <ProductCard
                key={index}
                name={product.name}
                image={product.image}
                description={product.description}
              />
            ))}
          </div>
          
          <div className="view-all text-center">
            <button 
              className="btn btn-secondary"
              onClick={() => navigate('/products')}
            >
              View All Products
            </button>
          </div>
        </div>
      </section>
      
      <section className="cta section">
        <div className="container">
          <div className="cta-content">
            <h2 className="cta-title ">Book Your Appointment</h2>
            <p className="cta-text">Experience our professional beauty services</p>
            <button 
              className="btn btn-primary"
              onClick={() => navigate('/booking')}
            >
              Book Appointment
            </button>
          </div>
        </div>
        <div className="particles-container">
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
        </div>
      </section>
    </div>
  );
};

export default Home;