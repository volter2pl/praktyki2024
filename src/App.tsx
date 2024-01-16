import './App.css'
import witam from './gratest.tsx'
function App() {
  const handleClick = () => {
    console.log('tak');
  };

  return (
    <>
      <header>
        <h1 className='Logo'>Gamezz Loader</h1>
      </header>
      <section>
        <div className="container">
          <img className="minizdj" src="src/assets/statek.png" onClick={handleClick} alt="statek"></img>
        </div>
        <div className="container">
          <img className="minizdj" src="src/assets/gra2.png" alt="gra2"></img>
        </div>
        <div className="container">
          <img className="minizdj" src="src/assets/gra3.png" alt="gra3"></img>
        </div>
        <div className="container">
          <img className="minizdj" src="src/assets/gra4.png" alt="gra4"></img>
        </div>
        <div className="container">
          <img className="minizdj" src="src/assets/gra5.png" alt="gra5"></img>
        </div>
      </section>
      <main>
      
      </main>
      <footer>

      </footer>
    </>
  )
}

export default App
