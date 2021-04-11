
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./components/routes";
import TopBar from "./components/TopBar";

function App() {
  return (
    <div className="container">
      <Router>
        <TopBar />
        <Routes />
      </Router>
    </div>
  );
}

export default App;
