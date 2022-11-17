import { Link } from "react-router-dom";
import "./Workout.css";
import Image from "../components/photo/bodySample.png";

export const Workout = () => {
  return (
    <>
      <h1>Work Out</h1>
      <div>
        <img src={Image}></img>

        <Link to="/workout/chest">
          <button className="chest_pos">chest</button>
        </Link>
        <Link to="/workout/back">
          <button className="back_pos">back</button>
        </Link>
        <Link to="/workout/abs">
          <button className="abs_pos">abs</button>
        </Link>
        <Link to="/workout/biceps">
          <button className="biceps_pos">biceps</button>
        </Link>
        <Link to="/workout/legs">
          <button className="legs_pos">legs</button>
        </Link>
        <Link to="/workout/shoulder">
          <button className="shoulder_pos">shoulder</button>
        </Link>
        <Link to="/workout/triceps">
          <button className="triceps_pos">triceps</button>
        </Link>
      </div>
    </>
  );
};
