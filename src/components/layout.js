import React, { Fragment, useState, useEffect } from "react";
import { Link } from "gatsby";
import "../styles/header.scss";

export default function Layout({ children }) {
    const [show, handleShow] = useState(false);

    const showNavBar = () => {
        if (window.scrollY > 100) {
            handleShow(true);
        } else {
            handleShow(false);
        };
    };

    useEffect(() => {
        window.addEventListener("scroll", showNavBar);
        return () => window.removeEventListener("scroll", showNavBar);
    }, []);

    return (
        <Fragment>
            <header className={`header ${show && 'activeHeader'}`}>
                <div className="container">
                    <div className="row">
                        <div className="header__logo col-2">
                            <Link to="/">Khalid</Link>
                        </div>
                        <nav className="header__nav col-10">
                            <ul>
                                <li><Link to="/">Home</Link></li>
                                <li><Link to="/">Projects</Link></li>
                                <li><Link to="/">Blog</Link></li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </header>
            {children}
        </Fragment>
    );
}