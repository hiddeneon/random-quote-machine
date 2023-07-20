import React from 'react';
import twitterLogo from '../../square-twitter.svg'
import { useDispatch, useSelector } from 'react-redux';
import { generate } from './quoteSlice';
import './quoteBox.css';

export function QuoteBox() {

  const dispatch = useDispatch();
  const author = useSelector((state) => state.generate.author);
  const quote = useSelector((state) => state.generate.text);

  return (
    <div id="quote-box">
      <div className="main-box">
        <div id="text">
          <p>{quote}</p>
        </div>
        <div id="author">
          <span>--- {author} ---</span>
        </div>
      </div>
      
      <div className='container-fluid'>
        <div className="row">
          <a href={"https://twitter.com/intent/tweet?text=" + quote + " @ " + author} className="col-sm" id="tweet-quote" target='blank'><img src={twitterLogo} width="50" alt="twitter-logo" /><span>Share Quote</span></a>
          <button
          id="new-quote"
          className='col-sm'
          onClick={() => dispatch(generate())}
          >New Quote</button>
        </div>
      </div>
    </div>
  );
}
