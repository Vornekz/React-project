import { brands } from "@fortawesome/fontawesome-svg-core/import.macro";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FC } from "react";
import { Link } from "react-router-dom";
import "styles/homepage-style/HomepagePlatform.scss"


const HomepagePlatform:FC = () => {
    return (
        <div className="HomepagePlatform">
            <h2 className="HomepagePlatform__title">
                It's time to change your mind
            </h2>
            <h3 className="HomepagePlatform__subtitle">
                Download over 2 million humans .Get Small Apps free forever! We say you won’t look back.
            </h3>
            <div className="HomepagePlatform__buttons">
                <Link to="/ComingSoon" className="HomepagePlatform__buttons-button">
                    <FontAwesomeIcon icon={brands("apple")} className="apple HomepagePlatform__icon"/>
                    <p>Iphone</p>
                </Link>
                <Link to="/ComingSoon" className="HomepagePlatform__buttons-button">
                    <FontAwesomeIcon icon={brands("android")} className="android HomepagePlatform__icon"/>
                    <p>Android</p>
                </Link>
                <Link to="/ComingSoon" className="HomepagePlatform__buttons-button">
                    <FontAwesomeIcon icon={brands("windows")} className="windows HomepagePlatform__icon"/>
                    <Link to="/ComingSoon"/>
                    <p>Windows</p>
                </Link>
            </div>
        </div>
    );
};

export default HomepagePlatform;