import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { Data } from "../components/Chart";
import { List } from "../components/Purpose";
import { Collapse } from "../components/Collapse";

export const Status = () => {
  return (
    <>
      {/* <Header title={"Status"} /> */}
      {/* <div>
        <h1>nickname's Status</h1>
      </div> */}
      <div>
        {/* <List /> */}
        <Collapse />
      </div>
      <div>
        <Data />
      </div>
      <div className="border d-flex justify-content-center">
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
