import Dropdown from "react-bootstrap/Dropdown";

function SecondBar() {
  return (
    <div className="d-flex justify-content-between ">
      <div className="d-flex">
        <h2 className="text-white me-5">TV Shows</h2>
        <Dropdown>
          <Dropdown.Toggle variant="dark" id="dropdown-basic">
            Genres
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Romance</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Scifi</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
      <div></div>
    </div>
  );
}

export default SecondBar;
