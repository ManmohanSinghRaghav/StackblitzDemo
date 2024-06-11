import { useEffect, useState } from "react";
import Banner from "../Components/Banner";
import GridTable from "../Components/GridTable";
import Navbar from "../Components/Navbar";
import HomeText from "../Components/HomeText";
import { FooterBlock } from "../Components/Footer";
import { Link } from "react-router-dom";
import { QuoteCard } from "../Components/QuoteContainer";
import { SmallCard } from "../Components/smallCards";

const LogoGridArray = [
    {
        src: "https://stackblitz.com/_astro/google.BKhN6lqA_LbH4h.svg",
        alt: "Google",
        width: "201",
        height: "67"
    },
    {
        src: "https://stackblitz.com/_astro/meta.BZYPTU9O_1lLsls.svg",
        alt: "Meta",
        width: "201",
        height: "42"
    },
    {
        src: "https://stackblitz.com/_astro/shopify.ByHtukiT_1J8PIf.svg",
        alt: "Shopify",
        width: "104",
        height: "30"
    },
    {
        src: "https://stackblitz.com/_astro/salesforce.C_wubRL__2p0KMc.svg",
        alt: "Salesforce",
        width: "201",
        height: "46"
    },
    {
        src: "https://stackblitz.com/_astro/intel.BTF2Cw1X_Z2kTjoX.svg",
        alt: "Intel",
        width: "201",
        height: "85"
    },
    {
        src: "https://stackblitz.com/_astro/mozilla.CBnnQB51_2u8144.svg",
        alt: "Mozilla",
        width: "201",
        height: "59"
    },
    {
        src: "https://stackblitz.com/_astro/cloudflare.Px0iUVCo_Z1CNC1x.svg",
        alt: "Cloudflare",
        width: "200",
        height: "67"
    },
    {
        src: "https://stackblitz.com/_astro/stripe.CFJCsvvZ_5RvUh.svg",
        alt: "Stripe",
        width: "200",
        height: "84"
    }
]

