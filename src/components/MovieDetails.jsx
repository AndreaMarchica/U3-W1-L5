import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";

const MovieDetails = () => {
  const params = useParams();
  console.log("PARAMS", params);
  const navigate = useNavigate();
  console.log("il film da far vedere ha id", params.imdbID);
  const [movieDetail, setMovieDetail] = useState(null);

  return (
    <Container>
      <Row>
        <Col className="d-flex">
          <div>
            <img src="http://placedog.net/500" alt="bestia" />
          </div>
          <div>
            <h3>Titolo</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
              dolore porro corrupti! Facere delectus voluptate eius reiciendis
              blanditiis laboriosam numquam fuga dolores, repellat eos autem
              voluptatem. Numquam nostrum aliquid provident?
            </p>
          </div>
        </Col>
      </Row>
    </Container>
  );
};
export default MovieDetails;
