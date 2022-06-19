import logo from "./logo.svg";
import "./App.css";
import Login from "./components/LogIn/Login";
import Carusal from "./components/Carusal/Carusal";
import Header from "./components/Header/Header";

function App() {
  return (
    <div className="container text-center">
      <Header />
      <Login />
      <Carusal />
    </div>
  );
}

export default App;
