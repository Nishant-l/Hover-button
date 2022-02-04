import './App.css';
import Popular from './components/Popular';

function App() {
  return (
    <div className="App">
      {/* pass list to be rendered as props */}
        <Popular list={['apple','orange','grapes','pineapple']}/> 
    </div>
  );
}

export default App;
