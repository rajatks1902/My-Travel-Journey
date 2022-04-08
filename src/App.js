import logo from './logo.svg';
import './App.css';
import Top from './components/Top.js';
import Data1 from './components/Data1.js';
import Collect from './Collect.js';

function App() {
  const cards = Collect.map(item => {
    return (
        <Data1
            key={item.id}
            item={item}
            
        />
    )
}) 
  return (
    <>
    <Top />
    {cards}
    </>
  );
}

export default App;
