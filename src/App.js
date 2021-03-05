import './App.css';
import Header from './component/Header'
import Home from './component/sections/Home'
import About  from './component/sections/About'
function App() {
  return (
    <div>
      <Header />
      <main className="l-main">
        <Home />
        <About />
      </main>
    </div>
  );
}

export default App;
