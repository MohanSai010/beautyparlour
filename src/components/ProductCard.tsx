import React, { useState } from 'react';
import './ProductCard.css';

interface ProductCardProps {
  name: string;
  image: string;
  description: string;
}

const ProductCard: React.FC<ProductCardProps> = ({
  name,
  image,
  description,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div 
      className="product-card"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="product-image">
        <img src={image} alt={name} />
      </div>
      
      <div className="product-content">
        <h3 className="product-name">{name}</h3>
        <p className={`product-description ${isHovered ? 'show' : ''}`}>
          {description}
        </p>
      </div>
    </div>
  );
};

export default ProductCard;