import { UncontrolledCollapse, Button, CardBody, Card } from "reactstrap";

export const Collapse = () => {
  return (
    <div className="d-flex flex-column">
      <Button variant="info" id="toggle">
        Why How What
      </Button>
      <UncontrolledCollapse toggler="#toggle" className="m-0 p-0">
        <Card>
          <CardBody>운동목적이 들어갑니다.</CardBody>
        </Card>
      </UncontrolledCollapse>
    </div>
  );
};
