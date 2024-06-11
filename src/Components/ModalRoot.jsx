import { Link } from "react-router-dom"

export const ModalRoot = () => {
    return (
        <><div id="modal-root">
            <div className="Overlay_div_in">
                <div className="modal_div_in">
                    <ul className="this-link-All mob-All">
                        <li>
                            <Link className="Link-style-Def" to="/">Docs</Link>
                        </li>
                        <li>
                            <Link className="Link-style-Def" to="/">Pricing</Link>
                        </li>
                        <li>
                            <Link className="Link-style-Def" to="/">Enterprise</Link>
                        </li>
                        <li>
                            <Link className="Link-style-Def" to="/">Design Systems</Link>
                        </li>
                        <li>
                            <Link className="Link-style-Def" to="/">Blog</Link>
                        </li>
                        <li className="navAuthBtn02">
                            <div className="navAuthBtn MobileBtnVis">
                                <Link to="/" className="Link-style-Def Link-Style-1">Sign in</Link>
                                <Link to="/" className="Link-style-Def Link-Style-1 accentLinkBlue">Get started</Link>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            </div>
        </>
    )
}
