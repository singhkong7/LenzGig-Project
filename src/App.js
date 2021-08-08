import './App.css';
import CardCollection from './CardCollection/CardCollection';
import Header from './Header/Header';
import Symbol from './Symbol/Symbol';

function App() {
  return (
    <div className="App">
      <Symbol />
      <Header />
      <h1>LenzGig <h6>News</h6></h1>
      <CardCollection />
    </div>
  );
}

export default App;
