import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { Data } from "../components/Chart";

export const Status = () => {
  return (
    <>
      <div>
        <h1>nickname's Status</h1>
      </div>
      <div>
        <Data />
      </div>
      <div>
        <Link to="/management">
          <Button variant="primary" size="lg">
            Management
          </Button>
        </Link>
        <Link to="/workout">
          <Button size="lg">Workout</Button>
        </Link>
      </div>
    </>
  );
};
