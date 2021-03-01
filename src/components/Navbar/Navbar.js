import './navbar.css';

export default function Navbar() {
  return (
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
  );
}