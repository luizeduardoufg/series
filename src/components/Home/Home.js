import './Home.css';
import Navbar from '../Navbar/Navbar';
import Searchbar from '../Searchbar/Searchbar';
import SeriesTable from '../SeriesTable/SeriesTable';
import React from 'react';

export default class Home extends React.Component {
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

  changeRoute(path) {
    this.props.history.push(path);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.changeRoute(`/search/?q=${this.state.searchBarQuery}`);
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