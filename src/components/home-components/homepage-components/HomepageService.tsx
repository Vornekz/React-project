import React, {FC} from 'react';
import {regular, solid} from "@fortawesome/fontawesome-svg-core/import.macro";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {IconDefinition, IconName} from "@fortawesome/free-regular-svg-icons";
import phone from "assets/image/feature/iphone-ipad.jpg"
import "styles/homepage-style/HomepageService.scss"

const HomepageService:FC = () => {
    interface servInf {
        svg: IconName,
        title: string,
        text: string,
        definition: IconDefinition,
    }

    const serviceInfo:servInf[] = [
        {
            svg: "bookmark",
            title: "Easy Prototyping",
            text: "Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Curabitur aliquet quam id dui",
            definition: regular("bookmark")
        },
        {
            svg: "heart-pulse",
            title: "Sensor Bridge",
            text: "Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Curabitur aliquet quam id dui",
            definition: solid("heart-pulse")
        },
        {
            svg: "chart-column",
            title: "Strategist",
            text: "Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Curabitur aliquet quam id dui",
            definition: solid("chart-column")
        },
        {
            svg:"table-list",
            title: "Art Direction",
            text: "Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Curabitur aliquet quam id dui",
            definition: solid("table-list")
        }
    ]

    return (
        <div className="HomepageService">
            <div className="HomepageService__header">
                <h2 className="HomepageService__header-title">
                    An Interface For Lifestyle
                </h2>
                <p className="HomepageService__header-subtitle">
                    Small Apps makes it easy to stay on top of your Life Style. No late tasks. No gimmicks.
                </p>
            </div>
            <div className="HomepageService__main">
                <div className="HomepageService__main-img">
                    <img src={phone} alt="phone"/>
                </div>
                <div className="HomepageService__main-info service-info">
                    {serviceInfo.map(item =>
                        <div className="service-info__block" key={item.svg}>
                            <FontAwesomeIcon icon={item.definition} className={`${item.svg} service-info__block-svg`}/>
                            <h3 className="service-info__block-title">{item.title}</h3>
                            <p className="service-info__block-text">{item.text}</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default HomepageService;