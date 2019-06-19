import React from 'react';
import './App.css';
import ResultComponent from "./src/components/ResultComponent";
import KeypadComponent from "./src/components/KeypadComponent";

class App extends Component{

  constructor(){
    super();
    this.state={
      result:""
    }
  }

  calculate=()=>{
    try{
      this.setState({
        result:(eval(this.state.reuslt)||"") +""
      })
    }
    catch(e){
      this.setState({
        result:"error"
      })
    }
  };

  reset=()=>{
    this.setState({
      result:""
    })
  };

  backspace=()=>{
    this.setState({
      result: this.state.result.slice(0,-1)
    })
  };

  render(){
    return(
      <div>
        <div className="calculator-body">
          <h1>Simple Calculator</h1>
          <ResultComponent result={this.state.result}/>
          <KeypadComponent onClick={this.onClick}/>
        </div>
      </div>
    )
  }
}

export default App;
