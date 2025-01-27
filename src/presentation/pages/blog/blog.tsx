import React, {useEffect, useState} from "react";
import Articles from "@/presentation/pages/blog/component/articles";

const BlogPage: React.FC = () => {
    const [scrollOffset, setScrollOffset] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            setScrollOffset(window.scrollY);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            {/* Header avec effet Parallax */}
            <header className="masthead" style={{transform: `translateY(${scrollOffset * 0.5}px)`}}>
                <div className="overlay"></div>
                <div className="container mt-5">
                    <div className="row">
                        <div className="col-md-10 col-lg-8 mx-auto position-relative mt-5">
                            <div className="site-heading text-white text-center">
                                <h1>Gomind Blog</h1>
                                <span className="subheading">Transmettre l&#39;esprit de Gomind</span>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            {/* Contenu principal */}
            <Articles/>
        </>
    );
};

export default BlogPage;