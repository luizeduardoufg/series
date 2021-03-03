import './styles/App/App.css';
import Navbar from './components/Navbar/Navbar';
import Searchbar from './components/Searchbar/Searchbar';
import SeriesTable from './components/SeriesTable/SeriesTable';
import React from 'react';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange =this.handleChange.bind(this);
    this.state = {
      searchBarQuery: '',
    };
  }

  handleChange(e) {
    this.setState({searchBarQuery: e.target.value});
  }

  handleClick() {
    // console.log(this.state.searchBarQuery);
  }

  handleSubmit(e) {
    e.preventDefault();
    axios.get(`https://www.episodate.com/api/search?q=${this.state.searchBarQuery}&page=1`)
      .then(response => {
        console.log(response.data);
      });
  }

  render() {
    return (
      <div className="body">
        <Navbar />
        <main>
          <form onSubmit={this.handleSubmit.bind(this)}>
            <Searchbar
              query={this.state.searchBarQuery}
              onChange={this.handleChange}
              onClick={this.handleClick.bind(this)}
            />
          </form>
          <SeriesTable />
        </main>
      </div>
    );
  }
}

export default App;
