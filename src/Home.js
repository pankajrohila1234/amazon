import React from 'react';
import './Home.css';
import Product from './Product';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
// import AwesomeSlider from 'react-awesome-slider';
// import 'react-awesome-slider/dist/styles.css';


const Home = () => {
    const items = [
        <img src="https://www.accc.gov.au/sites/www.accc.gov.au/files/Samsung%20Pool.PNG" className="home__image1" alt="" />,
        <img src="https://static.vecteezy.com/system/resources/thumbnails/000/675/726/small/Autumn_Sale_Hand_Drawn_Autumn_calligraphy_with_falling_leaves_Banner_shopping_sale.jpg"className="home__image2" alt="" />,
        <img src="https://www.brandsolutions.com.au/wp-content/uploads/tcl-2.png"className="home__image3" alt="" />,
        <img src="https://image.shutterstock.com/image-photo/spring-sale-concept-white-blank-260nw-1680903163.jpg"className="home__image4" alt="" />,
    ]

// https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg

    const settings = {
        autoPlay: true,
        autoPlayInterval: 3000, 
        mouseTracking: true,
        animationDuration: 1500, 
        AutoPlayStrategy: 'action',
        infinite: true,
        // disableButtonsControls: true, 
        disableDotsControls: true, 
    }

    return (
        <div className="home">
            <div className="home__container">
                <AliceCarousel {...settings} className="alice-carousel" items={items} />
                
                <div className="home__row">
                    <Product 
                        id="1"
                        title='The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback' 
                        price={523} 
                        image="https://images-na.ssl-images-amazon.com/images/I/41Q419CMtfL._SX325_BO1,204,203,200_.jpg"
                        rating={5}
                    />
                    <Product 
                        id="2"
                        title="Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl"
                        price={17374}
                        rating={4}
                        image="https://images-na.ssl-images-amazon.com/images/I/81O%2BGNdkzKL._AC_SX450_.jpg"
                    />
                    <Product 
                        id="3"
                        title='Apple Watch Series 3 (GPS, 38mm) - Space Grey Aluminium Case with Black Sport Band' 
                        price={20900} 
                        image="https://m.media-amazon.com/images/I/71WgOCvKwrL._AC_UL320_.jpg"
                        rating={5}
                    />
                    <Product 
                        id="4"
                        title='New Apple iPhone 12 Pro Max (256GB) - Graphite' 
                        price={139900} 
                        image="https://m.media-amazon.com/images/I/71XXJC7V8tL._AC_UY218_.jpg"
                        rating={5}
                    />
                </div>

                <div className="home__row">
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

                <div className="home__row">
                    <Product
                        id="9"
                        title="Logo Maroon T-Shirt for Men & Women"
                        price={500}
                        rating={4}
                        image="https://m.media-amazon.com/images/I/51Ex6a-3-LL._AC_UL320_.jpg"
                    />
                    <Product
                        id="10"
                        title="ECOVACS Deebot 500 Robots Vacuum Cleaner with Robotic Smart APP Control, Max Mode Suction Power, 3-Stage Cleaning System Compatible with Alexa (Black)"
                        price={15900}
                        rating={4}
                        image="https://m.media-amazon.com/images/I/61T1Xz4UiTL._AC_UL320_.jpg"
                    />
                    <Product
                        id="11"
                        title="Homesake® Tea Light Candle Holder for Home Decoration, Home Room Decor Items Moroccan Multicolor Mosaic Glass"
                        price={450}
                        rating={4}
                        image="https://m.media-amazon.com/images/I/81VKKLl4lFL._AC_UL320_.jpg"
                    />
                
                </div>
            </div>
        </div>
    );
}

export default Home;