import React, {FC} from 'react';
import "styles/homepage-style/HomepageRounded.scss"
import {regular, solid} from "@fortawesome/fontawesome-svg-core/import.macro";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const HomepageRounded: FC = () => {
    return (
        <div className="HomepageRounded">
            <div className="HomepageRounded__block">
                <FontAwesomeIcon icon={solid("fill-drip")} className="fill-drip HomepageRounded__block-icon"/>
                <h3 className="HomepageRounded__block-title">
                    Themes Made Easy
                </h3>
                <p className="HomepageRounded__block-text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam non, recusandae tempore ipsam
                    dignissimos molestias.
                </p>
            </div>
            <div className="HomepageRounded__block">
                <FontAwesomeIcon icon={regular("sun")} className="sun HomepageRounded__block-icon"/>
                <h3 className="HomepageRounded__block-title">
                    Powerful Design
                </h3>
                <p className="HomepageRounded__block-text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam non, recusandae tempore ipsam
                    dignissimos molestias.
                </p>
            </div>
            <div className="HomepageRounded__block">
                <FontAwesomeIcon icon={regular("comment")} className="comment HomepageRounded__block-icon"/>
                <h3 className="HomepageRounded__block-title">
                    Creative Content
                </h3>
                <p className="HomepageRounded__block-text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam non, recusandae tempore ipsam
                    dignissimos molestias.
                </p>
            </div>
        </div>
    );
};

export default HomepageRounded;