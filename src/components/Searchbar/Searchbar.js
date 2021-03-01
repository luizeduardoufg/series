import './searchbar.css';

export default function Searchbar() {
  return (
    <form>
      <div className="search_box">
        <input className="search_box__search_txt" type="text" name="" placeholder="Digite o nome da série..." />
        <a className="search_box__search_btn" href="/">
          <i class="fas fa-search"></i>
        </a>
      </div>
    </form>
  );
}