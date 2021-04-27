import React from 'react';
import './Clothing.css';
import Product from './Product';

const Clothing = () => {
    return (
        <div className="clothing">
            <div className="clothing__container">
            <img style={{width: '100vw'}} src="https://m.media-amazon.com/images/G/31/img2020/fashion/MA2020/EOSS-1242x450._CB408537056_.jpg" alt="" />
                <div className="clothing__row">
                    <Product 
                        id="31"
                        title="US Polo Association | Men's Polo"
                        price={1150} 
                        image="https://m.media-amazon.com/images/I/9140z2Xj08L._AC_UL320_.jpg"
                        rating={4}
                    />
                    <Product 
                        id="32"
                        title="Polo T Shirts for Men with Pocket and Contra Collar Casual"
                        price={650}
                        rating={3}
                        image="https://m.media-amazon.com/images/I/51a1vBiGFBL._AC_UL320_.jpg"
                    />
                    <Product 
                        id="33"
                        title="Men's & Boys' Classic Fit Hooded T-Shirt"
                        price={450} 
                        image="https://m.media-amazon.com/images/I/51TXbpx77lL._AC_UL320_.jpg"
                        rating={4}
                    />
                    <Product 
                        id="9"
                        title="Logo Maroon T-Shirt for Men & Women"
                        price={500}
                        rating={5}
                        image="https://m.media-amazon.com/images/I/51Ex6a-3-LL._AC_UL320_.jpg"
                    />
                    
                </div>
                <hr />
                <div className="clothing__row">
                    <Product 
                        id="35"
                        title="Plain Printed Cotton Tshirt for Women"
                        price={350} 
                        image="https://m.media-amazon.com/images/I/611CfQ2rTfL._AC_UL320_.jpg"
                        rating={5}
                    />
                    <Product 
                        id="36"
                        title="Women's T-Shirt (Pack of 2)"
                        price={600}
                        rating={4}
                        image="https://m.media-amazon.com/images/I/71AD3YobeWL._AC_UL320_.jpg"
                    />
                    <Product 
                        id="37"
                        title="JUNEBERRY Cotton Stylish Hooded Regular Fit Sweatshirt for Women"
                        price={650} 
                        image="https://images-na.ssl-images-amazon.com/images/I/31QzMcr01-L.jpg"
                        rating={4}
                    />
                    <Product 
                        id="38"
                        title="Girls and Women Full Sleeve Winter Wear Fleece Sweatshirt"
                        price={500}
                        rating={3}
                        image="https://m.media-amazon.com/images/I/51t0KSJVCwL._AC_UL320_.jpg"
                    />
                </div>
                <hr />
                <div className="clothing__row">
                    <Product 
                        id="39"
                        title="Women's Embroidered Work Lehenga Choli"
                        price={499} 
                        image="https://m.media-amazon.com/images/I/61hnmmC4smL._AC_UL320_.jpg"
                        rating={5}
                    />
                    <Product 
                        id="40"
                        title="JULLY Girls DESIGNERFUSION WEAR Crop TOP and Striped Plazo Set(Blue&RED)"
                        price={750}
                        rating={4}
                        image="https://m.media-amazon.com/images/I/61cbixlWqDL._AC_UL320_.jpg"
                    />
                    <Product 
                        id="41"
                        title="Kids Hooded Sweater for Winter wear with Cotton Fabric"
                        price={500} 
                        image="https://m.media-amazon.com/images/I/71nLrAlyfDL._AC_UL320_.jpg"
                        rating={4}
                    />
                    <Product 
                        id="42"
                        title="Jam & Honey Boys Lightweight Sweatshirt"
                        price={400}
                        rating={4}
                        image="https://m.media-amazon.com/images/I/91iBE4n7oRL._AC_UL320_.jpg"
                    />
                </div>
            </div>
        </div>
    );
}

export default Clothing;