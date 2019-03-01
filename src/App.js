import React, { Component } from 'react';
import Board from './Components/Board/Board';
import Settings from './Components/Settings/Settings';

import './App.css';

class App extends Component {

  state = {
    level: 1,
    time: 1,
    columns: 5,
    rows: 5,
    current: null,
    blocks: [],
    counter: 0,
    isRunning: false,
    isFinished: true,
    result: ""
  }

  changeHandler = (type, event) => {
    
    if(this.state.isRunning || !this.state.isFinished) {
      return;
    }

    this.setState({
      [type]: event.target.value
    });
  }

  //Checks if the pressed block is correct in order
  clickHandler = (event) => {

    if(this.state.isRunning || this.state.isFinished) {
      return;
    }
    
    let key = event.target.value;

    let {blocks, counter} = this.state;

    if(!(key === blocks[counter])) {
      this.setState({isRunning: false, isFinished: true, counter: 0, result: "Try again."});
      return;
    }

    //Winning scenario
    if(counter === blocks.length - 1) {
      
      this.setState(prevState => {
        return {isRunning: false, isFinished: true, counter: 0, result: "Nice. Let's level up.:)", level: prevState.level + 1}
      });

      return;
    }

    this.setState(prevState => {
      return {counter: prevState.counter + 1};
    });
  }

  createFlow = () => {
    let array = this.state.blocks.splice();
    let {level, columns, rows} = this.state;
    
    for(let i = 0; i < level + 2; i++) {
      let rnd = Math.floor(Math.random() * rows * columns);

      array.push(rnd);
    }

    this.setState({blocks: array});

    return array;
  }

  wait = (time) => {
    return new Promise((resolve) => {
      setTimeout(resolve, time);
    });
  }

  async startGame() {
    
    if(this.state.isRunning) {
      return;
    }

    this.setState({result: "", isRunning: true, isFinished: false});
    
    let array = this.createFlow();
    let time = this.state.time * 1000;

    for(let i = 0; i < array.length; i++) {
      await this.wait(500);
      this.setState({current: array[i]});
      await this.wait(time);
      this.setState({current: null});
    };

    this.setState({isRunning: false});
    
  }

  render() {
    return (
      <div className="App">
        <Board rows={this.state.rows} current={this.state.current} columns={this.state.columns} click={this.clickHandler}/>
        <Settings change={this.changeHandler} start={() => this.startGame()}/>
        <h2 className="result">{this.state.result}</h2>
        <h2 className="level">Level {this.state.level}</h2>
      </div>
    );
  }
}

export default App;