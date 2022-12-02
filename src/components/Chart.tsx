import { PureComponent, useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import { chartData } from "./data/chartDataJson";
// import { StatusDropdown } from "./data/status-drop-down";
import {
  ButtonDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";

export const Data = () => {
  const [dropdownOpen, setDropdownOpen] = useState<boolean>(false);
  const [data, setData] = useState<string>("Weight");

  const weightClick = () => {
    setData("Weight");
  };
  const fatRatioClick = () => {
    setData("Fat Ratio");
  };
  const toggle = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <>
      <ButtonDropdown isOpen={dropdownOpen} toggle={toggle}>
        <DropdownToggle color="warning" caret>
          {data}
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem onClick={weightClick}>Weight</DropdownItem>
          <DropdownItem onClick={fatRatioClick}>Fat Ratio</DropdownItem>
        </DropdownMenu>
      </ButtonDropdown>
      <LineChart
        width={350}
        height={400}
        data={chartData}
        margin={{
          top: 20,
          right: 40,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line
          type="basis"
          dataKey={`${data == "Weight" ? "targetWeight" : "targetFatRatio"}`}
          stroke="red"
          strokeDasharray="3 3"
          dot={{ r: 0.1 }}
          strokeWidth={1.5}
        />
        <Line
          type="monotone"
          dataKey={`${data == "Weight" ? "weight" : "fatRatio"}`}
          stroke="#82ca9d"
          strokeWidth={3}
        />
      </LineChart>
    </>
  );
};
