import React from "react";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top mb-5">
            <div className="container">
                {/* Logo */}
                <div className="navbar-brand">
                    <Link href="/">
                        <Image
                            src="/LOGOS-GOMIND.png"
                            alt="Logo"
                            width={40}
                            height={40}
                        />
                    </Link>
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
                            <Link className="nav-link" href="#expertise">
                                Notre Expertise
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" href="#organisation">
                                Organisation
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" href="#jobboard">
                                Job Board
                            </Link>
                        </li>
                    </ul>
                </div>

                {/* Bouton à droite */}
                <Link
                    className="btn btn-primary"
                    href="/blog"
                    style={{
                        backgroundColor: "#061D3F",
                        borderColor: "#061D3F",
                    }}
                >
                    Notre Blog
                </Link>
            </div>
        </nav>
    );
};

export default Navbar;