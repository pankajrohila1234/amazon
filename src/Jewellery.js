import React from 'react';
import './Jewellery.css';
import Product from './Product';

const Jewellery = () => {
    return (
        <div className="jewellery">
            <div className="jewellery__container">
                <img style={{width: "100vw"}} src="https://images-eu.ssl-images-amazon.com/images/G/31/img17/Shoes/December/Shoes_WRS/SectionalHeaders/PC_sectionalheader_PocketFriendlyFashion._CB491374684_.jpg" alt="" />
                <img style={{width: "100vw", height: "60vh"}} src="https://s3-eu-west-1.amazonaws.com/cdn.kanhaijewels.com/bnr/fd789477-f0a1-414b-8ddd-898bef1646ab.jpg" alt="" />
                <div className="jewellery__row">
                    <Product 
                        id="43"
                        title='Sukkhi Ethnic Gold Plated Kundan Multi-String Set of 3 Necklace Combo for Women (SKR48716)' 
                        price={6499} 
                        image="https://images-eu.ssl-images-amazon.com/images/I/515GLy2WlJL._AC_UL260_SR200,260_FMwebp_QL70_.jpg"
                        rating={4}
                    />
                    <Product 
                        id="44"
                        title='Sukkhi Glamorous LCT Gold Plated Wedding Jewellery Pearl Choker Necklace Set Combo For Women (CB73381)' 
                        price={5000} 
                        image="https://images-eu.ssl-images-amazon.com/images/I/51tJy2fUL6L._AC_UL260_SR200,260_FMwebp_QL70_.jpg"
                        rating={5}
                    />
                    <Product 
                        id="45"
                        title='Sukkhi Trendy Kundan Gold Plated Wedding Jewellery Pearl Choker Necklace Set for Women (N73544)' 
                        price={4500} 
                        image="https://images-eu.ssl-images-amazon.com/images/I/51S4A4I4JgL._AC_UL260_SR200,260_FMwebp_QL70_.jpg"
                        rating={4}
                    />
                    <Product 
                        id="46"
                        title='Peora Ethnic Indian Traditional Gold Plated Kundan Dulhan Bridal Jewellery Set with Choker Earrings Maang Tikka Hathphool for Women' 
                        price={15784} 
                        image="https://m.media-amazon.com/images/I/71kF3qNhjIL._AC_UL320_.jpg"
                        rating={5}
                    />
                </div>
                
                <div className="jewellery__row">
                    <Product 
                        id="47"
                        title='Sukkhi Ethnic Gold Plated Kundan Multi-String Set of 3 Necklace Combo for Women (SKR48716)' 
                        price={6499} 
                        image="https://m.media-amazon.com/images/I/71uRLTUqRXL._AC_UL320_.jpg"
                        rating={4}
                    />
                    <Product 
                        id="48"
                        title='Gold Tone Traditional Dangle & Pearl Drop Earring' 
                        price={300} 
                        image="https://m.media-amazon.com/images/I/719ICwUEHML._AC_UL320_.jpg"
                        rating={5}
                    />
                    <Product 
                        id="49"
                        title='Gold Tone Beautifully Enamelled Dangle & Drop Earring' 
                        price={349} 
                        image="https://m.media-amazon.com/images/I/71q8u00SAZL._AC_UL320_.jpg"
                        rating={4}
                    />
                    <Product 
                        id="50"
                        title='YouBella Earrings for women stylish Jewellery Traditional Fancy Party Wear Earrings for Girls and Women' 
                        price={445} 
                        image="https://m.media-amazon.com/images/I/81koFo1U7cL._AC_UL320_.jpg"
                        rating={5}
                    />
                </div>

                <div className="jewellery__row">
                    <Product 
                        id="51"
                        title='MEENAZ Rudraksha Shiv OM Trishul Damroo Designer Gold Plated Kada' 
                        price={2000} 
                        image="https://m.media-amazon.com/images/I/61+C1-UnO5L._AC_UL320_.jpg"
                        rating={4}
                    />
                    <Product 
                        id="52"
                        title='Gold Mesh Cuff Kada Bracelet Bangle Combo For Men' 
                        price={415} 
                        image="https://m.media-amazon.com/images/I/71TQfoS7vOL._AC_UL320_.jpg"
                        rating={5}
                    />
                    <Product 
                        id="53"
                        title='Contemporary Look Cubic Zirconia Kada For Women-ZPFK9214' 
                        price={500} 
                        image="https://m.media-amazon.com/images/I/51zKl-K4u3L._AC_UL320_.jpg"
                        rating={4}
                    />
                    <Product 
                        id="54"
                        title='Gold look Designer Adjustable Bracelet- ZPFK6274' 
                        price={350} 
                        image="https://m.media-amazon.com/images/I/61JJgnVDl9L._AC_UL320_.jpg"
                        rating={5}
                    />
                </div>
            </div>
        </div>
    );
}

export default Jewellery;