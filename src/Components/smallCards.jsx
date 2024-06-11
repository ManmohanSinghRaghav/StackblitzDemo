import { Link } from "react-router-dom";

export const SmallCard = (props) => {
    return (
        <Link className="Link-style-Def card-link" to={props.url} target="_self" rel="noopener" data-theme="light" data-small-cards="">
            <span className="title" data-small-cards="">{props.title}</span>
            <span className="subheading action" data-small-cards="">
                {props.subHead}
                <div className="icon-container" data-small-cards="">
                    <span className="iconAll Icon-arrow-rgt" style={{ width: '18px', height: '18px', backgroundColor: 'var(--icon-color)' }}></span>
                </div>
            </span>
            <img className="card-link-image" src={props.bgImg} alt="" data-small-cards="" />
        </Link>
    );
};