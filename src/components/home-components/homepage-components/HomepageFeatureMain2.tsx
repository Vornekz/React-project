import React, {FC} from 'react';
import {Link} from "react-router-dom";
import {HomepageFuture} from "../../../types/types";

const HomepageFeatureMain1:FC<HomepageFuture> = ({photo}) => {
    return (
        <>
            <h3 className="HomepageFeature__main-title">
                Increase your productivity with&nbsp;
                <Link to={"/FAQ"}>
                    Small Apps
                </Link>
            </h3>
            <p className="HomepageFeature__main-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat.
            </p>
            <p className="HomepageFeature__main-footer">
                "InVision is a window into everything that's being designed
                at Twitter. It gets all of our best work
                in one place."
            </p>
            <div className="HomepageFeature__main-who">
                <img src={photo} alt="photo"/>
                <p>Denys Andrew , Themefisher.com</p>
            </div>
        </>
    );
};

export default HomepageFeatureMain1;