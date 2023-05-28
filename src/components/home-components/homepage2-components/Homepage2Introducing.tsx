import {FC} from 'react';
import { Link } from "react-router-dom";
import "styles/homepage2-style/Homepage2Introducing.scss"
import phone from "assets/image/feature/iphone-black.jpg"
import logo from "assets/image/logo.png"
import appStore from "assets/image/app/appple-store.jpg"
import gPlay from "assets/image/app/google-play.jpg"
import support from "assets/image/icons/supported-services.png"

const Homepage2Introducing:FC = () => {
    return (
        <div className="Homepage2Introducing">
            <div className="Homepage2Introducing__img">
                <img src={phone} alt="iphone-black" />
            </div>
            <div className="Homepage2Introducing__main">
                <Link to={"/"} className="Homepage2Introducing__main-logo">
                    <img src={logo} alt="logo" />
                </Link>
                <h2 className="Homepage2Introducing__main-title">
                    Introducing Game Changing Lifestyle Apps
                </h2>
                <p className="Homepage2Introducing__main-info">
                    The simple, intuitive app that makes it easy to make happy, manage your lifestyle, and work balances faster.
                </p>
                <div className="Homepage2Introducing__main-download main-download">
                    <a href=" " className="main-download__button">
                        <img src={appStore} alt="appStore" />
                    </a>
                    <a href=" " className="main-download__button">
                        <img src={gPlay} alt="gPlay" />
                    </a>
                </div>
                <div className="Homepage2Introducing__main-support">
                    <img src={support} alt="" />
                </div>
            </div>
        </div>
    );
}

export default Homepage2Introducing