import React, { useState, useEffect } from 'react';
import ProductsCard from '../ProductsCard/ProductsCard';
import aiWritingIcon from '../../assets/products/writing_2327400 1.png';
import designIcon from '../../assets/products/design-tool.png';
import stockIcon from '../../assets/products/design-tool.png';
import automationIcon from '../../assets/products/operation.png';
import resumeIcon from '../../assets/products/portfolio.png';
import socialIcon from '../../assets/products/design-tool.png';

const Main = ({mainPromise, cart, addToCart, removeFromCart, clearCart}) => {
    const [data, setData] = useState([]);
    const [showCart, setShowCart] = useState(false);
    const [notification, setNotification] = useState(null);

    useEffect(() => {
        fetch("/data.json")
        .then(res => res.json())
        .then(data => setData(data));
    }, []);

    const handleAddToCart = (product) => {
        addToCart(product);
        setNotification(`${product.name} added to cart!`);
        setTimeout(() => setNotification(null), 3000);
    };

    const cartTotal = cart.reduce((total, item) => total + item.price, 0);

    
    const handleCheckout = () => {
        clearCart();
        setShowCart(false);
        alert('Order placed successfully!');
    };

   
    const getCartImage = (productIcon) => {
        const imageMap = {
            'writing_2327400 1.png': aiWritingIcon,
            'design-tool.png': designIcon,
            'operation.png': automationIcon,
            'portfolio.png': resumeIcon
        };
        return imageMap[productIcon] || null;
    };

    return (
        <div className="p-8 bg-gray-50 min-h-screen">
            <div className="mb-12 text-center max-w-3xl mx-auto">
                <h1 className="text-4xl font-bold text-gray-900 mb-4">Premium Digital Tools</h1>
                <p className="text-gray-600 mb-6">Choose from our curated collection of premium digital products designed to boost your productivity and creativity.</p>
                <div className="flex gap-4 justify-center">
                    <button 
                        onClick={() => setShowCart(false)}
                        className="bg-purple-600 text-white px-6 py-2 rounded-full font-semibold hover:bg-purple-700 transition">
                        Products
                    </button>
                    <button 
                        onClick={() => setShowCart(true)}
                        className="border-2 border-purple-600 text-purple-600 px-6 py-2 rounded-full font-semibold hover:bg-purple-50 transition"
                    >
                        Cart ({cart.length})
                    </button>
                </div>
            </div>

            {notification && (
                <div className="fixed top-6 right-6 bg-white text-gray-900 px-6 py-3 rounded shadow-lg font-semibold z-50 border border-gray-200">
                    {notification}
                </div>
            )}

            {!showCart ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {data.map(product => (
                        <ProductsCard 
                            key={product.id} 
                            product={product}
                            onAddToCart={handleAddToCart}
                        />
                    ))}
                </div>
            ) : (
                <div className="max-w-3xl mx-auto">
                    <h2 className="text-2xl font-bold text-gray-900 mb-8">Your Cart</h2>

                    {cart.length === 0 ? (
                        <p className="text-gray-500 text-center py-12 text-lg">Your cart is empty</p>
                    ) : (
                        <>
                        
                            <div className="space-y-4 mb-8">
                                {cart.map((item, index) => (
                                    <div key={index} className="flex items-center justify-between bg-white p-6 rounded-lg border border-gray-200">
                                        
                                        <div className="flex items-center gap-4 flex-1">
                                            {item.icon && (
                                                <img 
                                                    src={getCartImage(item.icon)} 
                                                    alt={item.name}
                                                    className="w-16 h-16 object-contain bg-gray-100 p-2 rounded"
                                                />
                                            )}
                                            <div>
                                                <h3 className="font-semibold text-gray-900 text-lg">{item.name}</h3>
                                                <p className="text-gray-600 text-lg">${item.price}</p>
                                            </div>
                                        </div>

                                        
                                        <button
                                            onClick={() => removeFromCart(index)}
                                            className="text-red-500 font-semibold hover:text-red-700 ml-4"
                                        >
                                            Remove
                                        </button>
                                    </div>
                                ))}
                            </div>

                            {/* Total */}
                            <div className="bg-white p-6 rounded-lg border border-gray-200 mb-6">
                                <div className="flex justify-between items-center">
                                    <span className="font-semibold text-gray-900 text-lg">Total</span>
                                    <span className="text-3xl font-bold text-gray-900">${cartTotal}</span>
                                </div>
                            </div>

                    
                            <button 
                                onClick={handleCheckout}
                                className="w-full bg-purple-600 text-white py-3 rounded-full font-semibold hover:bg-purple-700 transition text-lg"
                            >
                                Proceed To Checkout
                            </button>
                        </>
                    )}
                </div>
            )}
        </div>
    );
};

export default Main;