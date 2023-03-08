import React from 'react';
import './QuoteAuthor.css';
import { TbArrowsRandom } from "react-icons/tb";

const QuoteAuthor = ({ content, author, handleRandom, handleAuthor }) => {
    return (
        <div className='container'>
      <div className='contentList'>{content}</div>
        </div>
    );
};

export default QuoteAuthor;