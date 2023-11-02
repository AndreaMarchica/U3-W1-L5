import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Main from "./components/Main";
import Main2 from "./components/Main2";
import Main3 from "./components/Main3";
import MyNavbar from "./components/MyNavbar";
import MyFooter from "./components/MyFooter";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TVShows from "./components/TVShows";
import MovieDetails from "./components/MovieDetails";

function App() {
  return (
    <BrowserRouter>
      <div className="div-app">
        <MyNavbar />
        <Routes>
          <Route
            element={
              <>
                <Main />
                <Main2 />
                <Main3 />
              </>
            }
            path="/"
          />{" "}
          <Route element={<TVShows />} path="/TVShows" />
          <Route element={<MovieDetails />} path="/MovieDetails/:imdbID" />
        </Routes>

        <MyFooter />
      </div>
    </BrowserRouter>
  );
}

export default App;
