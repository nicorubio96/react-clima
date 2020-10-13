import React from 'react';
const Header =({titulo})=>{
    return (
        <nav>
            <div className="nav-wrappen green darken-3">
             <a href="#!" className="brand-logo">{titulo}</a>

            </div>

        </nav>
    );
}

export default Header;