import React, {FC, useState} from 'react';
import Slider from "react-slick";
import "styles/homepage-style/HomepageSlider.scss"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {HomepageFuture, SliderItem} from "../../../types/types";

const HomepageSlider: FC<HomepageFuture> = ({photo}) => {
    const slideSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
    }

    const sliderItems: SliderItem[] = [
        {
            sliderInfo: "Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Donec sollicitudin molestie malesuada. Donec sollicitudin molestie malesuada. Pellentesque in ipsum id orci porta dapibus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque in ipsum id orci porta dapibus. Quisque velit nisi, pretium ut lacinia in, elementum id enim.",
            sliderPerson: {
                personPhoto: photo,
                personName: "Abraham Linkon, Themefisher.com"
            }
        },
        {
            sliderInfo: "Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Donec sollicitudin molestie malesuada. Donec sollicitudin molestie malesuada. Pellentesque in ipsum id orci porta dapibus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque in ipsum id orci porta dapibus. Quisque velit nisi, pretium ut lacinia in, elementum id enim.",
            sliderPerson: {
                personPhoto: photo,
                personName: "Abraham Linkon, Themefisher.com"
            }
        },
        {
            sliderInfo: "Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Donec sollicitudin molestie malesuada. Donec sollicitudin molestie malesuada. Pellentesque in ipsum id orci porta dapibus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque in ipsum id orci porta dapibus. Quisque velit nisi, pretium ut lacinia in, elementum id enim.",
            sliderPerson: {
                personPhoto: photo,
                personName: "Abraham Linkon, Themefisher.com"
            }
        },
        {
            sliderInfo: "Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Donec sollicitudin molestie malesuada. Donec sollicitudin molestie malesuada. Pellentesque in ipsum id orci porta dapibus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque in ipsum id orci porta dapibus. Quisque velit nisi, pretium ut lacinia in, elementum id enim.",
            sliderPerson: {
                personPhoto: photo,
                personName: "Abraham Linkon, Themefisher.com"
            }
        },

    ]

    const [sliderList, setSliderList] = useState(sliderItems)

    return (
        <div className="HomepageSlider">
            <Slider {...slideSettings}>
                {
                    sliderList.map((item, i) => {
                        return (
                            <div className="homepage-slider" key={i}>
                            <p className="homepage-slider__info">
                                {item.sliderInfo}
                            </p>
                            <div className="homepage-slider__person">
                                <div className="homepage-slider__person-img">
                                    <img src={item.sliderPerson.personPhoto} alt=""/>
                                </div>
                                <p className="homepage-slider__person-name">
                                    {item.sliderPerson.personName}
                                </p>
                            </div>
                        </div>
                        )
                    })
                }
            </Slider>
        </div>
    );
};

export default HomepageSlider;