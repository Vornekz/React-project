import React, {FC} from 'react';
import "styles/homepage-style/HomepageFeature.scss"
import {HomepageProps} from "types/types";

const HomepageFeature: FC<HomepageProps> = ({order, phone, homePage}) => {
    return (
        <div className="HomepageFeature" style={{order: order}}>
            <div className="HomepageFeature__img" style={{order: order}}>
                <img src={phone} alt="phone"/>
            </div>
            <div className="HomepageFeature__main">
                {homePage}
            </div>
        </div>
    );
};

export default HomepageFeature;