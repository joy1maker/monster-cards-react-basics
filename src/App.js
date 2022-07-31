// import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';

class App extends Component {

  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: ""
    }
  }
  componentDidMount() {
    let promise = new Promise(resolve => resolve(fetch('https://jsonplaceholder.typicode.com/users').then(result => result.json())));
    promise.then(result => this.setState({ monsters: result }));

  }
  // this is way to do it with promises
  /*
  let promise = new Promise(resolve => { this.setState({ searchField: value }); resolve() })
  promise.then(res => console.log(this.state.searchField));
*/
  //insted we can use call backs
  // this.setState({ searchField: value },()=>call back goes here);

  render() {
    const { monsters, searchField } = this.state;
    const filterdMonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );
    return (
      <div className="App">
        <h1>Monster Cards</h1>
        <SearchBox handleChange={e => this.setState({ searchField: e.target.value })}></SearchBox>
        <CardList monsters={filterdMonsters}></CardList>

      </div>
    );
  }

}

export default App;
