import React from 'react';
import './Electronics.css';
import Product from './Product';

const Electronics = () => {
    return (
        <div className="electronics">
            <div className="electronics__container">
                <img style={{width: "100vw", height: "50vh"}} src="https://www.brandsolutions.com.au/wp-content/uploads/tcl-2.png" alt="" />
                <div className="electronics__row">
                    <Product
                        id="5"
                        title="Fastrack reflex 2.0 Watches"
                        price={1460}
                        rating={3}
                        image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC__SX466_.jpg" 
                    />
                    <Product
                        id="6"
                        title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
                        price={7300}
                        rating={5}
                        image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex25"
                    />
                    <Product
                        id="7"
                        title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
                        price={43800}
                        rating={4}
                        image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg" 
                    />
                    <Product
                        id="8"
                        title="OnePlus 7T Glacier Blue (8GB RAM+256GB Storage)"
                        price={37999}
                        rating={4}
                        image="https://m.media-amazon.com/images/I/71ncRs6HzyL._AC_UY218_.jpg" 
                    />
                </div>
                <hr />
                <div className="electronics__row">
                    <Product 
                        id="3"
                        title='Apple Watch Series 3 (GPS, 38mm) - Space Grey Aluminium Case with Black Sport Band' 
                        price={20900} 
                        image="https://m.media-amazon.com/images/I/71WgOCvKwrL._AC_UL320_.jpg"
                        rating={5}
                    />
                    <Product
                        id="4"
                        title="New Apple iPhone 12 Pro Max (256GB) - Graphite"
                        price={139900}
                        rating={5}
                        image="https://m.media-amazon.com/images/I/71XXJC7V8tL._AC_UY218_.jpg"
                    />
                    <Product
                        id="18"
                        title="TCL 138.78 cm (55 inches)  AI 4K UHD Certified Android Smart LED TV 55P8 (Black) (2019 Model)"
                        price={35999}
                        rating={4}
                        image="https://m.media-amazon.com/images/I/71oRARZmKnL._AC_UY218_.jpg"
                    />
                </div>
                <hr />
                <div className="electronics__row">
                    <Product
                        id="19"
                        title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
                        price={153900}
                        rating={4}
                        image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
                    />
                </div>
            </div>
        </div>
    );
}

export default Electronics;