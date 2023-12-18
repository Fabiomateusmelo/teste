import './App.css'

function App() {


  return (
    <>
     <header>
      <div className="grid-layout">
        <nav>
          <img
            src="src/assets/logoloop 1.svg"
            alt="iuricode"
            width="150px"
            height="25px"
          />
          <div className="mobile-menu">
            <div className="line1"></div>
            <div className="line2"></div>
            <div className="line3"></div>
          </div>
          <ul className="nav-list">
            <li><a href="" rel="noopener" target="_blank">Home</a></li>
            <li><a href="" rel="noopener" target="_blank">Sobre</a></li>
            <li><a href="" rel="noopener" target="_blank">Funcionalidades</a></li>
            <li><a href="" rel="noopener" target="_blank">Planos</a></li>
            <li><a href="" rel="noopener" target="_blank">Suporte</a></li>
            <li><a href="" rel="noopener" target="_blank">Contato</a></li>
            <li><a href="" rel="noopener" target="_blank">Sou cliente</a></li>
          </ul>
        </nav>
      </div>
    </header>
    </>
  )
}

export default App
