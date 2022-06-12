import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import "./style.css";


function NavBar(props) {

    let homeClass = "";
    let certClass = "";
    let contactClass = "";

    switch (props.active) {
        case "home":
            homeClass = "active";
            break;

        case "achievements":
            certClass = "active";
            break;

        default: contactClass = "active";
    }

    let [bColor, setBColor] = useState("");
    useEffect(() => {

        if (props.scroll > window.innerHeight) {
            setBColor("darkblue");
        }
        else {
            setBColor("");
        }


    }, [props.scroll])


    return (
        <div>
            <header style={{ backgroundColor: bColor }}>
                
                <Link to="/" className="logo">Madhukar Temba</Link>
                <ul>
                    <li><Link to="/" className={homeClass}>Home</Link></li>
                    <li><Link to="/achievements" className={certClass}>Achievements</Link></li>
                    <li><Link to="/contact" className={contactClass}>Contact</Link></li>
                </ul>
            </header>

        </div>
    );
}

export default NavBar;