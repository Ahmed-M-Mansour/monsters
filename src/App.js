import React, { Component } from 'react';
import './App.css';
import Cardlist from './components/cardlist/CardList';
import { SearchBox } from './components/search-box/searchBox.component';
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      monesters: [],
      searchField: '' , 
    }
  
  }
    
      
    
      componentDidMount(){
      fetch('https://jsonplaceholder.typicode.com/users')
        .then(Response => Response.json())
        .then(users => this.setState({monesters : users})) 
  }

  render() {
    const { monesters , searchField } = this.state; 
    const filterMonesters = monesters.filter(monester =>
      monester.name.toLowerCase().includes(searchField.toLowerCase()))
    return (
      <div className="App">
        <h1>  Monsters Rolodex </h1>  
        <SearchBox
          placeholder='Search monesters'
          handleChange= {e =>  this.setState({ searchField: e.target.value })}
        /> 
        <Cardlist monesters={filterMonesters} />
      </div>
      
    );
  }
}

export default App; 
