import React from 'react'
import "./RightBar.css"
import { ReactComponent as Notification } from "../../../../assets/icons/notification.svg"
import { ReactComponent as User } from "../../../../assets/icons/user.svg"
import { ReactComponent as ProfileOutline } from "../../../../assets/icons/profile-outline.svg"
import { ReactComponent as UnAnswered } from "../../../../assets/icons/unanswered.svg"
import { ReactComponent as RightAnswered } from "../../../../assets/icons/right-answered.svg"
import { ReactComponent as WrongAnswered } from "../../../../assets/icons/wrong-answered.svg"
import { ReactComponent as Forward } from "../../../../assets/icons/rightbar-farward.svg"
import { ReactComponent as Tick } from "../../../../assets/icons/rightbar-tick.svg"
import ProfileImage from "../../../../assets/images/profile2.png"
import GaugeChart from "react-gauge-chart";
const RightBar = () => {
    return (
        <div className="right__bar">

            {/* Header */}
            <div className="rightbar__header">
                <Notification />
                <User />
            </div>
            <div className="rightbar__userinfo">
                <div className="rb__profile_imagebox"> <ProfileOutline className="rb__profile_imageoutline" /> <img className="rightbar__user_profile" src={ProfileImage} /></div>
                <div className="rightbar__profile_info">
                    <div className="rightbar__profile_name">George Sood</div>
                    <div className="rightbar__profile_email">georgesood@gmail.com</div>
                </div>

            </div>


            {/* List  */}
            <div className="rightbar__list">
                <div className="rightbar__list_item">
                    <div className="rightbar__item_icon"><UnAnswered /></div>
                    <div className="rightbar__item_content">
                        <span className="rightbar__content_text">Unanswered</span>
                        <span className="rightbar__content_percentage">23%</span>
                    </div>
                    <div className="rightbar__item_arrow"><Forward /></div>
                </div>
                <div className="rightbar__list_item">
                    <div className="rightbar__item_icon right__answered_icon"><RightAnswered /></div>
                    <div className="rightbar__item_content right__answered">
                        <span className="rightbar__content_text ">Right Answered</span>
                        <span className="rightbar__content_percentage">23%</span>
                    </div>
                    <div className="rightbar__item_arrow"><Forward /></div>
                </div>
                <div className="rightbar__list_item">
                    <div className="rightbar__item_icon wrong__answered_icon"><WrongAnswered /></div>
                    <div className="rightbar__item_content wrong__answered">
                        <span className="rightbar__content_text "> Wrong Answered</span>
                        <span className="rightbar__content_percentage">23%</span>
                    </div>
                    <div className="rightbar__item_arrow"><Forward /></div>
                </div>

            </div>
            {/* study status */}
            <div className="study__status">
                <span className="study__status_title">Study Status</span>
                <span className="status__status_number"><span className="study__status_title">121/</span>147</span>
                <span className="study__status_subtitle">task complete</span>
                <div className="rightbar__graph_wrapper">
                    <GaugeChart

                        textColor="transparent"
                        colors={['#FB5B5B', '#EAEAEA']}
                        arcWidth={0.4}
                        formatTextValue={(value) => value}
                        percent={0.25}
                        needleColor="#FCAC00"
                        nrOfLevels={480}
                        arcsLength={[0.9, 0.5]}
                        arcPadding={0.02}
                    />
                </div>
            </div>



            {/* bottom alert */}
            <div className="rightbar__note">
                <div className="bottom__alert">
                    <Tick />
                    <span>Good Work, You Are On Track This Month</span>
                </div>
            </div>

        </div>
    )
}

export default RightBar
