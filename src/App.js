import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Main from "./components/Main";
import Main2 from "./components/Main2";
import Main3 from "./components/Main3";
import MyNavbar from "./components/MyNavbar";
import MyFooter from "./components/MyFooter";

function App() {
  return (
    <div className="div-app">
      <MyNavbar />
      <Main />
      <Main2 />
      <Main3 />
      <MyFooter></MyFooter>
    </div>
  );
}

export default App;
