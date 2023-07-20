import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { generate } from './quoteSlice';
import './quoteBox.css';

export function QuoteBox() {

  const dispatch = useDispatch();
  const author = useSelector((state) => state.generate.author);
  const quote = useSelector((state) => state.generate.text)

  return (
    <div id="quote-box">
      <div className="main-box">
        <div id="text">
          <p>{quote}</p>
        </div>
        <div id="author">
          <p>{author}</p>
        </div>
      </div>
      <button
      id="new-quote"
      onClick={() => dispatch(generate())}
      >New Quote</button>
    </div>
  );
}
