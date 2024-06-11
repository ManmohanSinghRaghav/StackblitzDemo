import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ModalRoot } from './ModalRoot';

function Navbar(props) {
    const [toggleNav, setToggle] = useState(false);
    const [navData, setnav] = useState();

    useEffect(() => {
        if (toggleNav) {
            setnav(<ModalRoot />)
            document.body.setAttribute('style', 'overflow: hidden;');
            document.querySelector('#top-nav').setAttribute('class', 'modal-open');
            document.querySelector('.open-Btn').setAttribute('class', 'iconAll Icon-Bars menu-Button-3 open-Btn');
            document.querySelector('.close-Btn').setAttribute('class', 'iconAll Icon-X menu-Button-3 close-Btn active-Btn');
        } else {
            setnav();
            document.body.setAttribute('style', 'overflow: unset;');
            document.querySelector('#top-nav').setAttribute('class', '');
            document.querySelector('.open-Btn').setAttribute('class', 'iconAll Icon-Bars menu-Button-3 open-Btn active-Btn');
            document.querySelector('.close-Btn').setAttribute('class', 'iconAll Icon-X menu-Button-3 close-Btn');
        }
    }, [toggleNav]);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 50) {
                document.querySelector('#top-nav').setAttribute('class', 'scrolling');
            } else {
                document.querySelector('#top-nav').setAttribute('class', '');
            }
        })
    }, [])

    return (
        <>
            <nav id="top-nav" data-navbar="" className="">
                <div className="logo-container" data-nav-ka-logo="">
                    <Link to="/" className="Link-style-Def logo-link" data-nav-ka-logo="">
                        <span className="logo-image" data-nav-ka-logo="">
                        </span>
                        <span className="visually-hidden" data-nav-ka-logo="">StackBlitz</span>
                    </Link>
                </div>
                <div className="nav-links" data-navbar="">
                    <button className="menu-Button-1" onMouseDown={() => setToggle(toggleNav ? false : true)} aria-expanded={`${toggleNav}`}>
                        <span className="visually-hidden">Toggle Menu</span>
                        <span className="menu-Button-2">
                            <span className="iconAll Icon-X menu-Button-3 close-Btn" style={{ width: '22px', height: '22px', backgroundColor: '#fff' }}></span>
                            <span className="iconAll Icon-Bars menu-Button-3 open-Btn active-Btn" style={{ width: '22px', height: '22px', backgroundColor: '#fff' }}></span>
                        </span>
                    </button>
                    <ul className="links" data-nav-ke-link="">
                        <li data-nav-ke-link="">
                            <Link className="Link-style-Def" to="/" data-nav-ke-link="">Docs</Link>
                        </li>
                        <li data-nav-ke-link="">
                            <Link className="Link-style-Def" to="/" data-nav-ke-link="">Pricing</Link>
                        </li>
                        <li data-nav-ke-link="">
                            <Link className="Link-style-Def" to="/" data-nav-ke-link="">Enterprise</Link>
                        </li>
                        <li data-nav-ke-link="">
                            <Link className="Link-style-Def" to="/" data-nav-ke-link="">Design Systems</Link>
                        </li>
                        <li data-nav-ke-link="">
                            <Link className="Link-style-Def" to="/" data-nav-ke-link="">Blog</Link>
                        </li>
                    </ul>
                    <div className="navAuthBtn mobHide">
                        <Link to="/" className="Link-style-Def Link-Style-1">Sign in</Link>
                        <Link to="/" className="Link-style-Def Link-Style-1 accentLinkBlue">Get started</Link>
                    </div>
                </div>
            </nav>
            {navData}
        </>
    )
}

export default Navbar;