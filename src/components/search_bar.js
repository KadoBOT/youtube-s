import React from 'react';

class SearchBar extends React.Component{

  constructor(props){
    super(props);
    this.state = { term: '' };
  }

  handleChange = (e) => {
    this.setState({term: e.target.value});
    this.props.onSearchTermChange(e.target.value);
  }

  render(){
    return(
      <div className="search-bar">
        <input
        value={this.state.term}
        onChange={this.handleChange} />
      </div>
    )
  }
}

export default SearchBar;
