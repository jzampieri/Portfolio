import { useState, useEffect } from "react";
import './header.css'

function Header () {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            const scrollPos = window.scrollY;
            if (scrollPos > 0) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };
        window.addEventListener("scroll", onScroll);
        return () => {
            window.removeEventListener("scroll", onScroll);
        };
    }, []);

    return(
        <header className={`flex fixed w-full text-center items-center justify-around transition-all duration-500 ease-in-out ${isScrolled ? 'bg-preto h-16' : 'bg-dark h-20'}`}>
            <div>
                <h1 className="text-white text-lg">ZAMPIERI</h1>
            </div>
            <ul className="flex justify-around items-center space-x-4 text-cinza">
                <li className="inline-block">
                    <a href="" className="no-underline ml-4 font-exo relative visited:text-black hover:before:w-full hover:before:scale-x-0 hover:after:w-full hover:after:scale-x-100 hover:text-white transition">HOME</a>
                </li>
                <li className="inline-block">
                    <a href="" className="no-underline ml-4 font-exo relative visited:text-black hover:before:w-full hover:before:scale-x-0 hover:after:w-full hover:after:scale-x-100 hover:text-white transition">ABOUT</a>
                </li>
                <li className="inline-block">
                    <a href="" className="no-underline ml-4 font-exo relative visited:text-black hover:before:w-full hover:before:scale-x-0 hover:after:w-full hover:after:scale-x-100 hover:text-white transition">SKILLS</a>
                </li>
                <li className="inline-block">
                    <a href="" className="no-underline ml-4 font-exo relative visited:text-black hover:before:w-full hover:before:scale-x-0 hover:after:w-full hover:after:scale-x-100 hover:text-white transition">CONTACT</a>
                </li>
            </ul>
        </header>
    )
}

export default Header
