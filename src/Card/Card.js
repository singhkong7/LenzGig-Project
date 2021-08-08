import React from 'react'
import "./Card.scss";
function Card({image,title_link,title_content,content,date,footer}) {
    return (
        <div className="card">
            <img src={image} alt=" " />
            <div className="body">
                <h4>{date}  News <span>By LenzGig</span></h4>
                <a  className="title_content" href=" ">{title_content}</a>
                <p>{content}</p>
                <a  className="title_footer" href={title_link}>{footer}</a>
            </div>
        </div>
    )
}

export default Card
