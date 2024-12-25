import React from "react";
import "./Bestseller.css";

const BestSeller = () => {
  const bestSellerProducts = [
    { id: 1, name: 'Golden Party Gown', price: '₹9,999.00', image: 'https://images.pexels.com/photos/8404416/pexels-photo-8404416.jpeg?auto=compress&cs=tinysrgb&w=600' },
    { id: 2, name: 'Stylish Silk Kurta', price: '₹4,999.00', image: 'https://images.pexels.com/photos/14975739/pexels-photo-14975739/free-photo-of-woman-in-pink-sutra-set.jpeg?auto=compress&cs=tinysrgb&w=600' },
    { id: 3, name: 'Elegant Bridal Lehenga', price: '₹19,999.00', image: 'https://images.pexels.com/photos/12737572/pexels-photo-12737572.jpeg?auto=compress&cs=tinysrgb&w=600' },
    { id: 4, name: 'Traditional Saree', price: '₹7,499.00', image: 'https://images.pexels.com/photos/27139278/pexels-photo-27139278/free-photo-of-a-woman-in-a-sari-standing-in-front-of-a-building.jpeg?auto=compress&cs=tinysrgb&w=600' },
    { id: 5, name: 'Designer Lehenga', price: '₹24,999.00', image: 'https://images.pexels.com/photos/14680552/pexels-photo-14680552.jpeg?auto=compress&cs=tinysrgb&w=600' },
    { id: 6, name: 'Modern Anarkali Dress', price: '₹8,999.00', image: 'https://images.pexels.com/photos/3866555/pexels-photo-3866555.png?auto=compress&cs=tinysrgb&w=600' },
    { id: 6, name: 'Modern Anarkali Dress', price: '₹8,999.00', image: 'https://images.pexels.com/photos/29823177/pexels-photo-29823177/free-photo-of-portrait-of-woman-in-floral-red-dress-on-stairs.jpeg?auto=compress&cs=tinysrgb&w=600' },
    { id: 6, name: 'Modern Anarkali Dress', price: '₹8,999.00', image: 'https://images.pexels.com/photos/2065195/pexels-photo-2065195.jpeg?auto=compress&cs=tinysrgb&w=600' },
    { id: 1, name: 'Golden Party Gown', price: '₹9,999.00', image: 'https://images.pexels.com/photos/8404416/pexels-photo-8404416.jpeg?auto=compress&cs=tinysrgb&w=600' },

  ];

  return (
    <div className="best-sellers-container">
      <div className="best-sellers-header">
        <h2 className="best-sellers-title">Best Sellers</h2>
        <p className="best-sellers-subtitle">Discover the favorites our customers adore</p>
      </div>
      <div className="best-sellers-grid">
        {bestSellerProducts.map((product) => (
          <div key={product.id} className="best-seller-card">
            <img src={product.image} alt={product.name} className="best-seller-image" />
            <div className="best-seller-info">
              <h3 className="best-seller-name">{product.name}</h3>
              <p className="best-seller-price">{product.price}</p>
              <button className="best-seller-button">View Product</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BestSeller;
