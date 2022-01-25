import React from 'react'
import Slider from "react-slick";
import "./slick.scss"
const Slick = () => {


    const number = [2,3,4,5,6,7,8,9]

    const addition =number.reduce((accum,items)=>{
        return items+accum
    },0)

    console.log("The sum of an array is ======", addition)




    var settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 23,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 15,
                    slidesToScroll: 1,
                    // infinite: true,
                    // dots: true
                }
            },
            {
                breakpoint: 700,
                settings: {
                    slidesToShow: 10,
                    slidesToScroll: 1,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 450,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <div>
            <div>
                {/* <h2> Responsive </h2> */}
                    <div className="slick__container">
                <Slider {...settings}>

                        <div className="number1">1</div>
                        <div className="number1">2</div>
                        <div className="number1">3</div>
                        <div className="number">4</div>
                        <div className="number">5</div>
                        <div className="number1">6</div>
                        <div className="number2">7</div>
                        <div className="number2">8</div>
                        <div className="number2">9</div>
                        <div className="number2">10</div>
                        <div className="number2">11</div>
                        <div className="number2">12</div>
                        <div className="number2">13</div>
                        <div className="number2">14</div>
                        <div className="number2">15</div>
                        <div className="number2">16</div>
                        <div className="number2">17</div>
                        <div className="number2">18</div>
                        <div className="number2">19</div>
                        <div className="number2">20</div>
                        <div className="number2">21</div>
                        <div className="number2">22</div>
                        <div className="number2">23</div>
                        <div className="number2">24</div>
                        <div className="number2">25</div>
                        <div className="number2">26</div>
                        <div className="number2">27</div>
                        <div className="number2">28</div>
                        <div className="number2">29</div>
                        <div className="number2">30</div>
                </Slider>
                    </div>
            </div>

        </div>
    )
}

export default Slick
