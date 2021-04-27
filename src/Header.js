import React, { useState } from 'react';
import './Header.css';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { Link, useHistory } from 'react-router-dom';
import { useStateValue } from './StateProvider';
import { auth } from './firebase';
import 'react-widgets/dist/css/react-widgets.css';


const Header = () => {

    const [{ basket, user }, dispatch] = useStateValue();
    const history = useHistory();

    const handleAuthentication = () => {
        if (user) {
            auth.signOut();
        }
    }


    return (
        <div className="header">
            <Link to='/'>
            <img alt="" className="header__logo" src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" />
            </Link>

            <div className="header__search">
                <button className="header__button" onClick={() => history.push('./electronics')}>Electronics</button>
                <button className="header__button" onClick={() => history.push('./books')}>Books</button>
                <button className="header__button" onClick={() => history.push('./clothing')}>clothing</button>
                <button className="header__button" onClick={() => history.push('./jewellery')}>Jewellery</button>
                <button className="header__button" onClick={() => history.push('./kitchen')}>Home and Kitchen</button>
            </div>

            <div className="header__nav">
                <Link to={!user && '/login'} style={{textDecoration: 'none'}}>
                    <div onClick={handleAuthentication} className="header__option">
                        <span className="header__optionLineOne">Hello {!user ? 'Guest' : user.email}</span>
                        <span className="header__optionLineTwo">{user ? 'Sign Out' : 'Sign In'}</span>
                    </div>
                </Link>

                <Link to="/orders" style={{textDecoration: 'none'}}>
                    <div className="header__option">
                        <span className="header__optionLineOne">Returns</span>
                        <span className="header__optionLineTwo">Orders</span>
                    </div>
                </Link>

                {/* <div className="header__option">
                    <span className="header__optionLineOne">Your</span>
                    <span className="header__optionLineTwo">Prime</span>
                </div> */}

                <Link to="/checkout" style={{textDecoration: 'none'}}>
                    <div className="header__optionBasket">
                        <ShoppingBasketIcon />
                        <span className="header__OptionLineTwo header__basketCount">
                            {basket?.length}
                        </span>
                    </div>
                </Link>

            </div>   
        </div>
    );
}

export default Header;