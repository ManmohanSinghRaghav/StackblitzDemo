export const QuoteCard = (props) => {
    return (
        <>
            <div className={`quote-container ${props.theme}`} data-quotes-wala="">
                <div className="quote-author__img" data-quotes-wala="">
                    <img src={props.img} alt="Quote author avatar" className="profile" data-quotes-wala="" width="460" height="460" loading="lazy" decoding="async" />
                    <div className="quote-author__img__logo" data-quotes-wala="">
                        <img src={props.logo} alt="Quote author's associated organization" data-quotes-wala="" width="2192" height="2500" loading="lazy" decoding="async" />
                    </div>
                </div>
                <div className="quote-content" data-quotes-wala="">
                    <div className="quote" data-quotes-wala="">{props.quote}</div>
                    <div className="quote-author" data-quotes-wala="">
                        <span className="quote-author__name" data-quotes-wala="">{props.auth}</span>
                        <span className="quote-author__subtitle" data-quotes-wala="">{props.desc}</span>
                    </div>
                </div>
            </div>
        </>
    )
}