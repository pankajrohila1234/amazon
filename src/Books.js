import React from 'react';
import './Books.css';
import Product from './Product';

const Books = () => {
    return (
        <div className="books">
            <div className="books__container">
                <img style={{width: "100vw"}} src="https://images-eu.ssl-images-amazon.com/images/G/31/VG-2019Dec/clearance_1500-X-250-Books.jpg" alt="" />
                <div className="books__row">
                    <Product 
                        id="1"
                        title='The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback' 
                        price={523} 
                        image="https://images-na.ssl-images-amazon.com/images/I/41Q419CMtfL._SX325_BO1,204,203,200_.jpg"
                        rating={5}
                    />
                    <Product 
                        id="21"
                        title='Think Like a Monk' 
                        price={400} 
                        image="https://m.media-amazon.com/images/I/81s6DUyQCZL._AC_UY218_.jpg"
                        rating={5}
                    />
                    <Product 
                        id="22"
                        title='The Alchemist' 
                        price={189} 
                        image="https://m.media-amazon.com/images/I/410llGwMZGL._SX144_.jpg"
                        rating={5}
                    />
                    <Product 
                        id="23"
                        title='Rich Dad Poor Dad : What The Rich Teach Their Kids About Money That the Poor and Middle Class Do Not!' 
                        price={260} 
                        image="https://m.media-amazon.com/images/I/91VokXkn8hL._AC_UY218_.jpg"
                        rating={5}
                    />
                </div>
                <hr />
                <div className="books__row">
                    <Product 
                        id="24"
                        title='The Secret: by Rhonda Byrne ' 
                        price={453} 
                        image="https://m.media-amazon.com/images/I/51FGx8kUv-L._AC_UY218_.jpg"
                        rating={5}
                    />
                    <Product 
                        id="25"
                        title='The Power of Your Subconscious Mind (DELUXE HARDBOUND EDITION)' 
                        price={380} 
                        image="https://m.media-amazon.com/images/I/9138VXjBfPL._AC_UY218_.jpg"
                        rating={5}
                    />
                    <Product 
                        id="26"
                        title='The 5 AM Club: Own Your Morning, Elevate Your Life' 
                        price={247} 
                        image="https://m.media-amazon.com/images/I/71eijJe2ntL._AC_UY218_.jpg"
                        rating={5}
                    />
                </div>
                <hr />
                <div className="books__row">
                    <Product 
                        id="27"
                        title='Great Stories for Children: by Ruskin Bond ' 
                        price={132} 
                        image="https://m.media-amazon.com/images/I/711hfHGE+cL._AC_UY218_.jpg"
                        rating={5}
                    />
                    <Product 
                        id="28"
                        title='The Best of Tenali Raman: by Rungeen Singh ' 
                        price={80} 
                        image="https://m.media-amazon.com/images/I/81bSnM5Pt1L._AC_UY218_.jpg"
                        rating={5}
                    />
                    <Product 
                        id="29"
                        title='Blossom Story Book for Kids in English | 7 to 8 Year Old | 31 Short Stories with Moral and Colourful Pictures | Best Bedtime Animal Tales for Children | Book C' 
                        price={150} 
                        image="https://m.media-amazon.com/images/I/71N+ooBFlnL._AC_UY218_.jpg"
                        rating={5}
                    />
                    <Product 
                        id="30"
                        title="Harry Potter and the Philosopher's Stone: by J.K. Rowling"
                        price={247} 
                        image="https://m.media-amazon.com/images/I/81YOuOGFCJL._AC_UL320_.jpg"
                        rating={5}
                    />
                </div>
            </div>
        </div>
    );
}

export default Books;