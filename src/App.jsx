import './App.css';
import { categories } from './helper/data.js';
import Card from './components/card/Card';

function App() {
  return (
    <div className="App">
      <h1>Language Cards</h1>
      <div className="card-container">
        {categories.map((item, index) => (
          <Card
            key={index}
            name={item.name}
            img={item.img}
            options={item.options}
          />
        ))}
      </div>
    </div>
  );
}

export default App;