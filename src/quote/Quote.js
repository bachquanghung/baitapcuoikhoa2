import React from "react";
import './Quote.css';
import { TbArrowsRandom } from "react-icons/tb";
import {AiOutlineArrowRight} from "react-icons/ai"

const Quote = ({ content, author, tags, handleRandom, handleAuthor }) => {
  return (
    <div className="container">
      <div className="random" onClick={handleRandom}>
       <div className="randomText">Random</div>
        <TbArrowsRandom></TbArrowsRandom>
      </div>

      <div className="quoteField">
        <div className="quoteContent">
      
          <div className="quoteText">{content}
          </div>
        </div>
        <div className="quoteAuthorField" onClick={handleAuthor}>
        <div className="quoteAuthor">
            <div className="quoteAuthorName">{author}</div>
            <div className="quoteTag">{tags}</div>
            </div>
            <div className="quoteAuthorIcon">
            <AiOutlineArrowRight></AiOutlineArrowRight>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Quote;
