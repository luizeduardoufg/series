import './styles/App/App.css';
import Navbar from './components/Navbar/Navbar';
import Searchbar from './components/Searchbar/Searchbar';
import SeriesTable from './components/SeriesTable/SeriesTable';
import { useState } from 'react';

function handleSubmit(event) {
  event.preventDefault();
}

function App() {
  return (
    <div className="body">
      <Navbar />
      <main>
        <form onSubmit={() => {handleSubmit()}}>
          <Searchbar />
        </form>
        <SeriesTable />
      </main>
    </div>
  );
}

export default App;
