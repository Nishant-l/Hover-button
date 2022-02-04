import logo from './logo.svg';
import './App.css';
import Popular from './components/Popular';

function App() {
  return (
    <div className="App">
        <Popular list={['apple','orange','grapes','pineapple']}/>
    </div>
  );
}

export default App;
