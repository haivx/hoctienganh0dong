import React from "react";
import { Link } from "react-router-dom";
import "./index.scss";

const Header = () => {
    return (
        <div className="header-custom">
            <Link to="/login">Login</Link>
        </div>
    );
};

export default Header;