const TableDataArray = [
    {
        head_: 'Boot time',
        stz_: 'Milliseconds',
        leg_: 'Minutes'
    },
    {
        head_: 'Zero network latency',
        stz_: '',
        leg_: 'Minutes'
    },
    {
        head_: 'Work offline',
        stz_: '',
        leg_: 'Minutes'
    },
    {
        head_: 'Easily debug',
        stz_: '',
        leg_: 'Minutes'
    },
    {
        head_: 'broken containers',
        stz_: '',
        leg_: 'Minutes'
    },
    {
        head_: 'Reset broken containers',
        stz_: 'Page refresh',
        leg_: 'Not possible'
    }

]
export default function Home() {
    return (
        <>
            <Banner />
            <Navbar />
            <div data-theme="dark" className="container theme_dark home-intro" data-intro-pura="" data-intro-wrappers="">
                <div className="container__content " data-intro-pura="" data-intro-wrappers="">
                    <HomeText />
                    <p className="home_Blur" data-intro-pura="">
                        Collaborate on web development without the hassle of setting up local environments.
                        StackBlitz lets you <strong data-intro-pura=""> write</strong>
                        , <strong data-intro-pura="">run</strong>
                        , and <strong data-intro-pura="">debug</strong> frontend code directly in your browser.
                    </p>
                    <div className="home-intro__button-container" data-intro-pura="">
                        <Link to="/" className="Link-style-Def Link-Style-1 accentLinkBlue size-thoda-bada"> Create your first project</Link>
                        <Link to="/" className="Link-style-Def Link-Style-1 size-thoda-bada"> Get a demo</Link>
                    </div>
                    <h3 id="start_new_project" data-intro-pura="">
                        Boot a shareable environment in <strong data-intro-pura="">milliseconds.</strong>
                    </h3>
                    <GridTable />
                </div>
            </div>
            <div data-theme="dark" className="container theme_dark_3 logo_grid" data-logo-wali-grid="" data-intro-wrappers="">
                <div className="container__content " data-logo-wali-grid="" data-intro-wrappers="">
                    <h3 data-logo-wali-grid="">
                        Loved by frontend and design system teams<br data-logo-wali-grid="" />
                        <strong data-logo-wali-grid="">
                            at the world's largest and most innovative companies</strong>
                    </h3>
                    <ul data-logo-wali-grid="">
                        {LogoGridArray.map((list) => {
                            return (
                                <li data-logo-wali-grid="">
                                    <img src={list.src} alt={list.alt} data-logo-wali-grid="" width={list.width} height={list.height} loading="lazy" decoding="async" />
                                </li>
                            );
                        })};
                    </ul>
                </div>
            </div>
            <QuoteCard
                theme="themeLight"
                img="https://stackblitz.com/_astro/ilya_grigorik.wwuGm1Qk_1AX5M8.webp"
                logo="https://stackblitz.com/_astro/shopify.BV2FCj8e_e70MY.svg"
                quote={<>
                    "StackBlitz unlocks a true one-click startup experience with the full stack running in the browser—
                    <strong>
                        its a game-changer.
                    </strong>"
                </>}
                auth="Ilya Grigorik"
                desc="Principal Engineer at Shopify"
            />
            <div data-theme="light" className="container theme__light section-padding" data-how-to-wala-part="" data-intro-wrappers="">
                <div className="container__content " data-how-to-wala-part="" data-intro-wrappers="">
                    <div className="section-heading" style={{}} data-sari-headings="">
                        <div className="heading" data-sari-headings="">
                            <span className="iconAll Icon-magic_wand" style={{ width: '22px', height: '22px', backgroundColor: 'var(--public-blue-text-neutral)' }}>
                            </span>
                            <h5 style={{ color: 'var(--public-blue-text-neutral)' }} data-sari-headings="">
                                For everything you can't do on local</h5>
                        </div>
                        <h1 data-sari-headings="">
                            Simplify how you collaborate on design systems &amp; frontend code</h1>
                        <p data-how-to-wala-part="">
                            <strong data-how-to-wala-part="">
                                Local environments are critical for web development, but they have some major limitations.</strong>
                        </p>
                        <p data-how-to-wala-part="">
                            When frontend and design system teams need to collaborate, they use StackBlitz to easily share secure development environments with a single URL.</p>
                    </div>
                    <div className="section-feature-list" data-list-ka="">
                        <div className="section-feature-list tight" data-how-to-wala-part="" data-list-ka="">
                            <div className="section-columns" data-how-to-wala-part="" data-all-paragraphs="">
                                <div data-how-to-wala-part="">
                                    <h3 data-how-to-wala-part="">
                                        Take the "ugh" out of bug reproductions</h3>
                                    <p data-how-to-wala-part="">
                                        <Link className="Link-style-Def" to="/"  rel="noopener" data-how-to-wala-part="">
                                            Share complete environments with only a URL</Link>
                                        and never spin up heavy local installations for a simple bug reproduction <strong data-how-to-wala-part="">
                                            ever again.</strong>
                                    </p>
                                    <p data-how-to-wala-part="">
                                        Provide the users of your internal design system or open source library with forkable reproduction template and spend less time reproducing bugs and more time squashing them.</p>
                                </div>
                                <img src="https://stackblitz.com/_astro/bug_reports.BGgRQnsM_ZUiMgO.webp" alt="Create instant bug report dev environments with StackBlitz" data-how-to-wala-part="" width="1345" height="958" loading="lazy" decoding="async" />
                            </div>
                            <div className="section-columns reverse" data-how-to-wala-part="" data-all-paragraphs="">
                                <div data-how-to-wala-part="">
                                    <h3 data-how-to-wala-part="">
                                        Ship live, interactive documentation</h3>
                                    <p data-how-to-wala-part="">
                                        Make it easy for your design system or open source users to get up and running quickly with live examples they can try out with a single click.</p>
                                    <p data-how-to-wala-part="">
                                        <Link className="Link-style-Def" to="/"  rel="noopener" data-how-to-wala-part="">
                                            Use the StackBlitz SDK</Link>
                                        to embed <strong data-how-to-wala-part="">
                                            actual code</strong>
                                        in your documentation, blog, or website or build fully customized experiences with the
                                        <Link className="Link-style-Def" to="/"  rel="noopener" data-how-to-wala-part="">
                                            WebContainer API</Link> .</p>
                                </div>
                                <img src="https://stackblitz.com/_astro/interactive_documentation.6m5EDrXi_Zdi3LG.webp" alt="Embed StackBlitz into documentation with the SDK for live coding examples" data-how-to-wala-part="" width="1345" height="957" loading="lazy" decoding="async" />
                            </div>
                            <div className="section-columns" data-how-to-wala-part="" data-all-paragraphs="">
                                <div data-how-to-wala-part="">
                                    <h3 data-how-to-wala-part="">
                                        Prototype new ideas</h3>
                                    <p data-how-to-wala-part="">
                                        Speed up your entire development process with <strong data-how-to-wala-part="">
                                            real time hot-reloading in the
                                            <Link className="Link-style-Def" to="/"  rel="noopener" data-how-to-wala-part=""> fastest dev environment ever made.</Link>
                                        </strong>
                                    </p>
                                    <p data-how-to-wala-part="">
                                        Don't let local configuration stand between you and building out your next great ideas.</p>
                                </div>
                                <img src="https://stackblitz.com/_astro/rapid_prototyping.B1aed1fE_ZVnnJ.webp" alt="Collaborate between different devices and rapidly prototype with StackBlitz" data-how-to-wala-part="" width="1345" height="958" loading="lazy" decoding="async" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <QuoteCard
                theme="themeLight"
                img="https://stackblitz.com/_astro/stephen_fluin.ddNByNR6_bM6uJ.webp"
                logo="https://stackblitz.com/_astro/google.YQtq5Y0Y_27GL4.svg"
                quote={<>
                    "Being able to instantly open and share environments has <strong>
                        significantly reduced our team's support burden</strong>
                    for bug reproductions and enabled rapid innovation."
                </>}
                auth="Stephen Fluin"
                desc="Developer Relations Lead at Google"
            />
            <div data-theme="dark" className="container theme_dark_2 section-padding" data-web-container-wala="" data-intro-wrappers="">
                <div className="container__content " data-web-container-wala="" data-intro-wrappers="">
                    <div className="section-heading" style={{}} data-sari-headings="">
                        <div className="heading" data-sari-headings="">
                            <span className="iconAll Icon-unicorn" style={{ width: '22px', height: '22px', backgroundColor: 'var(--public-blue-text-20)' }}></span>
                            <h5 style={{ color: 'var(--public-blue-text-20)' }} data-sari-headings="">
                                Powered by WebContainers
                            </h5>
                        </div>
                        <h1 data-sari-headings="">
                            <strong> Faster </strong> and
                            <strong> more secure </strong><br /> than local.
                        </h1>
                    </div>
                    <div className="section-columns" data-web-container-wala="" data-all-paragraphs="">
                        <SmallCard
                            url="https://blog.stackblitz.com/posts/introducing-webcontainers"
                            title={<>
                                <strong>Introducing WebContainers:</strong>
                                Run Node.js in your browser
                            </>}
                            subHead="Read the release"
                            bgImg="https://stackblitz.com/_astro/img/pages/home/card-bg-webcontainer.png"
                        />
                        <div data-web-container-wala="">
                            <p data-web-container-wala="">
                                StackBlitz is powered by WebContainers, the first WebAssembly-based micro operating system which boots entire development environments in milliseconds, securely within your browser tab.
                            </p>
                        </div>
                    </div>
                    <div className="section-columns" data-web-container-wala="" data-all-paragraphs="">
                        <div data-web-container-wala="">
                            <h3 data-web-container-wala="">What about online IDEs?</h3>
                            <p data-web-container-wala="">
                                <strong data-web-container-wala="">Legacy cloud-based IDEs</strong>
                                run on remote servers and
                                <strong data-web-container-wala="">stream the results back</strong>
                                to your browser. This approach yields
                                <strong data-web-container-wala="">few security benefits</strong>
                                and provides a
                                <strong data-web-container-wala="">worse experience</strong>
                                than your local machine in nearly every way.
                            </p>
                            <p style={{ paddingTop: '15px' }} data-web-container-wala="">
                                <strong data-web-container-wala="">
                                    With StackBlitz, all compute occurs inside your browser
                                </strong>
                                , making use of decades of speed and security innovations.
                            </p>
                        </div>
                        <table className="comparison-table" aria-label="Comparison with IDEs" data-table-wala="">
                            <thead data-table-wala="">
                                <tr data-table-wala="">
                                    <th data-table-wala=""></th>
                                    <th className="logo" data-table-wala="">
                                        <img alt="StackBlitz" src="https://stackblitz.com/_astro/img/brands/stackblitz-monotone.svg" data-table-wala="" />
                                    </th>
                                    <th data-table-wala="">Legacy Online IDEs</th>
                                </tr>
                            </thead>
                            <tbody data-table-wala="">
                                {TableDataArray.map((list) => {
                                    return (
                                        <tr data-table-wala="">
                                            <td data-table-wala="">{list.head_}</td>
                                            <td data-table-wala="">
                                                <div className="icon-label strong" data-table-wala="">
                                                    <span className="iconAll Icon-tick-mark" style={{ width: '16px', height: '16px', backgroundColor: 'var(--sb-foreground-highlight-high)' }}>
                                                    </span>
                                                    {list.stz_}
                                                </div>
                                            </td>
                                            <td data-table-wala="">
                                                <div className="icon-label" data-table-wala="">
                                                    <span className="iconAll Icon-crossX" style={{ width: '16px', height: '16px', backgroundColor: 'var(--sb-foreground-negative)' }}>
                                                    </span>
                                                    {list.leg_}
                                                </div>
                                            </td>
                                        </tr>
                                    )
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <QuoteCard
                theme='themeDark'
                img="https://stackblitz.com/_astro/rich_harris.F_h1motk_Z1VNrwu.webp"
                logo="https://stackblitz.com/_astro/svelte.OdrCPOQz_ZwWTF4.svg"
                quote={<>
                    "A secure, zero-install, always-current, collaborative EditorWrap that I can access on any machine? Create anything from a throwaway script to a to a full codebase with a single click?
                    <strong>Sign me the f$#k up.</strong>"
                </>}
                auth="Rich Harris"
                desc="Svelte &amp; SvelteKit creator"
            />
            <div data-theme="dark" className="container theme_dark_2 section-padding" data-end-wala-para="" data-intro-wrappers="">
                <div className="container__content " data-end-wala-para="" data-intro-wrappers="">
                    <div className="section-heading" style={{}} data-sari-headings="">
                        <div className="heading" data-sari-headings="">
                            <span className="iconAll Icon-magic-flask" style={{ width: '22px', height: '22px', backgroundColor: 'var(--public-blue-text-20)' }}></span>
                            <h5 style={{ color: 'var(--public-blue-text-20)' }} data-sari-headings="">
                                Loved by individuals, teams, and the Fortune 500
                            </h5>
                        </div>
                        <h1 data-sari-headings="">How will you use StackBlitz?</h1>
                        <p data-end-wala-para="">
                            From the open-source teams building the next generation of the web to enterprise design systems teams in the Fortune 500, we're working to make instant, secure-by-default, browser-based development a game-changer for everyone.
                        </p>
                    </div>
                    <div className="section-columns" data-end-wala-para="" data-all-paragraphs="">
                        <SmallCard
                            url="/design-systems"
                            title="StackBlitz for Design Systems"
                            subHead="Get more out of your design system"
                            bgImg="https://stackblitz.com/_astro/img/pages/home/card-bg-bytecode_alliance.png"
                        />
                        <SmallCard
                            url="/case-studies"
                            title="How Google uses StackBlitz"
                            subHead="Meet our customers"
                            bgImg="https://stackblitz.com/_astro/img/pages/home/card-bg-vite.png"
                        />
                    </div>
                </div>
            </div>
            <div data-theme="dark" className="container theme_dark_3 section-padding" data-last-block="" data-intro-wrappers="">
                <div className="container__content " data-last-block="" data-intro-wrappers="">
                    <h3 data-last-block="">
                        <strong data-last-block="">
                            See for yourself.</strong>
                        <br data-last-block="" />
                        Boot a fresh environment in <strong data-last-block="">
                            milliseconds.</strong>
                    </h3>
                    <Link className="Link-style-Def last-btn-style" to="/" data-last-block="" data-last-button="">
                        Create a new project
                    </Link>
                </div>
            </div>
            <FooterBlock />
        </>
    )
}