import { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
        monsters: []
    }
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then((users) => this.setState(() => {
        return {monsters: users}
      }, () => {
        console.log(this.state);
      }));
  }

  render() {
    return (
      <div className="App">
        {
          this.state.monsters.map((monster, i) => {
            return <h1 key={i}>{monster.name}</h1>
          })
        }
      </div>
    );
  }
}

export default App;
