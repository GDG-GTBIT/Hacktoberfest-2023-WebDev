import "./App.css";
import Navbar from "./Components/Navbar";
import Router from "./routes/routes";

function App() {
  return (
    <div className="App bg-black">
      <Navbar/>
          <Router/>
    </div>
  );
}

export default App;
