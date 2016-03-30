import React from 'react';

class SearchBar extends React.Component{

  constructor(props){
    super(props);
    this.state = { term: '' };
  }

  handleChange = (e) => {
    this.setState({term: e.target.value});
  }

  render(){
    return(
      <div>
        <input onChange={this.handleChange} />
      </div>
    )
  }
}

export default SearchBar;
