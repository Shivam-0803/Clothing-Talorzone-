import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Card = ({ updateCartCount }) => {
    const { id } = useParams(); // Get the card ID from the URL
    const [card, setCard] = useState(null);

    useEffect(() => {
        // You can replace this with a dynamic fetch call to get card details by ID
        setCard({ id, name: `Product ${id}`, description: `Description for product ${id}` });
    }, [id]);

    const handleAddToCart = () => {
        updateCartCount(prevCount => prevCount + 1);
    };

    return (
        <div className="card-details">
            {card ? (
                <>
                    <h2>{card.name}</h2>
                    <p>{card.description}</p>
                    <button onClick={handleAddToCart}>Add to Cart</button>
                </>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
};

export default Card;
