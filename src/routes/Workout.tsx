import { Link } from "react-router-dom";
import "./Workout.css";
import Upper from "../components/photo/upper.png";
import Lower from "../components/photo/lower.png";
import Button from "react-bootstrap/Button";
import { ButtonGroup } from "react-bootstrap";

export const Workout = () => {
  const clickUpper = () => {
    alert("touch upper");
  };
  const clickLower = () => {
    alert("touch lower!");
  };

  return (
    <>
      <h1>Work Out</h1>

      <div>
        <img
          src={Upper}
          onClick={clickUpper}
          style={{
            position: "absolute",
            top: "100px",
            width: "50%",
            left: "85px",
            margin: "auto",
          }}
        ></img>
        <img
          src={Lower}
          onClick={clickLower}
          style={{
            position: "absolute",
            bottom: "100px",
            width: "25%",
            left: "140px",
            margin: "auto",
          }}
        ></img>
        <div style={{ backgroundColor: "red" }}>
          <Link to="/workout/chest">
            <Button className="chest_pos">chest</Button>
          </Link>
          <Link to="/workout/back">
            <Button className="back_pos">back</Button>
          </Link>
          <Link to="/workout/abs">
            <Button className="abs_pos">abs</Button>
          </Link>
          <Link to="/workout/biceps">
            <Button className="biceps_pos">biceps</Button>
          </Link>
          <Link to="/workout/legs">
            <Button className="legs_pos">legs</Button>
          </Link>
          <Link to="/workout/shoulder">
            <Button className="shoulder_pos">shoulder</Button>
          </Link>
          <Link to="/workout/triceps">
            <Button className="triceps_pos">triceps</Button>
          </Link>
        </div>
      </div>
      <div
        style={{
          position: "absolute",
          bottom: "40px",
          width: "35%",
          left: "50px",
          margin: "auto",
        }}
      >
        <ButtonGroup>
          <Button variant="dark" size="lg">
            Recommendation
          </Button>
          <Button variant="dark" size="lg">
            Routine
          </Button>
        </ButtonGroup>
      </div>
    </>
  );
};
