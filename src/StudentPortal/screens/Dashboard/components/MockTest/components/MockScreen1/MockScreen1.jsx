import React from 'react'
import MediaBox from '../../../PracticeSheets/components/MediaBox/MediaBox'
import "./MockScreen1.css"
import Video from "../../../../../../assets/videos/droneview.mp4"

const MockScreen1 = () => {
    return (
        <>
            <div className="mock__question_text">Please start the film in order to familiarise yourself with the situation.</div>
            <div className="mock__screen1">
                <div className="mack__screen1_left">
                    <MediaBox video={Video} />
                </div>
                <div className="mack__screen1_right">
                    <div className="start__film_btn">START FILM</div>
                    <div className="mock__screen1_label">You can watch the film a total of <span>5</span> times.</div>
                </div>
            </div>
            <div className="mock__bottom_btns"></div>
        </>
    )
}

export default MockScreen1;
