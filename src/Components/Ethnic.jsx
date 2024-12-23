import React from "react";
import "./Ethnic.css";

const EthnicWear = () => {
  const ethnicProducts = [
    { id: 1, name: 'Embroidered Anarkali Suit', price: '₹7,999.00', image: 'https://images.pexels.com/photos/13162239/pexels-photo-13162239.jpeg?auto=compress&cs=tinysrgb&w=600' },
    { id: 2, name: 'Silk Saree with Zari Work', price: '₹12,499.00', image: 'https://images.pexels.com/photos/2723624/pexels-photo-2723624.jpeg?auto=compress&cs=tinysrgb&w=600' },
    { id: 3, name: 'Festive Lehenga Choli Set', price: '₹15,999.00', image: 'https://images.pexels.com/photos/13954015/pexels-photo-13954015.jpeg?auto=compress&cs=tinysrgb&w=600' },
    { id: 4, name: 'Printed Kurta & Palazzo Set', price: '₹3,499.00', image: 'https://images.pexels.com/photos/20791992/pexels-photo-20791992/free-photo-of-studio-shot-of-a-woman-wearing-an-embroidered-kurta-and-dupatta-set.jpeg?auto=compress&cs=tinysrgb&w=600' },
    { id: 5, name: 'Designer Sharara Suit', price: '₹9,999.00', image: 'https://images.pexels.com/photos/28191695/pexels-photo-28191695/free-photo-of-a-bride-and-groom-are-standing-in-a-cave.jpeg?auto=compress&cs=tinysrgb&w=600' },
    { id: 6, name: 'Embroidered Silk Kurta', price: '₹6,999.00', image: 'https://images.pexels.com/photos/27670708/pexels-photo-27670708/free-photo-of-trang-ph-c-dan-t-c-mieu-c-ng.jpeg?auto=compress&cs=tinysrgb&w=600' },
    { id: 7, name: 'Chikankari Work Saree', price: '₹8,499.00', image: 'https://images.pexels.com/photos/19567969/pexels-photo-19567969/free-photo-of-young-woman-in-a-saree-dress-standing-among-plastic-containers-in-the-back-of-a-truck.jpeg?auto=compress&cs=tinysrgb&w=600' },
    { id: 8, name: 'Cotton Anarkali Dress', price: '₹4,299.00', image: 'https://images.pexels.com/photos/26970930/pexels-photo-26970930/free-photo-of-eastern-fashion-dress-2024.jpeg?auto=compress&cs=tinysrgb&w=600' },
    { id: 9, name: 'Handloom Banarasi Saree', price: '₹14,999.00', image: 'https://images.pexels.com/photos/9419251/pexels-photo-9419251.jpeg?auto=compress&cs=tinysrgb&w=600' },
    { id: 10, name: 'Georgette Embroidered Dress', price: '₹5,999.00', image: 'https://images.pexels.com/photos/19248030/pexels-photo-19248030/free-photo-of-pista-western-dress-style-shoot-by-dhanno.jpeg?auto=compress&cs=tinysrgb&w=600' },
    { id: 11, name: 'Velvet Bridal Lehenga', price: '₹25,999.00', image: 'https://images.pexels.com/photos/14089126/pexels-photo-14089126.jpeg?auto=compress&cs=tinysrgb&w=600' },
    { id: 12, name: 'Cotton Kurti with Dupatta', price: '₹2,499.00', image: 'https://images.pexels.com/photos/26970930/pexels-photo-26970930/free-photo-of-eastern-fashion-dress-2024.jpeg?auto=compress&cs=tinysrgb&w=600' },
    { id: 13, name: 'Traditional Patiala Suit', price: '₹3,999.00', image: 'https://images.pexels.com/photos/15179843/pexels-photo-15179843/free-photo-of-bridal-makeup.jpeg?auto=compress&cs=tinysrgb&w=600' },
    { id: 14, name: 'Bandhani Print Saree', price: '₹6,499.00', image: 'https://images.pexels.com/photos/7651454/pexels-photo-7651454.jpeg?auto=compress&cs=tinysrgb&w=600' },
    { id: 15, name: 'Mirror Work Lehenga', price: '₹16,499.00', image: 'https://images.pexels.com/photos/24549080/pexels-photo-24549080/free-photo-of-bride-in-an-embroidered-wedding-dress-and-traditional-jewelry.jpeg?auto=compress&cs=tinysrgb&w=600' },
  ];

  return (
    <div className="ethnic-wear-container">
      <div className="ethnic-wear-banner">
        <img
          src="https://images.pexels.com/photos/13661802/pexels-photo-13661802.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt="Ethnic Wear"
          className="ethnic-banner-image"
        />
        <div className="ethnic-banner-content">
          <h1 className="ethnic-title">Ethnic Elegance</h1>
          <p className="ethnic-subtitle">Celebrate traditions with grace and style</p>
          <button className="ethnic-button">Shop Now</button>
        </div>
      </div>

      <div className="ethnic-product-grid">
        {ethnicProducts.map((product, index) => (
          <div
            key={product.id}
            className={`ethnic-product-card ${
              index % 2 === 0 ? "card-style-one" : "card-style-two"
            }`}
          >
            <img
              src={product.image}
              alt={product.name}
              className="ethnic-product-image"
            />
            <div className="ethnic-product-info">
              <h3 className="ethnic-product-name">{product.name}</h3>
              <p className="ethnic-product-price">{product.price}</p>
              <button className="ethnic-card-button">View Details</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EthnicWear;
