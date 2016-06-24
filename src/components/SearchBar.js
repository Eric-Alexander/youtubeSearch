import React, { Component } from 'react';

class SearchBar extends Component{
  constructor(props){
    super(props);
    this.state = { term: '' };
    this.handleInputChange = this.handleInputChange.bind(this);
  }
  handleInputChange(term){
    this.setState({ term });
    this.props.onSearchTermChange(term);
  }

  render(){
    return(
      <div className= 'search-bar'>
        <input
          placeholder='Search Youtube...'
          value = {this.state.term}
          onChange={e => this.handleInputChange(e.target.value)} />
      </div>
    )
  }

}

export default SearchBar;
