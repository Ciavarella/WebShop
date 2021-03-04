import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

describe('App render', () =>{
  test('ReactDOM renders ', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
  });
});