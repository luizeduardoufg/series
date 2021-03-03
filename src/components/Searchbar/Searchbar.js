import './searchbar.css';
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const Searchbar = () => {
  const [searchBarQuery, setSearchBarQuery] = useState('');
  const history = useHistory();

  const handleSubmit = e => {
    e.preventDefault();
    history.push(`/search/?q=${searchBarQuery}`);
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="search_box">
        <input
          className="search_box__search_txt"
          type="text"
          value={searchBarQuery}
          onChange={e => setSearchBarQuery(e.target.value)}
          placeholder="Digite o nome da série..."
        />
        <button
          type="submit"
          className="search_box__search_btn"
          href="/"
        >
          <i className="fas fa-search"></i>
        </button>
      </div>
    </form>
  );
}

export default Searchbar;