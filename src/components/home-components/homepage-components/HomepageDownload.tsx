import React, {FC} from 'react';
import phone from "../../../assets/image/mobile.png";
import "styles/homepage-style/HomepageDownload.scss"

const HomepageDownload:FC = () => {
    return (
        <div className="HomepageDownload">
            <div className="HomepageDownload__decor">
                <div className="HomepageDownload__decor-container1">
                </div>
                <div className="HomepageDownload__decor-container2">
                </div>
                <div className="HomepageDownload__decor-container3">
                </div>
                <div className="HomepageDownload__decor-container4">
                </div>
                <div className="HomepageDownload__decor-container5">
                </div>
                <div className="HomepageDownload__decor-container6">
                </div>
                <div className="HomepageDownload__decor-container7">
                </div>
                <div className="HomepageDownload__decor-container8">
                </div>
                <div className="HomepageDownload__decor-container9">
                </div>
                <div className="HomepageDownload__decor-container10">
                </div>
                <div className="HomepageDownload__decor-container11">
                </div>
            </div>
            <div className="HomepageDownload__main">
                <div className="home-info HomepageDownload__main-info">
                    <h1 className="home-info__title">
                        Showcase your app with Small Apps
                    </h1>
                    <p className="home-info__text">
                        Besides its beautiful design. Lapp is an incredibly rich core framework for you to showcase your App.
                    </p>
                    <button className="home-info__button">
                        Download now
                    </button>
                </div>
                <div className="home-img HomepageDownload__main-img">
                    <img src={phone} alt="phone" className="home-img__content"/>
                </div>
            </div>
        </div>
    );
};

export default HomepageDownload;