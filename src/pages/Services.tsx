import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { ChevronDown, Clock, Star, Shield, Check, Calendar } from 'lucide-react';
import './Services.css';

interface Service {
  id: number;
  title: string;
  titleKey: string;
  description: string;
  image: string;
  price: number;
  oldPrice?: number;
  time: number;
  category: string;
  specialOffer?: boolean;
}

interface Package {
  id: number;
  name: string;
  nameKey: string;
  price: number;
  popular: boolean;
  services: string[];
}

interface FAQ {
  id: number;
  question: string;
  questionKey: string;
  answer: string;
  open?: boolean;
}


const Services: React.FC = () => {
  const { translate, language } = useLanguage();
  const navigate = useNavigate();
  const [activeFilter, setActiveFilter] = useState('all');
  const [services, setServices] = useState<Service[]>([]);
  const [filteredServices, setFilteredServices] = useState<Service[]>([]);
  const [faqs, setFaqs] = useState<FAQ[]>([]);
  const [animatedElements, setAnimatedElements] = useState<boolean>(false);

  useEffect(() => {
    // Services data
    const servicesData: Service[] = [
      {
        id: 1,
        title: 'EyeBrow Threading',
        titleKey: 'Threading',
        description: 'This popular eyebrow-shaping technique is more precise than waxing — and often less painful!',
        image: 'https://i0.wp.com/waxwax.com/wp-content/uploads/2023/09/rROHYUm8aAXdUjCzzW2GreWJBLYjIvVSoQCqkEEpga4YD3zrsHgjjjvWHSyYKNAJErCW_MrqBPIc9NKHHjAsQHflBO-XTR6J2UFKAXDY_ortUQCqARBW4_0.jpeg?w=1200&ssl=1',
        price: 49,
        time: 15,
        category: 'Threading',
      },
      {
        id: 2,
        title: 'Classic Facial',
        titleKey: 'facial',
        description: 'Rejuvenate your skin with our classic facial that cleanses, exfoliates, and hydrates.',
        image: 'https://thumbs.dreamstime.com/b/face-skin-care-facial-hydro-microdermabrasion-peeling-treatment-close-up-woman-getting-cosmetic-beauty-spa-clinic-hydra-63158853.jpg',
        price: 499,
        oldPrice: 999,
        time: 60,
        category: 'facial',
        specialOffer: true
      },
      {
        id: 3,
        title: 'Gold Facial',
        titleKey: 'Gold Facial',
        description: 'Luxury facial treatment with 24k gold for ultimate skin rejuvenation and radiance.',
        image: 'https://www.merakispa.in/cdn/shop/files/gold-facial-cost-procedure-how-to-do.jpg?v=1711968594',
        price: 899,
        oldPrice: 1699,
        time: 60,
        category: 'facial',
        specialOffer: true
      },
      {
        id: 4,
        title: 'Fruit Facial',
        titleKey: 'Fruit Facial',
        description: 'Natural fruit extracts to nourish your skin with vitamins and antioxidants for a healthy glow.',
        image: 'https://saturn.health/cdn/shop/articles/WhatsApp_Image_2022-04-01_at_1.23.10_PM_720x.jpg?v=1648799697',
        price: 499,
        oldPrice: 999,
        time: 45,
        category: 'facial',
        specialOffer: true
      },
      {
        id: 5,
        title: 'Brightening Facial',
        titleKey: 'Brightening Facial',
        description: 'Specialized treatment to reduce pigmentation and even out skin tone for a brighter complexion.',
        image: 'https://browsandlips.ae/wp-content/uploads/2023/10/Skin-Brightening-Facial-Treatment.jpg',
        price: 799,
        oldPrice: 1299,
        time: 60,
        category: 'facial',
        specialOffer: true
      },
      {
        id: 6,
        title: 'Diamond Facial',
        titleKey: 'Diamond Facial',
        description: 'Premium facial using diamond microdermabrasion for deep exfoliation and skin renewal.',
        image: 'https://img.bebeautiful.in/www-bebeautiful-in/10-Reasons-Why-a-Diamond-Facial-is-the-Best-Thing-for-your-Skin_mobilehome.jpg',
        price: 899,
        oldPrice: 1499,
        time: 75,
        category: 'facial',
        specialOffer: true
      },
      {
        id: 7,
        title: 'Pearl Facial',
        titleKey: 'Pearl Facial',
        description: 'Luxurious pearl extract treatment for skin brightening and anti-aging benefits.',
        image: 'https://m.media-amazon.com/images/I/51PlXh+W3GL._AC_UF1000,1000_QL80_.jpg',
        price: 899,
        oldPrice: 1499,
        time: 60,
        category: 'facial',
        specialOffer: true
      },
      {
        id: 8,
        title: 'Manicure',
        titleKey: 'Manicure',
        description: 'Complete hand and nail care with premium products for beautiful hands.',
        image: 'https://static.wixstatic.com/media/28d39c_39fee459703c4ddcb33b511055322794~mv2.jpg/v1/fill/w_1000,h_750,al_c,q_85,usm_0.66_1.00_0.01/28d39c_39fee459703c4ddcb33b511055322794~mv2.jpg',
        price: 399,
        oldPrice: 499,
        time: 60,
        category: 'nails',
        specialOffer: true
      },
      {
        id: 9,
        title: 'Pedicure',
        titleKey: 'Pedicure',
        description: 'Pamper your feet with our luxurious pedicure treatment for smooth and beautiful feet.',
        image: 'https://5.imimg.com/data5/SELLER/Default/2022/1/VG/RA/PP/144217961/pedicure.jpg',
        price: 499,
        oldPrice: 799,
        time: 60,
        category: 'nails',
        specialOffer: true
      },
      {
        id: 10,
        title: 'Bridal Makeup',
        titleKey: 'Bridal Makeup',
        description: 'Complete bridal makeup package to make you look stunning on your special day.',
        image: 'https://www.jesvenues.com/images/services/bridal-makeup.jpg',
        price: 4999,
        oldPrice: 10000,
        time: 120,
        category: 'makeup',
        specialOffer: true
      },
      {
        id: 11,
        title: 'Party Makeup',
        titleKey: 'Party Makeup',
        description: 'Perfect makeup look for parties and special occasions to make you stand out.',
        image: 'https://naomisheadmasters.com/wp-content/uploads/2023/12/Makeup-Artist-In-Zirakpur.jpg',
        price: 1499,
        oldPrice: 2999,
        time: 120,
        category: 'makeup',
        specialOffer: true
      },
      {
        id: 12,
        title: 'Hair Cut & Styling',
        titleKey: 'HairCut',
        description: 'Transform your look with a fresh haircut and styling by our expert stylists.',
        image: 'https://storyvogue.com/wp-content/uploads/2022/08/twist-hairstyle-1024x576.webp',
        price: 149,
        oldPrice: 299,
        time: 120,
        category: 'hair',
        specialOffer: true  
      },
      {
        id: 13,
        title: 'Hair Coloring',
        titleKey: 'Hair Coloring',
        description: 'Premium hair coloring services using quality products for vibrant and lasting color.',
        image: 'https://i.pinimg.com/736x/df/ac/53/dfac532cd4bc158ca2411a2b0cdd7d1a.jpg',
        price: 249,
        oldPrice: 399,
        time: 120,
        category: 'hair',
        specialOffer: true
      },
      {
        id: 14,
        title: 'Hair Spa',
        titleKey: 'Hair Spa',
        description: 'Deep conditioning treatment to nourish your hair and scalp for healthy, shiny locks.',
        image: 'https://myhomesalon.in/wp-content/uploads/2023/07/Hair-Spa-Price-In-India.jpg',
        price: 799,
        oldPrice: 1299,
        time: 90,
        category: 'hair',
        specialOffer: true
      },
      {
        id: 15,
        title: 'Hair Henna',
        titleKey: 'Hair Henna',
        description: 'Natural hair coloring and conditioning with henna for damage-free, rich color.',
        image: 'https://www.shutterstock.com/image-photo/young-woman-dyeing-her-hair-260nw-2020721405.jpg',
        price: 399,
        oldPrice: 599,
        time: 120,
        category: 'hair',
        specialOffer: true
      },
      {
        id: 16,
        title: 'Mehendi Design',
        titleKey: 'Mehendi',
        description: 'Beautiful and intricate mehendi designs for weddings and special occasions.',
        image: 'https://cdn0.weddingwire.in/article/0015/original/1280/jpg/115100-suraj-mehandi-artist.jpeg',
        price: 999,
        time: 60,
        category: 'mehendi'
      },
      {
        id: 17,
        title: 'Nose & Ear Piercing',
        titleKey: 'Gunshot',
        description: 'Safe and hygienic nose and ear piercing using advanced gunshot technique.',
        image: 'https://rukminim2.flixcart.com/image/850/1000/l33cia80/tattoo-kit/e/o/w/ear-piercing-gun-set-professional-steel-body-navel-ear-nose-original-imageaa87ghyhqed.jpeg?q=90&crop=false',
        price: 499,
        time: 15,
        category: 'gunshot',
        specialOffer: true
      } 
    ];

    // Package data
    const packagesData: Package[] = [
      {
        id: 1,
        name: 'Basic Beauty Package',
        nameKey: 'basicPackage',
        price: 1499,
        popular: false,
        services: ['Classic Facial', 'Manicure', 'Hair Cut & Styling', 'Threading']
      },
      {
        id: 2,
        name: 'Premium Beauty Package',
        nameKey: 'premiumPackage',
        price: 2999,
        popular: true,
        services: ['Gold Facial', 'Manicure & Pedicure', 'Hair Spa', 'Party Makeup', 'Threading & Waxing']
      },
      {
        id: 3,
        name: 'Bridal Package',
        nameKey: 'bridalPackage',
        price: 9999,
        popular: false,
        services: ['Bridal Makeup', 'Gold Facial', 'Mehendi Design', 'Hair Styling', 'Manicure & Pedicure']
      }
    ];

    // FAQ data
    const faqsData: FAQ[] = [
      {
        id: 1,
        question: 'How do I book an appointment?',
        questionKey: 'bookQuestion',
        answer: 'You can book an appointment through our website by visiting the booking page, or call us directly at 8978703629.',
        open: false
      },
      {
        id: 2,
        question: 'What precautions do you take for hygiene?',
        questionKey: 'hygieneQuestion',
        answer: 'We maintain strict hygiene protocols. All tools are sterilized after each use, and our staff follows proper sanitization procedures.',
        open: false
      },
      {
        id: 3,
        question: 'Do you use any harmful chemicals in your treatments?',
        questionKey: 'chemicalsQuestion',
        answer: 'No, we prioritize using products with natural ingredients. We avoid harsh chemicals that can damage your skin or hair.',
        open: false
      },
      {
        id: 4,
        question: 'How early should I arrive for my appointment?',
        questionKey: 'arrivalQuestion',
        answer: 'We recommend arriving 10-15 minutes before your scheduled appointment to complete any necessary paperwork and relax before your treatment.',
        open: false
      }
    ];

    setServices(servicesData);
    setFilteredServices(servicesData);
    setFaqs(faqsData);

    // Set animated elements after a short delay
    setTimeout(() => {
      setAnimatedElements(true);
    }, 100);

    // Intersection Observer for animation
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('.fade-in');
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  useEffect(() => {
    if (activeFilter === 'all') {
      setFilteredServices(services);
    } else {
      setFilteredServices(services.filter(service => service.category === activeFilter));
    }
  }, [activeFilter, services]);

  const handleFilterClick = (filter: string) => {
    setActiveFilter(filter);
  };

  const toggleFaq = (id: number) => {
    setFaqs(faqs.map(faq => {
      if (faq.id === id) {
        return {...faq, open: !faq.open};
      }
      return faq;
    }));
  };

  return (
    <div className="services-page">
      <div className="services-hero">
        <div className="services-hero-overlay"></div>
        <div className="services-hero-content">
          <h1 className="services-hero-title">{translate('services')}</h1>
          <p className="services-hero-description">
            {language === 'telugu' 
              ? 'మా అధునాతన సౌందర్య సేవలతో మీ అందాన్ని మెరుగుపరచుకోండి'
              : 'Enhance your beauty with our state-of-the-art beauty services'}
          </p>
        </div>
      </div>

      <div className="services-content">
        <div className="container">
          <div className="services-filters">
            <button 
              className={`filter-btn ${activeFilter === 'all' ? 'active' : ''}`}
              onClick={() => handleFilterClick('all')}
            >
              {translate('all')}
            </button>
            <button 
              className={`filter-btn ${activeFilter === 'facial' ? 'active' : ''}`}
              onClick={() => handleFilterClick('facial')}
            >
              {translate('facial')}
            </button>
            <button 
              className={`filter-btn ${activeFilter === 'hair' ? 'active' : ''}`}
              onClick={() => handleFilterClick('hair')}
            >
              {translate('hairStyles')}
            </button>
            <button 
              className={`filter-btn ${activeFilter === 'makeup' ? 'active' : ''}`}
              onClick={() => handleFilterClick('makeup')}
            >
              {translate('makeup')}
            </button>
            <button 
              className={`filter-btn ${activeFilter === 'nails' ? 'active' : ''}`}
              onClick={() => handleFilterClick('nails')}
            >
              {translate('manicure')}
            </button>
            <button 
              className={`filter-btn ${activeFilter === 'mehendi' ? 'active' : ''}`}
              onClick={() => handleFilterClick('mehendi')}
            >
              {translate('mehendi')}
            </button>
            <button 
              className={`filter-btn ${activeFilter === 'gunshot' ? 'active' : ''}`}
              onClick={() => handleFilterClick('gunshot')}
            >
              {translate('piercing')} {/* Label says 'Piercing' */}
            </button>


          </div>

          <div className="services-grid">
            {filteredServices.map((service, index) => (
              <div 
                key={service.id} 
                className={`services-item ${animatedElements ? `animation-delay-${(index % 6) + 1}` : ''}`}
                style={{animationDelay: `${(index % 6) * 0.1}s`}}
              >
                <div className="services-image">
                  <img src={service.image} alt={service.title} />
                  <div className="service-category">{translate(service.category)}</div>
                  {service.specialOffer && (
                    <div className="special-offer">Special Offer</div>
                  )}
                </div>
                <div className="service-content">
                  <h3 className="service-title">{translate(service.titleKey) || service.title}</h3>
                  <p className="service-description">{service.description}</p>
                  <div className="service-price-time">
                    <div className="service-price">
                      {service.oldPrice && (
                        <span className="old-price">₹{service.oldPrice}</span>
                      )}
                      <span className="price-value">₹{service.price}</span>
                    </div>
                    <div className="service-time">
                      <Clock size={16} />
                      <span>{service.time} {translate('minutes')}</span>
                    </div>
                  </div>
                  <button 
                    className="service-book-btn"
                    onClick={() => navigate('/booking')}
                  >
                    <Calendar size={16} />
                    {translate('bookNow')}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="wavy-divider">
        <div className="wave-bg"></div>
      </div>

      <section className="package-section">
        <div className="container">
          <h2 className="section-title">{translate('beautyPackages')}</h2>
          <div className="package-cards">
            {[
              {
                id: 1,
                name: language === 'telugu' ? 'బేసిక్ బ్యూటీ ప్యాకేజీ' : 'Basic Beauty Package',
                price: 1499,
                popular: false,
                services: [
                  translate('facial'),
                  translate('manicure'),
                  translate('hairCut'),
                  translate('threading')
                ]
              },
              {
                id: 2,
                name: language === 'telugu' ? 'ప్రీమియం బ్యూటీ ప్యాకేజీ' : 'Premium Beauty Package',
                price: 2999,
                popular: true,
                services: [
                  translate('goldFacial') || 'Gold Facial',
                  translate('manicurePedicure') || 'Manicure & Pedicure',
                  translate('hairSpa') || 'Hair Spa',
                  translate('partyMakeup') || 'Party Makeup',
                  translate('threadingWaxing') || 'Threading & Waxing'
                ]
              },
              {
                id: 3,
                name: language === 'telugu' ? 'బ్రైడల్ ప్యాకేజీ' : 'Bridal Package',
                price: 9999,
                popular: false,
                services: [
                  translate('bridalMakeup') || 'Bridal Makeup',
                  translate('goldFacial') || 'Gold Facial',
                  translate('mehendi'),
                  translate('hairStyles'),
                  translate('manicurePedicure') || 'Manicure & Pedicure'
                ]
              }
            ].map((pkg, index) => (
              <div 
                key={pkg.id} 
                className={`package-card ${pkg.popular ? 'popular' : ''} ${animatedElements ? `animation-delay-${index + 1}` : ''}`}
                style={{animationDelay: `${index * 0.1}s`}}
              >
                {pkg.popular && (
                  <div className="popular-badge">{translate('mostPopular') || 'Most Popular'}</div>
                )}
                <h3 className="package-name">{pkg.name}</h3>
                <div className="package-price">
                  <span className="currency">₹</span>
                  <span>{pkg.price}</span>
                </div>
                <ul className="package-list">
                  {pkg.services.map((service, i) => (
                    <li key={i}>
                      <Check size={16} color="#f5c7d0" />
                      <span>{service}</span>
                    </li>
                  ))}
                </ul>
                <button 
                  className="service-book-btn"
                  onClick={() => navigate('/booking')}
                >
                  {translate('bookNow')}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="faq-section">
        <div className="container">
          <h2 className="section-title">{translate('faq') || 'Frequently Asked Questions'}</h2>
          <div className="faq-container">
            {faqs.map((faq, index) => (
              <div 
                key={faq.id} 
                className="faq-item"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <div 
                  className="faq-question"
                  onClick={() => toggleFaq(faq.id)}
                >
                  <span>{translate(faq.questionKey) || faq.question}</span>
                  <ChevronDown 
                    size={18} 
                    className={`faq-icon ${faq.open ? 'open' : ''}`} 
                  />
                </div>
                <div className={`faq-answer ${faq.open ? 'open' : ''}`}>
                  <p>{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <h2 className="cta-title">{translate('readyToGlow') || 'Ready to Glow?'}</h2>
          <p className="cta-description">
            {language === 'telugu' 
              ? 'మా నిపుణుల బృందంతో కలిసి మీ అందం మెరుగుపర్చుకోవడానికి ఇప్పుడే బుక్ చేసుకోండి'
              : 'Book your appointment now to enhance your beauty with our expert team'}
          </p>
          <div className="cta-buttons">
            <button 
              className="btn btn-primary"
              onClick={() => navigate('/booking')}
            >
              {translate('bookNow')}
            </button>
            <button 
              className="btn btn-secondary"
              onClick={() => navigate('/contact')}
            >
              {translate('contactUs')}
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;