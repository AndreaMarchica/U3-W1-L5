import { Card, Col } from "react-bootstrap";
import "../MyMovie.css";

const MyMovie = (props) => {
  return (
    <Col xs={6} md={4} lg={2}>
      <Card className="h-100 border border-none">
        <Card.Img variant="top" src={props.img} className="h-100 my-3" />
      </Card>
    </Col>
  );
};
export default MyMovie;
