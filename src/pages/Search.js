import Navbar from '../components/Navbar/Navbar';
import React from 'react';
import axios from 'axios';
import Searchbar from '../components/Searchbar/Searchbar';


class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tvShows: [],
    }
  }

  async componentDidMount() {
    let queryString = this.props.location.search.substring(3);
    let response = await axios.get(`https://www.episodate.com/api/search?q=${queryString}&page=1`);
    this.setState({ tvShows: response.data.tv_shows });
  }

  render() {
    return (
      <div className="body">
        <Navbar />
        <main>
          <div style={{ position: 'absolute' }}>
            {
              this.state.tvShows.length > 0
                ?
                this.state.tvShows.map(tvShow => {
                  return (<>
                    <p>Id: {tvShow.id}</p>
                    <p>Nome: {tvShow.name}</p>
                    <img src={tvShow.image_thumbnail_path} style={{ width: '150px', height: '150px' }} alt="imagem" />
                  </>);
                })
                :
                'Nenhuma série encontrada.'
            }
          </div>
        </main>
      </div>
    );
  }
}

export default Search;
