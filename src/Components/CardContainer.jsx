import React from "react";
import "./CardContainer.css";

const CardContainer = () => {
  const products = [
    {
      id: 1,
      name: "Stripe Royal Blue Suit Set",
      price: "₹5,749.00",
      image:
        "https://images.pexels.com/photos/19995513/pexels-photo-19995513/free-photo-of-women-dress-shooting-in-the-studio.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2 ",
    //   button:"button",
    },
    {
      id: 2,
      name: "Peachy Bloom Cotton Suit Set",
      price: "₹6,249.00",
      image: "https://images.pexels.com/photos/14663626/pexels-photo-14663626.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      id: 3,
      name: "Mauve Mirage Co-Ord Set",
      price: "₹4,999.00",
      image: "https://images.pexels.com/photos/4937452/pexels-photo-4937452.jpeg?auto=compress&cs=tinysrgb&w=600",
    },

    { id: 1, name: 'Embroidered Anarkali Suit', price: '₹7,999.00', image: 'https://images.pexels.com/photos/4355702/pexels-photo-4355702.jpeg?auto=compress&cs=tinysrgb&w=600' },
    { id: 2, name: 'Silk Saree with Zari Work', price: '₹12,499.00', image: 'https://images.pexels.com/photos/1447885/pexels-photo-1447885.jpeg?auto=compress&cs=tinysrgb&w=600' },
    { id: 3, name: 'Festive Lehenga Choli Set', price: '₹15,999.00', image: 'https://images.pexels.com/photos/26314469/pexels-photo-26314469/free-photo-of-portrait-of-blonde-woman-in-glove.jpeg?auto=compress&cs=tinysrgb&w=600' },
    { id: 4, name: 'Printed Kurta & Palazzo Set', price: '₹3,499.00', image: 'https://images.pexels.com/photos/17243661/pexels-photo-17243661/free-photo-of-a-woman-in-a-plaid-skirt-and-white-t-shirt.jpeg?auto=compress&cs=tinysrgb&w=600' },
   
    {
      id: 4,
      name: "Multicolor Floral Chinon Saree",
      price: "₹4,499.00",
      image: "https://images.pexels.com/photos/14617676/pexels-photo-14617676.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: 4,
      name: "Multicolor Floral Chinon Saree",
      price: "₹4,499.00",
      image: "https://images.pexels.com/photos/14617676/pexels-photo-14617676.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: 4,
      name: "Multicolor Floral Chinon Saree",
      price: "₹4,499.00",
      image: "https://images.pexels.com/photos/17243573/pexels-photo-17243573/free-photo-of-a-woman-in-white-pants-and-a-black-top.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: 4,
      name: "Multicolor Floral Chinon Saree",
      price: "₹4,499.00",
      image: "https://images.pexels.com/photos/794062/pexels-photo-794062.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: 4,
      name: "Multicolor Floral Chinon Saree",
      price: "₹4,499.00",
      image: "https://images.pexels.com/photos/27367835/pexels-photo-27367835/free-photo-of-woman-wearing-denim-dress-on-a-street-in-new-york.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: 4,
      name: "Multicolor Floral Chinon Saree",
      price: "₹4,499.00",
      image: "https://images.pexels.com/photos/17243499/pexels-photo-17243499/free-photo-of-a-woman-leaning-against-a-wall-wearing-a-crop-top.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: 4,
      name: "Multicolor Floral Chinon Saree",
      price: "₹4,499.00",
      image: "https://images.pexels.com/photos/17243661/pexels-photo-17243661/free-photo-of-a-woman-in-a-plaid-skirt-and-white-t-shirt.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: 4,
      name: "Multicolor Floral Chinon Saree",
      price: "₹4,499.00",
      image: "https://images.pexels.com/photos/17243579/pexels-photo-17243579/free-photo-of-a-woman-in-a-skirt-and-heels-is-posing-on-a-pole.jpeg?auto=compress&cs=tinysrgb&w=600g",
    },
    {
      id: 4,
      name: "Multicolor Floral Chinon Saree",
      price: "₹4,499.00",
      image: "https://images.pexels.com/photos/6069563/pexels-photo-6069563.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: 4,
      name: "Multicolor Floral Chinon Saree",
      price: "₹4,499.00",
      image: "https://images.pexels.com/photos/15647593/pexels-photo-15647593/free-photo-of-a-woman-in-a-coat-and-skirt-posing-for-a-photo.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: 4,
      name: "Multicolor Floral Chinon Saree",
      price: "₹4,499.00",
      image: "https://images.pexels.com/photos/852860/pexels-photo-852860.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: 4,
      name: "Multicolor Floral Chinon Saree",
      price: "₹4,499.00",
      image: "https://images.pexels.com/photos/937658/pexels-photo-937658.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: 4,
      name: "Multicolor Floral Chinon Saree",
      price: "₹4,499.00",
      image: "https://images.pexels.com/photos/7242949/pexels-photo-7242949.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    // ... Add remaining products here ...
  ];

  return (
    <div className="card-container">
      {/* Promotional Banner */}
      <div className="promo-banner">
        <img
          src="https://images.unsplash.com/photo-1445205170230-053b83016050?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Shaadi Ka Utsav"
          className="promo-banner-image"
        />
        <div className="promo-banner-content">
          <h1 className="promo-title">Shaadi Ka Utsav</h1>
          <p className="promo-subtitle">
            Timeless Elegance, Wedding-Ready Perfect Looks for the Big Day
          </p>
          <button className="promo-button">Shop Now</button>
        </div>
      </div>

      {/* Product Grid */}
      <div className="product-grid">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img
              src={product.image}
              alt={product.name}
              className="product-image"
            />
            <div className="product-info">
              <h3 className="product-name">{product.name}</h3>
              <p className="product-price">{product.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardContainer;
