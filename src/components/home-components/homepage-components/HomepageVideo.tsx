import React, {FC, useState} from 'react';
import "styles/homepage-style/HomepageVideo.scss"
import {regular} from "@fortawesome/fontawesome-svg-core/import.macro";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const HomepageVideo: FC = () => {
    const [onVideo, setOnVideo] = useState<Boolean>(false);

    const onOfVideo = () => {
        setOnVideo(!onVideo);
    }

    return (
        <div className="HomepageVideo">
            <div className="video-content">
                <h3 className="video-content__title">
                    Watch Our Promo Video
                </h3>
                <p className="video-content__info">
                    Vivamus suscipit tortor eget felis porttitor volutpat. Curabitur arcu erat, accumsan id imperdiet
                    et, porttitor at sem. Vivamus
                </p>
                <button className="video-content__button" onClick={onOfVideo}>
                    <FontAwesomeIcon icon={regular("circle-play")} className="video-content__button-svg"/>
                </button>
                {onVideo &&
                <iframe className="video-content__video" width="900" height="500"
                        src="https://www.youtube.com/embed/jrkvirglgaQ"
                        title="biztrox Hugo Theme Installation" frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen>
                </iframe>
                }
                {onVideo &&
                <div className="video-content__background" onClick={onOfVideo}>
                </div>
                }
            </div>
        </div>
    );
};

export default HomepageVideo;