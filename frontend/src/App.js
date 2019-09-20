import React, { Component } from 'react';
import axios from 'axios' 
import './App.css';
import CardCollection from './CardCollection';

class App extends Component {
  constructor(props) {
    super(props);
    this.state= {
      chars:[],
    }
  
  }

  componentWillMount() {
    axios.get("http://localhost:5000/api/characters")
      .then(response => {
        console.log("response", response.data);
        this.setState({chars: response.data})
        console.log(this.state.chars, "hp");
      })
      .catch(error => {
        console.log(error);
      });
    
  }
  render() {
    return (
      <div className="App">
          <h1 className="header">Harry Potter Characters</h1>
          <CardCollection chars={this.state.chars}/>
      </div>
    );
  }
}

export default App;
