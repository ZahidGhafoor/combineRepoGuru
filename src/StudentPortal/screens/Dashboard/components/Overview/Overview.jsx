import React from 'react'
import OverviewCard from './components/OverviewCard/OverviewCard'
import { ReactComponent as QuestionTable } from "../../../../assets/icons/question.svg"
import { ReactComponent as Settings } from "../../../../assets/icons/setting.svg"
import { ReactComponent as SuperQuestion } from "../../../../assets/icons/superquestion.svg"
import { ReactComponent as MockTest } from "../../../../assets/icons/mocktest.svg"
import { ReactComponent as Chapters } from "../../../../assets/icons/chapter.svg"
import { ReactComponent as PracticeSheet } from "../../../../assets/icons/practicesheet.svg"
import { ReactComponent as ActiveMark } from "../../../../assets/icons/activemark.svg"
import Box from '@mui/material/Box';
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'

import "./Overview.css"
import OverviewChart from './components/OverviewChart/OverviewChart'
import Stats from './components/Stats/Stats'

const Overview = () => {
    return (
        <div className="overview__heading">
            <Box sx={{ display: { sm: 'none', lg: "none", xl: "none", xs: "flex" }, height: "70px" }}></Box>
            <div className="overview__header">
                <h2>Learning Curve</h2>
                <span>MONTHLY UPDATES</span>
                <OverviewChart />
            </div>
            <div className="overview__cards">
                <div className="overview__cards_header">
                    <span className="overview__cards_heading">Overview</span>
                    <span className="overview__cards_arrows">
                        <span className="swiper-button-prev">{"<"}</span>
                        <span className="swiper-button-next">{">"}</span>
                    </span>
                </div>

                <div className="overview__cards_body">
                    <OverviewCard text="Chapter" number="57" iconColor="#ffffff" iconBackground="#FFF0F0" Icon={<Chapters stroke="#FB5B5B" />} />
                    <OverviewCard text="Question Table" number="48" iconColor="#ffffff" iconBackground="#E4F5FF" Icon={<QuestionTable stroke="#4CB3F2" />} />
                    <OverviewCard text="Practice Sheet" number="62" iconColor="#ffffff" iconBackground="#E0FFF6" Icon={<PracticeSheet stroke="#20C597" />} />
                    <OverviewCard text="Mock Test" number="53" iconColor="#ffffff" iconBackground="#F7F2FF" Icon={<MockTest stroke="#7844D8" />} />
                </div>

                <div className="overview__cards_mobilebody">
                    <Swiper
                        spaceBetween={2}
                        slidesPerView={2.3}
                        onSlideChange={() => console.log('slide change')}
                        onSwiper={(swiper) => console.log(swiper)}
                    >
                        <SwiperSlide> <OverviewCard text="Chapter" number="57" iconColor="#ffffff" iconBackground="#FFF0F0" Icon={<Chapters stroke="#FB5B5B" />} /> </SwiperSlide>
                        <SwiperSlide> <OverviewCard text="Question Table" number="48" iconColor="#ffffff" iconBackground="#E4F5FF" Icon={<QuestionTable stroke="#4CB3F2" />} /></SwiperSlide>
                        <SwiperSlide> <OverviewCard text="Practice Sheet" number="62" iconColor="#ffffff" iconBackground="#E0FFF6" Icon={<PracticeSheet stroke="#20C597" />} /></SwiperSlide>
                        <SwiperSlide> <OverviewCard text="Mock Test" number="53" iconColor="#ffffff" iconBackground="#F7F2FF" Icon={<MockTest stroke="#7844D8" />} /> </SwiperSlide>
                    </Swiper>
                </div>
                <Stats />
            </div>
        </div>
    )
}

export default Overview
