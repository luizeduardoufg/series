import './styles/App/App.css';
import Navbar from './components/Navbar/Navbar';
import Searchbar from './components/Searchbar/Searchbar';
import SeriesTable from './components/SeriesTable/SeriesTable';

function App() {
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

export default App;
