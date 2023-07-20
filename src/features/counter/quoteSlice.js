import { createSlice } from '@reduxjs/toolkit';
import quotes from '../../quotes.json';

const randomIndex = () => Math.floor(Math.random() * quotes.length); // generating random index on the quotes data array range for the quote to render
const initialIndex = randomIndex();

const initialState = {
  author: quotes[initialIndex]["author"],
  text: quotes[initialIndex]["text"],
};

export const quoteSlice = createSlice({
  name: 'quote',
  initialState,
  reducers: {
    generate: (state) => {
      
      let newIndex = randomIndex();
      const previousQuoteIndex = quotes.findIndex(element => element["text"] === state.text);
      while (newIndex === previousQuoteIndex) { // check newIndex and if true assing another index so that the same quote won't be rendered sequentially twice 
        newIndex = randomIndex();
      }

      const newQuote = quotes[newIndex]; // define the data block that contains author name and quote text from the imported quotes array

      state.author = newQuote["author"]; // assign random author
      state.text = newQuote["text"]; // assign the corresponding quote
    },
  },
});

export const { generate } = quoteSlice.actions;

export default quoteSlice.reducer;
