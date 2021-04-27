import React from 'react';
import './Product.css';
import { useStateValue } from './StateProvider';
import NumberFormat from 'react-number-format';


const Product = ({ id, title, image, price, rating }) => {
    const [{ basket }, dispatch] = useStateValue();

    const addToBasket = () => {
        // dispatch the item into the data layer
        dispatch({
            type: 'ADD_TO_BASKET',
            item: {
                id: id,
                title: title,
                image: image,
                price: price,
                rating: rating,
            },
        });
    };

    return (
        
        <div className="product">
            <div className="product__info">
                <p>{title}</p>
                <p className="product__price">
                    <small>₹</small>
                    <strong><NumberFormat value={price} displayType={'text'} thousandSeparator={true} thousandsGroupStyle="lakh" /></strong>
                </p>
                <div className="product__rating">
                    {Array(rating).fill().map((_, i) => (
                        <p>🌟</p>
                    ))}
                    
                </div>
            </div>
            
            <img className="grow" alt="" src={image} />

            <button className="grow" onClick={addToBasket}>Add to Basket</button>
        
        </div>
        
        
    );
}

export default Product;