import React from 'react';
import './Ethnic.css'; // Create a specific CSS file for Ethnic wear page

const Ethnic = ({ updateCartCount }) => {
    const ethnicWearProducts = [
        { id: 1, name: 'Embroidered Anarkali Suit', price: '₹7,999.00', image: '/images/ethnic1.jpg' },
        { id: 2, name: 'Silk Saree with Zari Work', price: '₹12,499.00', image: '/images/ethnic2.jpg' },
        { id: 3, name: 'Festive Lehenga Choli Set', price: '₹15,999.00', image: '/images/ethnic3.jpg' },
        { id: 4, name: 'Printed Kurta & Palazzo Set', price: '₹3,499.00', image: '/images/ethnic4.jpg' },
        { id: 5, name: 'Traditional Banarasi Saree', price: '₹10,499.00', image: '/images/ethnic5.jpg' },
    ];

    return (
        <div className="ethnic-container">
            <h1 className="ethnic-title">Ethnic Wear</h1>
            <div className="ethnic-grid">
                {ethnicWearProducts.map((product) => (
                    <div key={product.id} className="ethnic-card">
                        <img src={product.image} alt={product.name} className="ethnic-image" />
                        <div className="ethnic-info">
                            <h3 className="ethnic-name">{product.name}</h3>
                            <p className="ethnic-price">{product.price}</p>
                            <button
                                className="ethnic-add-to-cart"
                                onClick={() => updateCartCount((prevCount) => prevCount + 1)}
                            >
                                Add to Cart
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Ethnic;
