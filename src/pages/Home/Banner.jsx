import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const Banner = () => {
    return (
        <div>
                   <Carousel>
                <div>
                    <img src="./home/01.jpg" />
                </div>
                <div>
                    <img src="./home/02.jpg" />
                </div>
                <div>
                    <img src="./home/03.png" />
                </div>
                <div>
                    <img src="./home/04.jpg" />
                </div>
                <div>
                    <img src="./home/05.png" />
                </div>
                <div>
                    <img src="./home/06.png" />
                </div>
            </Carousel>
        </div>
    );
};

export default Banner;