import { Link } from "react-router-dom"

const ListFooter = [
    {
        title: 'Products',
        list: [
            {
                url: "/",
                txt: 'Enterprise Server'
            },
            {
                url: "/",
                txt: 'Integrations'
            },
            {
                url: "/",
                txt: 'Design Systems'
            },
            {
                url: "/",
                txt: 'WebContainer API'
            },
            {
                url: "/",
                txt: 'Web Publisher'
            },
        ]
    },
    {
        title: 'Platform',
        list: [
            {
                url: "/",
                txt: 'Case Studies'
            },
            {
                url: "/",
                txt: 'Pricing'
            },
            {
                url: "/",
                txt: 'Privacy'
            },
            {
                url: "/",
                txt: 'Terms of Service'
            },
        ]
    },
    {
        title: 'Support',
        list: [
            {
                url: "/",
                txt: 'Community'
            },
            {
                url: "/",
                txt: 'Docs'
            },
            {
                url: "/",
                txt: 'Enterprise Sales'
            },
        ]
    },
    {
        title: 'Company',
        list: [
            {
                url: "/",
                txt: 'Blog'
            },
            {
                url: "/",
                txt: 'Careers'
            },
        ]
    }
]

const FooterList = (ele) => {
    return (
        <div className="footer__column" data-footer-ka="">
            <span className="footer__column__title" data-footer-ka="">
                {ele.title}
            </span>
            <ul className="footer__items" data-footer-ka="">
                {ele.lst.map((list) => {
                    return (
                        <li data-footer-ka="">
                            <Link className="Link-style-Def footer__item-link" to={list.url}  rel="noopener" data-footer-ka="">
                                {list.txt}
                            </Link>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export const FooterBlock = () => {
    return (
        <footer data-footer-ka="">
            <div data-theme="dark" className="container theme_dark " data-footer-ka="" data-intro-wrappers="">
                <div className="container__content " data-footer-ka="" data-intro-wrappers="">
                    <div className="footer__container" data-footer-ka="">
                        <img src="https://stackblitz.com/_astro/stackblitz-logo-color.C8-mRlxl_ZM8j2i.svg" className="footer__logo" alt="StackBlitz" data-footer-ka="" width="117" height="24" loading="lazy" decoding="async" />
                        <div className="footer__item-list" data-footer-ka="">
                            {ListFooter.map((MyList) => {
                                return <FooterList title={MyList.title} lst={MyList.list} />
                            })}
                        </div>
                    </div>
                    <div className="footer__general-links" data-footer-ka="">
                        <div className="terms-links" data-footer-ka="">
                            <li data-footer-ka="">
                                <Link className="Link-style-Def" to="/" data-footer-ka="">
                                    Terms of Service
                                </Link>
                            </li>
                            <li data-footer-ka="">
                                <Link className="Link-style-Def" to="/" data-footer-ka="">
                                    Privacy Policy
                                </Link>
                            </li>
                        </div>
                        <div className="social-links" data-footer-ka="">
                            <Link className="Link-style-Def" to="/"  rel="nofollow" data-footer-ka="">
                                <span className="iconAll Icon-twitter" style={{ width: '20px', height: '20px', backgroundColor: 'var(--sbb-dark-foreground)' }}>
                                </span>

                            </Link>
                            <Link className="Link-style-Def" to="/"  rel="nofollow" data-footer-ka="">
                                <span className="iconAll Icon-github" style={{ width: '20px', height: '20px', backgroundColor: 'var(--sbb-dark-foreground)' }}>
                                </span>

                            </Link>
                            <Link className="Link-style-Def" to="/"  rel="nofollow" data-footer-ka="">
                                <span className="iconAll Icon-discord" style={{ width: '20px', height: '20px', backgroundColor: 'var(--sbb-dark-foreground)' }}>
                                </span>

                            </Link>
                        </div>
                    </div>
                    <div className="footer__copyright" data-footer-ka="">
                        <p className="secondary" data-footer-ka="">
                            StackBlitz Codeflow and the Infinite Pull Request logo are trademarks of StackBlitz, Inc.</p>
                        <p data-footer-ka="">
                            © 2024 StackBlitz, Inc.</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}
