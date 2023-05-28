import {FC} from 'react';
import Homepage2Introducing from './homepage2-components/Homepage2Introducing';
import Homepage2Footer from './homepage2-components/Homepage2Footer';
import "styles/Homepage2.scss"

const Homepage2:FC = () => {
    return (
        <div className="Homepage2">
            <Homepage2Introducing/>
            <Homepage2Footer/>
        </div>
    );
};

export default Homepage2;