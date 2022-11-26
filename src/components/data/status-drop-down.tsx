import { useState } from "react";
import {
  ButtonDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";

export const StatusDropdown = () =>
  //   { data }: { data: string },
  //   { setData }: { setData: string }
  {
    const [dropdownOpen, setDropdownOpen] = useState<boolean>(false);
    const [data, setData] = useState<string>("data");
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
      <ButtonDropdown isOpen={dropdownOpen} toggle={toggle}>
        <DropdownToggle color="warning" caret>
          {data}
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem onClick={weightClick}>Weight</DropdownItem>
          <DropdownItem onClick={fatRatioClick}>Fat Ratio</DropdownItem>
        </DropdownMenu>
      </ButtonDropdown>
    );
  };
