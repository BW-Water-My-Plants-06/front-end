import React from "react";
import {Link} from "react-router-dom";

const Footer=()=>{ 
    return (
        <footer>
            <div>
                <p>Copyright © Water My Plants 2021 </p>
                <Link className= 'route-link' to= '/Contact'>
                    Contact Us
                </Link>
                <Link className= 'route-link' to= '/about'>
                    About Us
                </Link>
            </div>
        </footer>
    );
};

export default Footer;