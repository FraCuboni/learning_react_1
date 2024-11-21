
// import di useState
import { useState } from 'react';

// loghi
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';

// stile con lo stesso nome del componente es.(navbar.jsx -> navbar.css)
import './App.css';

// importo i miei componenti
import Navbar from "./components/Navbar";


// i componenti sono FUNZIONI 
// react va a usare vanilla js per creare tag, classi etc con comandi base es.(document.create, document.getelement, etcetc)
function App() {
  const [count, setCount] = useState(0)

  // html contenuto in una return di una function, react è TUTTO js
  return (
    <>
      {/* importo la navbar */}
      <Navbar></Navbar>

      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
