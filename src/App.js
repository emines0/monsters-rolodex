import { useState, useEffect } from 'react';
import './App.css';
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';

const App = () =>{

    const [searchField, setSerchField] = useState('');
    const [monsters, setMonsters] = useState([]);
    const [filteredMonsters, setFilteredMonsters] = useState(monsters);

    useEffect(() => {

      fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then((users) => setMonsters(users));

    }, []);

    // Run filtering of monsters only if monsters array changed or searchfield change
    useEffect(() => {

      const newFilteredMonsters = monsters.filter((monster) => {
        return monster.name.toLocaleLowerCase().includes(searchField);  //filtering of lowercase monster with lowercase searchfield state
      });

      setFilteredMonsters(newFilteredMonsters);
    
    }, [monsters, searchField]);
    
    const onSearchChange = (event) => {
      const searchFieldString = event.target.value.toLocaleLowerCase();
        setSerchField(searchFieldString); //on change changing the state seearchField with value from search-box
    };



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

export default App;
