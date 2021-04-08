import './App.css';
import { Builder } from './сomponents/Builder';

function App() {
  return (
    <div className="app__container">
      <header className="app__header">
        <h1 className="app__header-title">
          PathFinder: <span className="app__header-subtitle">create map and find the shortest way from point A to point B</span>
        </h1> 
      </header>
      <Builder></Builder>
    </div>
  );
}

export default App;
