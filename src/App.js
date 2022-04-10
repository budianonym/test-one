import logo from './logo.svg';
import './App.css';
import PrimarySearchAppBar from './components/PrimarySearchAppBar';
import Layout from './components/Layout';
import SimpleContainer from './components/SimpleContainer';
import BasicGrid from './components/BasicGrid';
import BasicStack from './components/BasicStack';

function App() {
  return (
    <div className="App">
      <PrimarySearchAppBar/>
      {/* <Layout/> */}
      {/* <SimpleContainer> */}
      <div className="Container-b">
      {/* <BasicStack/> */}
      <BasicGrid/>
      </div>
      {/* </SimpleContainer> */}
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
    </div>
  );
}

export default App;
