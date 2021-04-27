import React from 'react';
import './Kitchen.css';
import Product from './Product';

const Kitchen = () => {
    return (
        <div className="kitchen">
            <div className="kitchen__container">
                <img style={{width: "100vw"}} src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/AmazonBrands/Home_kitchen/XCM_Manual_1265445_1356336_in_h_k_sep_1500x350_in-en_a26e3b6c-7570-4ece-a353-e923379201ad.jpg" alt="" />
                <div className="kitchen__row">
                    <Product 
                        id="55"
                        title="Decals Design 'Flowers Branch' Wall Sticker (PVC Vinyl, 60 cm x 90 cm),Multicolor"
                        price={299} 
                        image="https://images-eu.ssl-images-amazon.com/images/I/51JfsR-upZL._AC_SX184_.jpg"
                        rating={5}
                    />
                    <Product 
                        id="56"
                        title="Decals Design 'Tree with Birds and Cages' Wall Sticker 'Tree with Birds and Cages' Wall"
                        price={200} 
                        image="https://images-eu.ssl-images-amazon.com/images/I/512Mez3HNAL._AC_SX184_.jpg"
                        rating={5}
                    />
                    <Product 
                        id="57"
                        title='Two Moustaches Decorative Soccer Ball and Shoe Showpiece | Home Decor |' 
                        price={1299} 
                        image="https://m.media-amazon.com/images/I/81g+b7A1BUL._AC_UL320_.jpg"
                        rating={5}
                    />
                    <Product 
                        id="11"
                        title='Homesake® Tea Light Candle Holder for Home Decoration, Home Room Decor Items Moroccan Multicolor Mosaic Glass' 
                        price={450} 
                        image="https://m.media-amazon.com/images/I/81VKKLl4lFL._AC_UL320_.jpg"
                        rating={4}
                    />
                </div>
                <hr />
                <div className="kitchen__row">
                    <Product 
                        id="59"
                        title="Philips HL7756/00 Mixer Grinder, 750W, 3 Jars (Black)"
                        price={2999} 
                        image="https://m.media-amazon.com/images/I/51B0MPbLbXL._AC._SR360,460.jpg"
                        rating={4}
                    />
                    <Product 
                        id="60"
                        title="Philips HL7707/00 Mixer Grinder, 750W, 4 Jars (Black)"
                        price={6750} 
                        image="https://images-eu.ssl-images-amazon.com/images/I/419ea-SZb3L._AC_US160_FMwebp_QL70_.jpg"
                        rating={5}
                    />
                    <Product 
                        id="61"
                        title='AGARO - 33184 Marvel 25-Litre Oven Toaster Grill with Motorized Rotisserie & 5 Heating Modes (Black)' 
                        price={3700} 
                        image="https://m.media-amazon.com/images/I/71xRVwhBkGL._AC._SR360,460.jpg"
                        rating={4}
                    />
                    <Product 
                        id="62"
                        title='Butterfly EKN 1.5-Litre Water Kettle (Silver with Black)' 
                        price={650} 
                        image="https://m.media-amazon.com/images/I/71cFxsy+BCL._AC._SR360,460.jpg"
                        rating={4}
                    />
                </div>
                <hr />
                <div className="kitchen__row">
                    <Product 
                        id="63"
                        title="eCraftIndia Antique Music Decorative Canon Brass Showpiece (10 cm x 10 cm x 23.75 cm, Red and Brown)"
                        price={369} 
                        image="https://images-eu.ssl-images-amazon.com/images/I/41VWOAlrQYL._AC_SX184_.jpg"
                        rating={4}
                    />
                    <Product 
                        id="64"
                        title="Vyomika Decor Spiritual Handicrafted Pooja Jhula | Swing | Nand Gopal Palana I (Jhula)"
                        price={538} 
                        image="https://images-eu.ssl-images-amazon.com/images/I/51Y6SdA4pGL.jpg"
                        rating={5}
                    />
                    <Product 
                        id="65"
                        title='Pigeon By Stovekraft Mio Aluminium Gift Set, Red (8 Pieces)' 
                        price={1099} 
                        image="https://images-eu.ssl-images-amazon.com/images/I/41eLuiEUgSL._AC_US160_FMwebp_QL70_.jpg"
                        rating={4}
                    />
                    <Product 
                        id="66"
                        title='Prestige PIC 20 1200 Watt Induction Cooktop with Push button (Black)' 
                        price={1500} 
                        image="https://images-eu.ssl-images-amazon.com/images/I/412kFi4mYBL._AC_US160_FMwebp_QL70_.jpg"
                        rating={3}
                    />
                </div>
            </div>
        </div>
    );
}

export default Kitchen;