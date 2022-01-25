import React from 'react'
import { useHistory } from 'react-router-dom'
import "./ChapterCard.scss"

const ChapterCard = ({ chapterIcon, number, subject, name, progress, id}) => {
    const history = useHistory();
    const handleClick = (chapterId) => {
        history.push(`/student/dashboard/chapters/${chapterId}`);
    }
    return (
        <div className="chapter__card" onClick={() => handleClick(id)}>
            <div className="chapter__card_header">
                <span className="chapter__card_icon"><img src={chapterIcon} alt="" /></span>
                <span className="chapter__card_number">CHAPTER {number}</span>
            </div>
            <div className="chapter__card_body">
                <div className="chapter__card_subject">{subject}</div>
                <div className="chapter__card_name">{name}</div>
            </div>
            <div className="chapter__card_footer">
                <div className="chapter__card_footertop" style={{ color: progress < 100 ? "#EE5454" : "#1BB93E" }}>
                    <div className="ccft__left">PROGRESS</div>
                    <div className="ccft__right">{progress}%</div>
                </div>
                <div className="chapter__card_footerbottom">
                    <div className="ccfb__progress_wrap">
                        <div className="ccfb__progress" style={{ width: progress + "%", backgroundColor: progress < 100 ? "#027368" : "#1BB93E" }}></div>
                    </div>
                </div>
            </div >
        </div >
    )
}

export default ChapterCard
