import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './pages/Home';
import ReactDemo from './pages/ReactDemo';

function App() {
  return (
    <div className="App">
      <Router>
        <ul>
          <Link to="/"><li>Home</li></Link>
          <Link to="/react"><li>Counter</li></Link>
        </ul>
        <Switch>
          <Route path="/react" component={ReactDemo} />
          <Route component={Home} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
