import { Link } from "react-router-dom";
import "./Workout.css";
import Upper from "../components/photo/upper.png";
import Lower from "../components/photo/lower.png";
import Button from "react-bootstrap/Button";
import { ButtonGroup } from "react-bootstrap";

import {
  ButtonDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import { useState } from "react";

export const Workout = () => {
  const [dropdownOpen, setDropdownOpen] = useState<boolean>(false);
  const [data, setData] = useState<string>("arms");

  const tricepsClick = () => {
    setData("triceps");
  };
  const bicepsClick = () => {
    setData("biceps");
  };
  const toggle = () => {
    setDropdownOpen(!dropdownOpen);
  };
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
        <div>
          <Link to="/workout/chest">
            <Button className="chest_pos">chest</Button>
          </Link>
          <Link to="/workout/back">
            <Button className="back_pos">back</Button>
          </Link>
          <Link to="/workout/abs">
            <Button className="abs_pos">abs</Button>
          </Link>

          <ButtonDropdown
            isOpen={dropdownOpen}
            toggle={toggle}
            className="arms_pos"
          >
            <DropdownToggle color="warning" caret>
              {data}
            </DropdownToggle>
            <DropdownMenu>
              <DropdownItem onClick={tricepsClick}>triceps</DropdownItem>
              <DropdownItem onClick={bicepsClick}>biceps</DropdownItem>
            </DropdownMenu>
          </ButtonDropdown>

          <Link to="/workout/legs">
            <Button className="legs_pos">legs</Button>
          </Link>
          <Link to="/workout/shoulder">
            <Button className="shoulder_pos">shoulder</Button>
          </Link>
        </div>
      </div>
      <div
        className="d-flex justify-content-center"
        style={{
          position: "absolute",
          bottom: "50px",
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
