import React from 'react';
import ReactDOM from 'react-dom';

import 'babel-polyfill';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component {
  render() {
    return (
      <div>
        Hello World
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('container'));

if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
  module.hot.accept();
}