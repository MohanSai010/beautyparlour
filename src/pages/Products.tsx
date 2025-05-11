import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';

interface ProductItem {
  name: string;
  image: string;
}

interface ProductCategory {
  name: string;
  items: ProductItem[];
}

const Products: React.FC = () => {
  const { translate } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState<string>('Makeup');

  const categories: ProductCategory[] = [
    {
      name: 'Makeup',
      items: [
        { name: 'Compact', image: 'https://www.coloressence.com/cdn/shop/files/Starlet-Compact-Powder-CP-4_122167a1-141b-4c7d-8cd2-f2f4cae763eb.jpg?v=1706167979' },
        { name: 'Foundation', image: 'https://marscosmetics.in/cdn/shop/files/WEBSITEcopy.jpg2_3_822b06c9-6afb-43fb-9571-69f27d13241d.jpg?v=1740828794' },
        { name: 'EyeLiners', image: 'https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/19957636/2024/7/25/809a113b-a54c-4066-826a-774d97903c281721897885929LakmeSmudgeProofWaterproofEyeconicLiquidEyeliner45ml-Green1.jpg' },
        { name: 'EyeShadows', image: 'https://europegirl.com/cdn/shop/files/FullSizeRender.jpg?v=1716721518&width=1920' },
        { name: 'Mascara', image: 'https://marscosmetics.in/cdn/shop/products/fabulash-mascara-607.jpg?v=1638452787' },
        { name: 'Lipsticks', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMvvK0M8JHZ6H_iRW-c5_SmxE-FSj3OjPJoA&s' },
        { name: 'NailPolish', image: 'https://marscosmetics.in/cdn/shop/files/WEBSITEczpg.jpg?v=1721110668&width=2000' },
        { name: 'Primers', image: 'https://www.makeupstudio.in/uploads/1625049261-Face_Prep_Illuminating_Primer_SPF_30.jpg' },
      ],
    },
    {
      name: 'Face Care',
      items: [
        { name: 'FaceCreams', image: 'https://assets.gadgets360cdn.com/pricee/assets/category/202007/face-cream-1200x628_1594738225.jpg' },
        { name: 'Day & Night Creams', image: 'https://fycprofessional.com/cdn/shop/products/Untitleddesign_53.png?v=1607510813&width=416' },
        { name: 'FaceSerums', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8vBEj2_KfbO1RXmXKI8JAmIX0m6CdvuFQdg&s' },
        { name: 'UnderEyeCreams', image: 'https://www.thenaturalwash.com/cdn/shop/products/Product_Ingredient_2_1.jpg?v=1649496910' },
      ],
    },
    {
      name: 'Hair Care',
      items: [
        { name: 'HairOils', image: 'https://m.media-amazon.com/images/I/81svytA46VL.jpg' },
        { name: 'Conditioners', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsY4bZ8r3L2yJAooIKU63obmLyLTK_sZctxfoAK3SgrdLYqhwrh2xUNp-Qv7oIfYj1LbI' },
        { name: 'Shampoo', image: 'https://olamor.in/cdn/shop/files/GlistenKeratinShampoo1L.jpg?v=1700474623&width=1500' },
        { name: 'HairGels', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBpRdR-nVZgD0vopXJRjGkCNHn91nj8G_BTw&s' },
      ],
    },
    {
      name: 'Body Care',
      items: [
        { name: 'Soaps', image: 'https://images-static.naikaa.com/beauty-blog/wp-content/uploads/2024/11/nourishment-banner.jpg' },
        { name: 'FootCreams', image: 'https://shop.altosindia.net/storagecache/product_benefit_image/242803470-93371f03-a88b-41f6-ad2b-2a62341dadf0.jpeg' },
      ],
    },
  ];

  const currentCategory = categories.find(cat => cat.name === selectedCategory);

  return (
    <div className="min-h-screen pt-20 bg-white">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-center mb-8">{translate('products')}</h1>

        {/* Category Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {categories.map((category) => (
            <button
              key={category.name}
              onClick={() => setSelectedCategory(category.name)}
              className={`px-4 py-2 rounded-full font-medium transition ${
                selectedCategory === category.name
                  ? 'bg-pink-600 text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {currentCategory?.items.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition transform hover:-translate-y-1"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-36 object-cover"
              />
              <div className="p-4">
                <p className="text-center text-gray-800 font-medium">{item.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
