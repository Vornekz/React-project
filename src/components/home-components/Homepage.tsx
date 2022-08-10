import React, {FC} from 'react';
import "styles/Homepage.scss"
import phone1 from "assets/image/feature/feature-new-01.jpg"
import phone2 from "assets/image/feature/feature-new-02.jpg"
import photo from "assets/image/testimonial/feature-testimonial-thumb.jpg"
import HomepageDownload from "./homepage-components/HomepageDownload";
import HomepageRounded from "./homepage-components/HomepageRounded";
import HomepageFeature from "./homepage-components/HomepageFeature";
import HomepageFeatureMain1 from "./homepage-components/HomepageFeatureMain1";
import HomepageFeatureMain2 from "./homepage-components/HomepageFeatureMain2";
import HomepageService from "./homepage-components/HomepageService";
import HomepageVideo from "./homepage-components/HomepageVideo";

const Homepage:FC = () => {
    return (
        <div className="Homepage">
            <HomepageDownload/>
            <HomepageRounded/>
            <HomepageFeature phone={phone1} homePage={<HomepageFeatureMain1 photo={photo}/>}/>
            <HomepageFeature order={1} phone={phone2} homePage={<HomepageFeatureMain2 photo={photo}/>}/>
            <HomepageService/>
            <HomepageVideo/>
        </div>
    );
};

export default Homepage;