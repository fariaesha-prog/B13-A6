import React from 'react';
import designTool from '../../assets/products/design-tool.png';
import operation from '../../assets/products/operation.png';
import portfolio from '../../assets/products/portfolio.png';
import socialMedia from '../../assets/products/social-media.png';
import writing from '../../assets/products/writing_2327400 1.png';

const imageMap = {
    'design-tool.png': designTool,
    'operation.png': operation,
    'portfolio.png': portfolio,
    'social-media.png': socialMedia,
    'writing_2327400 1.png': writing,
};

const ProductsCard = ({product, onAddToCart}) => {
    const getImageSrc = (iconName) => {
        return imageMap[iconName] || null;
    };

    const getBadgeColor = (tagType) => {
        switch(tagType) {
            case 'popular':
                return 'bg-violet-500 text-white';
            case 'best seller':
                return 'bg-yellow-500 text-white';
            case 'new':
                return 'bg-green-500 text-white';
            default:
                return 'bg-purple-100 text-purple-600';
        }
    };

    return (
        <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition relative">
            {product.tagType && (
                <div className="absolute top-3 right-3 z-10">
                    <span className={`text-xs font-semibold ${getBadgeColor(product.tagType)} px-3 py-1 rounded-full`}>
                        {product.tagType}
                    </span>
                </div>
            )}

            {product.icon && (
                <div className="absolute top-3 left-3 z-10 w-12 h-12 bg-white rounded-lg p-2 shadow-sm">
                    <img 
                        src={getImageSrc(product.icon)}
                        alt={product.name}
                        className="w-full h-full object-contain"
                    />
                </div>
            )}

            <div className="p-6 pt-20">
                <h3 className="text-lg font-bold text-gray-900 mb-2">{product.name}</h3>
                <p className="text-gray-600 text-sm mb-4">{product.description}</p>

                
                <p className="text-2xl font-bold text-gray-900 mb-4">
                    ${product.price}
                    {product.period && <span className="text-sm text-gray-500 font-normal">/{product.period}</span>}
                </p>

                
                {product.features && (
                    <ul className="space-y-2 mb-6">
                        {product.features.map((feature, index) => (
                            <li key={index} className="flex items-center gap-2 text-sm text-gray-700">
                                <span className="text-green-500">✓</span>
                                {feature}
                            </li>
                        ))}
                    </ul>
                )}

                
                <button
                    onClick={() => onAddToCart(product)}
                    className="w-full bg-purple-600 text-white py-2 rounded-full font-semibold hover:bg-purple-700 transition"
                >
                    Buy Now
                </button>
            </div>
        </div>
    );
};

export default ProductsCard;