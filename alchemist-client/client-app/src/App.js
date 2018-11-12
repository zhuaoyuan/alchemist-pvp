import React, { Component } from 'react';
import './App.css';
import 'wired-elements';

const styles = {
    fontFamily: "sans-serif",
    padding: "10px"
};

const buttonStyles = {
    background: "lightblue",
    margin: '0 10px'
};

class App extends Component {
  render() {
    return (
        <div style={styles}>
            <wired-input placeholder="Enter name"></wired-input>
            <wired-button style={buttonStyles}>Submit</wired-button>
        </div>
    );
  }
}

export default App;
