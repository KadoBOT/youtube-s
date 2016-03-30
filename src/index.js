import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyDU4ZU_roRiq0BFXPfmriAzpRNJgcH9Thc';

class App extends React.Component{
  render(){
    return(
      <div>
        <SearchBar />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('.container'));
