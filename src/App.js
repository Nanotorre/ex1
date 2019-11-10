import React, { Component } from "react";
import UserInput from "./components/UserInput";
import UserOutput from './components/UserOutput';
import ValidInput from './components/ValidationComponent';
import CharComponent from './components/CharComponent';
import './App.css'

class App extends Component {
  state = {
    userName: "Fer",
    pInput: ""
  };

  eventHandler = (event) => {
    this.setState({
      userName: event.target.value
    })
  }

  paragraphInput = (event) => {
    let pInput = event.target.value;
    this.setState({
      ...this.state,
      pInput
    })
  }

  eventDelete = (event) => {
    
  }


  render() {
    return (
      <div className="app">
        <UserInput handler={this.eventHandler} initValue={this.state.userName}/>
        <UserOutput userName={this.state.userName}/>
        <label name="paragraph">Write some paragraph.</label>
        <input type="text" id="paragraph" onChange={this.paragraphInput}></input>
        <ValidInput totalLength={this.state.pInput.length}></ValidInput>

        {this.state.pInput.split("").map( letter => <CharComponent key={letter} letter={letter} click={this.eventDelete}></CharComponent>)}
        
      </div>
    );
  }
}

export default App;
