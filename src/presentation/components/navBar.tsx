import React from "react";

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top mb-5">
            <div className="container">
                {/* Logo */}
                <div className="navbar-brand">
                    <link rel="stylesheet" href="/"/>
                    <img
                        src="LOGOS-GOMIND.png" // Remplacez par le chemin de votre logo
                        alt="Logo"
                        style={{ height: "40px" }}
                    />
                </div>

                {/* Burger Menu (pour mobile) */}
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                {/* Liens */}
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <a className="nav-link" href="#expertise">
                                Notre Expertise
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#organisation">
                                Organisation
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#jobboard">
                                Job Board
                            </a>
                        </li>
                    </ul>
                </div>

                {/* Bouton à droite */}
                <a
                    className="btn btn-primary"
                    href="/blog"
                    style={{
                        backgroundColor: "#061D3F",
                        borderColor: "#061D3F",
                    }}
                >
                    Notre Blog
                </a>
            </div>
        </nav>
    );
};

export default Navbar;