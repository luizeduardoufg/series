import './styles/App/App.css';
import './styles/App/navbar.css';
import './styles/App/searchbar.css';

function App() {
  return (
    <div>
      <header>
        {/* <img className="logo" src="images/logo.svg" alt="logo" /> */}
        <div className="logo">Logo</div>
        <nav>
          <ul className="nav__links">
            <li><a href="/">Página inicial</a></li>
            <li><a href="/">Adicionar série</a></li>
            <li><a href="/">Sobre</a></li>
          </ul>
        </nav>
        <a className="cta" href="/"><button>Contato</button></a>
      </header>

      <main>
        <div className="search_box">
          <input className="search_box__search_txt" type="text" name="" placeholder="Digite o nome da série..." />
          <a className="search_box__search_btn" href="/">
            <i class="fas fa-search"></i>
          </a>
        </div>
      </main>
    </div>
  );
}

export default App;
