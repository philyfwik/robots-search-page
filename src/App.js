import './App.css';
import { Component } from 'react';

import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';

class App extends Component{
  constructor(props) {
    super(props);
  
    this.state = {
      monsters: [],
      searchField: ''
    };
  }
  
  // Fetching the array from the link instead of hard coding
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(Response => Response.json())    // take response and convert into json format for javascript to use
    .then(users => this.setState({ monsters: users }));   // take the users from list and set state of monsters array
  }

  handleChange = e => {
    this.setState({ searchField: e.target.value });
  }

  render(){
    const { monsters, searchField } = this.state; // same as const monsters = this.state.monsters & searchField = this.state.searchField
    const filteredMonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );
    return (
      <div className="App">
        <h1> Search & Filter Practice </h1>
        <SearchBox 
          placeholder={'search monsters'}
          handleChange={this.handleChange}
        />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
