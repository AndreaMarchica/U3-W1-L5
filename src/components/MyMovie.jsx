import { Card, Col } from "react-bootstrap";
import "../MyMovie.css";
import { Link } from "react-router-dom";

const MyMovie = (props) => {
  return (
    <Col xs={6} md={4} lg={2}>
      <Link to={"MovieDetails/" + props.movieId}>
        <Card className="h-100 border border-none">
          <Card.Img variant="top" src={props.img} className="h-100 my-3" />
        </Card>
      </Link>
    </Col>
  );
};
export default MyMovie;
