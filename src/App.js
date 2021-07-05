// import './App.css';
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import Board from "./components/State/Board";
import OnlineBoard from "./components/JsonServer/OnlineBoard";
import Home from "./components/Home";

function App() {
  return (
    <Router>
      <div>
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

export default App;
