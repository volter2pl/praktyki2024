import './App.css'
import Witam from './gratest.tsx'
import { useState } from 'react';

function App() {
  const [message, setMessage] = useState<React.ReactNode>(null);

  const handleClick = () => {
    setMessage(<Witam />);
  };

  return (
    <>
      <header>
        <h1 className='Logo'>Gamezz Loader</h1>
      </header>
      <section>
        <div className="container">
          <img className="minizdj" src="src/assets/statek.png" alt="statek" onClick={handleClick} ></img>
        </div>
        <div className="container">
          {/*<img className="minizdj" src="src/assets/gra2.png" alt="gra2"></img>*/}
        </div>
        <div className="container">
          {/*<img className="minizdj" src="src/assets/gra3.png" alt="gra3"></img>*/}
        </div>
        <div className="container">
          {/*<img className="minizdj" src="src/assets/gra4.png" alt="gra4"></img>*/}
        </div>
        <div className="container">
          {/*<img className="minizdj" src="src/assets/gra5.png" alt="gra5"></img>*/}
        </div>
      </section>
      <main>
        {message}
      </main>
      <footer>

      </footer>
    </>
  )
}

export default App
