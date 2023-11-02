import { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import { Row } from "react-bootstrap";
import MyMovie from "./MyMovie";
import SecondBar from "./SecondBar";
import { Link } from "react-router-dom";

class Main extends Component {
  state = {
    movies: [],
  };

  componentDidMount() {
    fetch("http://www.omdbapi.com/?i=tt3896198&apikey=bb4324f4&s=christ")
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Network response was not ok");
        }
      })
      .then((data) => {
        console.log(data.Search);
        this.setState({ movies: data.Search, isLoading: false });
      })
      .catch((error) => {
        console.error(error);
        this.setState({ isError: true, isLoading: false });
      });
  }

  render() {
    return (
      <>
        <Container>
          <SecondBar></SecondBar>
          <Row>
            <h3 className="text-white mt-5">Trending Now</h3>
            {this.state.movies.slice(0, 6).map((singleFilm) => (
              <MyMovie
                img={singleFilm.Poster}
                key={singleFilm.imdbID}
                movieId={singleFilm.imdbID}
              />
            ))}
          </Row>
        </Container>
      </>
    );
  }
}
export default Main;
