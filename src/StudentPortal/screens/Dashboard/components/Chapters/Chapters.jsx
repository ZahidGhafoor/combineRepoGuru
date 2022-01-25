import React from 'react'
import "./Chapters.css"
import ChapterCard from './components/ChapterCard/ChapterCard'
import Chapter1  from "../../../../assets/icons/chapter1.svg"
// import {Chapter1 } from "../../../../assets/icons/chapter1.svg"
import papertrazo from "../../../../assets/icons/papertrazo.svg"
import carstand from "../../../../assets/icons/carstand.svg"
import stand from "../../../../assets/icons/stand.svg"
import fourcar from "../../../../assets/icons/fourcar.png"
import regulation from "../../../../assets/icons/regulation.png"
import threecar from "../../../../assets/icons/threecar.png"
import speed from "../../../../assets/icons/speed.png"
import behindbike from "../../../../assets/icons/behindbike.png"
import twocar from "../../../../assets/icons/twocar.png"
import why from "../../../../assets/icons/why.png"
import shara from "../../../../assets/icons/shara.svg"
import recycle from "../../../../assets/icons/recycle.svg"
import van from "../../../../assets/icons/van.png"
import couple from "../../../../assets/icons/couple.png"
import bikee from "../../../../assets/icons/bikee.svg"
import onewilling from "../../../../assets/icons/onewilling.svg"

const Chapters = () => {
    const arr = [
        {
            number: 1,
            subject: "BASIC KNOWLEDGE",
            name: "Personal requirements",
            progress: "25",
            icon:Chapter1
        },
        {
            number: 2,
            subject: "BASIC KNOWLEDGE",
            name: "Legal Framework",
            progress: "100",
            icon: papertrazo
        },
        {
            number: 3,
            subject: "BASIC KNOWLEDGE",
            name: "Road transport system andits use",
            progress: "25",
            icon:carstand
        },
        {
            number: 4,
            subject: "BASIC KNOWLEDGE",
            name: "Right of way",
            progress: "25",
            icon:stand
        },
        {
            number: 5,
            subject: "BASIC KNOWLEDGE",
            name: "Trafic regulations and behaviour",
            progress: "25",
            icon:fourcar
        },
        {
            number: 6,
            subject: "BASIC KNOWLEDGE",
            name: "Traffic facilities and level crossings",
            progress: "25",
            icon:regulation
        },
        {
            number: 7,
            subject: "BASIC KNOWLEDGE",
            name: "Other participants in road traffic",
            progress: "25",
            icon:threecar
        },
        {
            number: 8,
            subject: "BASIC KNOWLEDGE",
            name: "Speed and distance",
            progress: "25",
            icon:speed
        },
        {
            number: 9,
            subject: "BASIC KNOWLEDGE",
            name: "Driving manoeuvres",
            progress: "25",
            icon:behindbike
        },
        {
            number: 10,
            subject: "BASIC KNOWLEDGE",
            name: "Legal Framework",
            progress: "15",
            icon:twocar
        },
        {
            number: 11,
            subject: "BASIC KNOWLEDGE",
            name: "Behaviour in special situations",
            progress: "10",
            icon:why
        },
        {
            number: 12,
            subject: "BASIC KNOWLEDGE",
            name: "Lifelong learning",
            progress: "25",
            icon:shara
        },
        {
            number: "B1",
            subject: "CLASS B (CARS)",
            name: "Technical conditions, passenger and goods ransport",
            progress: "25",
            icon:recycle
        },
        {
            number: "B2",
            subject: "CLASS B (CARS)",
            name: "Driving solo vehicles and trailers",
            progress: "25",
            icon:van
        },
        {
            number: "AZ1",
            subject: "A, A1, A2, AM & MOFA",
            name: "DRIVER/ Passanger & Vehicle ",
            progress: "10",
            icon:couple
        },
        {
            number: "AZ2",
            subject: "A, A1, A2, AM & MOFA",
            name: "Special behaviour when riding a bike",
            progress: "25",
            icon:bikee
        },
        {
            number: "AZ3",
            subject: "A, A1, A2, AM & MOFA",
            name: "Driving technique & driving Physics",
            progress: "25",
            icon:onewilling
        },

        
    ]
    return (
        <div className="chapters__screen">
            <div className="topbar__placeholder"></div>
            <div className="chapter__container">
                {
                    arr.map((data) => {
                        return (
                            <div className="chapter__card_wrapper">
                                <ChapterCard chapterIcon={data.icon} number={data.number} subject={data.subject} name={data.name} progress={data.progress} id={1} />
                            </div>

                        )
                    })
                }


                {/* <div className="chapter__card_wrapper">
                    <ChapterCard chapterIcon={<Chapter1 />} number="1" subject="BASIC KNOWLEDGE" name="Legal Framework" progress="100" id={1} />
                </div>
                <div className="chapter__card_wrapper">
                    <ChapterCard chapterIcon={<Chapter1 />} number="1" subject="BASIC KNOWLEDGE" name="Legal Framework" progress="75" id={1} />
                </div>
                <div className="chapter__card_wrapper">
                    <ChapterCard chapterIcon={<Chapter1 />} number="1" subject="BASIC KNOWLEDGE" name="Legal Framework" progress="25" id={1} />
                </div>
                <div className="chapter__card_wrapper">
                    <ChapterCard chapterIcon={<Chapter1 />} number="1" subject="BASIC KNOWLEDGE" name="Legal Framework" progress="25" id={1} />
                </div>
                <div className="chapter__card_wrapper">
                    <ChapterCard chapterIcon={<Chapter1 />} number="1" subject="BASIC KNOWLEDGE" name="Legal Framework" progress="25" id={1} />
                </div>
                <div className="chapter__card_wrapper">
                    <ChapterCard chapterIcon={<Chapter1 />} number="1" subject="BASIC KNOWLEDGE" name="Legal Framework" progress="25" id={1} />
                </div>
                <div className="chapter__card_wrapper">
                    <ChapterCard chapterIcon={<Chapter1 />} number="1" subject="BASIC KNOWLEDGE" name="Legal Framework" progress="25" id={1} />
                </div>
                <div className="chapter__card_wrapper">
                    <ChapterCard chapterIcon={<Chapter1 />} number="1" subject="BASIC KNOWLEDGE" name="Legal Framework" progress="25" id={1} />
                </div>
                <div className="chapter__card_wrapper">
                    <ChapterCard chapterIcon={<Chapter1 />} number="1" subject="BASIC KNOWLEDGE" name="Legal Framework" progress="25" id={1} />
                </div> */}

            </div>

        </div>
    )
}

export default Chapters
