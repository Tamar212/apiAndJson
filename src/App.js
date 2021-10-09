import logo from './logo.svg';
import './App.css';
import Welcome from './welcome'
import Newdata from '../src/component/newdata'
 import GetGitHubUsers from '../src/component/apiExam'
 import Application from '../src/component/sort'
 import Salery from '../src/component/salery';
 import Sortarray from '../src/component/sort'
 import Btn from '../src/component/page'
 import Example from '../src/component/counter'
function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <div>tamar</div>
        <Welcome name="tamar" />
          <Newdata/>  
          <div style={{color:"red"}}>from api </div>
        <GetGitHubUsers/>
        <div style={{color:"green"}}>sort </div>
        <Application />
        <Salery/>
        <Sortarray/>
        <Btn/>
        <Example/>
    </div>
  );
}

export default App;
