import './App.css';
import Tabs from './components/Tabs'

function App() {
  return (
    <div className='App'>
      <Tabs tabs={[['Tab 1', false], ['Tab 2', false], ['Tab 3', false]]}/>
    </div>
  );
}

export default App;
