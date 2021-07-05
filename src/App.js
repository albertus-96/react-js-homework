// import './App.css';
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import Board from "./components/State/Board";
import OnlineBoard from "./components/JsonServer/OnlineBoard";

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/online">Online Board</Link>
            </li>
            <li>
              <Link to="/offline">Offline Board</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/online">
            <OnlineBoard />
          </Route>
          <Route path="/offline">
            <Board />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
    // <div className="App p-5">
    //   <header className="App-header">
    //     <div className="text-3xl text-center font-mono font-extrabold">
    //       USER BOARD
    //     </div>
    //   </header>
    //   <Board />
    //   <OnlineBoard />
    // </div>
  );
}

function Home() {
  return <h2>Home</h2>;
}

export default App;
