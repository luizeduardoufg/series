import './searchbar.css';
import React from 'react';

export default class Searchbar extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    const {searchBarQuery} = this.props;
    this.state = {searchBarQuery};
  }

  handleChange(e) {
    this.props.onChange(e);
  }

  handleClick() {
    this.props.onClick();
  }

  componentWillReceiveProps(props) {
    const { searchBarQuery } = props;
    this.setState({ searchBarQuery });
  }

  render(){
    return (
      <div className="search_box">
        <input
          className="search_box__search_txt"
          type="text"
          value={this.state.searchBarQuery}
          onChange={this.handleChange}
          name="search_bar_query"
          placeholder="Digite o nome da série..."
        />
        <button
          type="submit"
          className="search_box__search_btn"
          href="/"
          onClick={this.handleClick.bind(this)}
        >
          <i className="fas fa-search"></i>
        </button>
      </div>
    );
  }
}