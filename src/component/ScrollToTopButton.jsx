import React, { useEffect, useState } from "react";
import { MdVerticalAlignTop } from "react-icons/md";

const ScrollToTopButton = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 200) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <>
            {isVisible && (
                <button className="scroll-to-top" onClick={scrollToTop}>
                    <MdVerticalAlignTop />
                </button>
            )}
        </>
    );
};

export default ScrollToTopButton;
