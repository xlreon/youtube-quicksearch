import React,{Component} from 'react'

class SearchBar extends Component {

  constructor(props) {
    super(props);

    this.state = {term: 'Search'};
  }


  render() {
    return (
      <div className="jumbotron jumbotron-fluid" style={{padding: '2px',backgroundColor: '#2980b9',borderRadius: '70px'}}>
  <div className="container-fluid" >
  <div className="search-bar" >
  <input placeholder={this.state.term} onChange={event => this.onInputChange(event.target.value)}/>
  </div>
  </div>
</div>

    );
  }

  onInputChange(term){
    this.setState({term});
    this.props.onSearchTermChange(term);
  }
}

export default SearchBar;
