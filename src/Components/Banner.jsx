import { Link } from "react-router-dom";

function Banner() {
    return (
        <div className="top-banner" data-banner-wala="">
            <div className="top-banner_title" data-banner-wala="">
                <div className="top-banner_icon" data-banner-wala="">
                    <span className="iconAll Icon-PartyHorn" style={{ width: '20px', height: '20px', backgroundColor: '#fff', backgroundImage: 'linear-gradient(180deg, #9A19A8 0%, #E37CED 100%)' }}></span>
                </div>
                <span data-banner-wala="">Join our design systems event in SF on 6/26</span>
            </div>
            <Link className="Link-style-Def top-banner_link" to="/" data-banner-wala="">Learn More</Link>
        </div>
    )
}

export default Banner;