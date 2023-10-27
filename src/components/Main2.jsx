import { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import { Row } from "react-bootstrap";
import MyMovie from "./MyMovie";

class Main2 extends Component {
  state = {
    movies: [],
  };

  componentDidMount() {
    fetch("http://www.omdbapi.com/?i=tt3896198&apikey=bb4324f4&s=god")
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Network response was not ok");
        }
      })
      .then((data) => {
        console.log(data);
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
          <Row>
            <h3 className="text-white mt-5">Watch it Again</h3>
            {this.state.movies.splice(0, 6).map((singleFilm) => (
              <MyMovie key={singleFilm.imdbID} img={singleFilm.Poster} />
            ))}
          </Row>
        </Container>
      </>
    );
  }
}
export default Main2;
