import { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';

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

  onSearchChange = (event) => {
    const searchField = event.target.value.toLocaleLowerCase();
      this.setState(() => {
        return {searchField}; //on change changing the state seearchField with value from search-box
      });
  }

  render() {
    const {monsters, searchField} = this.state
    const {onSearchChange} = this;

    const filteredMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField);  //filtering of lowercase monster with lowercase searchfield state
    });

    return (
      <div className="App">
        
        <h1 className="app-title">Monsters Rolodex</h1>

        <SearchBox 
          className='monster-search-box' 
          onSearchChangeHandler={onSearchChange} 
          placeholder = 'search monsters' 
        />

        <CardList 
          monsters={filteredMonsters}
        />
        
      </div>
    );
  }
}

export default App;
