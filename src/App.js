import React, { Component } from 'react';
import logo from './logo.svg';
import './App.scss';
import './App.less';

class App extends Component {
    render() {
        return (
            <div>
            <div className="App" id="sass">
            <div className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <h2>Sass</h2>
            </div>
            <p>Sass 적용</p>
        </div>
        <div className="App" id="less">
            <div className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <h2>Less</h2>
            </div>
            <p>Less 적용</p>
        </div>
        </div>
    );
    }
}

export default App;
