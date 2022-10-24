import { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
        monsters: [],
        searchField: ''
    }
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then((users) => this.setState(() => {
        return {monsters: users}
      }
      ));
  }

  render() {

    const filteredMonsters = this.state.monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(this.state.searchField);  //filtering of lowercase monster with lowercase searchfield state
    });

    return (
      <div className="App">
        <input 
        className="search-box" 
        type="search" 
        placeholder="search monster" 
        onChange={(event) => {
          const searchField = event.target.value.toLocaleLowerCase();
            this.setState(() => {
              return {searchField}; //on change changing the state seearchField with value from search-box
            })
        }}/>

        {
          filteredMonsters.map((monster, id) => { //return based on search-box
            return <h1 key={id}>{monster.name}</h1>
          })
        }
      </div>
    );
  }
}

export default App;
