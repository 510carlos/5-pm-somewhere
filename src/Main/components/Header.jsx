import React, { useState } from "react";

function Header () {

    const [status, setStatus] = useState(false);
    const handleClick = e => setStatus(!status);

    var printStatus = status ? ' open' : '';

    return (
        <div id="twino-header" style={{
            backgroundColor: 'black',
            paddingBottom: '2px'
            }}>
            <div class="wrap" style={{
                position: 'relative',
                zindex: '1',
                paddingBottom: '25px',
                maxWidth: '1100px',
                marginLeft: 'auto',
                marginRight: 'auto'
                }}>
                <div onClick={handleClick} className={"menu-toggle"+printStatus} id="menu-toggle" role="button" tabindex="0">
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                <div class="site-title-wrapper">
                    <h1 class="site-title"><a href="https://theweekendisneverover.com/" rel="home">the WEEKEND is never over</a></h1>
                    <div class="site-description">It's a Lifestyle!</div>
                </div>
                <div class="main-navigation-container">
                    <nav id="site-navigation" className={"main-navigation" + printStatus}>
                    <div class="menu">
                            <ul>
                                <li class="current_page_item">
                                    <a href="https://theweekendisneverover.com/">Home</a>
                                </li>
                                <li class="page_item page-item-275">
                                    <a href="https://lifestyle.theweekendisneverover.com/">Lifestyle</a>
                                </li>
                                <li class="page_item page-item-275">
                                    <a rel="noopener noreferrer" target="_blank" href="https://www.etsy.com/shop/WeekendIsNeverOver">Shop</a>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
    )
}

export default Header;