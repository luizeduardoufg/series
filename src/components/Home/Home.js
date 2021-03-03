import './Home.css';
import Navbar from '../Navbar/Navbar';
import Searchbar from '../Searchbar/Searchbar';
import SeriesTable from '../SeriesTable/SeriesTable';
import React from 'react';

export default class Home extends React.Component {
  render() {
    return (
      <div className="body">
        <Navbar />
        <main>
          <Searchbar />
          <SeriesTable />
        </main>
      </div>
    );
  }
}