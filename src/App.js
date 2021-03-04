import './App.css';
import Header from './component/Header'
import Home from './component/sections/Home'

function App() {
  return (
    <div>
      <Header />
      <main className="l-main">
        <Home />
      </main>
    </div>
  );
}

export default App;
