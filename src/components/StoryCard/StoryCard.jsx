import React from "react";
import "./storycard.scss";

const StoryCard = ({ story }) => {
  return (
    <div className="story_card">
      <div className="wrapper">
        <a href={story.url} target="_blank" className="card_link">
          <img src={story.urlToImage} alt="" />
        </a>
        <div className="title">
          <span className="title_text">{story.title}</span>
        </div>
        <div className="card_desc">
          <span className="desc">
            {story.description.length > 100
              ? story.description.slice(0, 100) + "..."
              : story.description}
          </span>
          <span className="author">{story.author}</span>
        </div>
      </div>
    </div>
  );
};

export default StoryCard;
