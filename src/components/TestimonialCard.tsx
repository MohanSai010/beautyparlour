import React from 'react';
import { Star } from 'lucide-react';
import './TestimonialCard.css';

interface TestimonialCardProps {
  name: string;
  image: string;
  rating: number;
  text: string;
  service: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  name,
  image,
  rating,
  text,
  service,
}) => {
  return (
    <div className="testimonial-card">
      <div className="testimonial-quote">"</div>
      <p className="testimonial-text">{text}</p>
      
      <div className="testimonial-rating">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            size={16}
            fill={i < rating ? '#d4af37' : 'none'}
            stroke={i < rating ? '#d4af37' : '#8e777b'}
            className="star"
          />
        ))}
      </div>
      
      <div className="testimonial-user">
        <div className="testimonial-image">
          <img src={image} alt={name} />
        </div>
        <div className="testimonial-info">
          <h4 className="testimonial-name">{name}</h4>
          <p className="testimonial-service">{service}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;