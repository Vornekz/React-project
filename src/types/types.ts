
export interface HomepageProps {
    order?: number
    phone: string
    homePage: JSX.Element
}

export interface HomepageFuture {
    photo: string
}

export interface SliderPerson {
    personPhoto: string,
    personName: string
}

export interface SliderItem {
    sliderInfo: string,
    sliderPerson: SliderPerson
}

