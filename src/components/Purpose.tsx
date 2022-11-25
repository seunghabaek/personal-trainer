import { ReactElement, useState, useRef } from "react";
import { FiArrowDown } from "react-icons/fi";
import "./Purpose.css";
import Button from "react-bootstrap/Button";

export const List = (): ReactElement => {
  const [closeList, setCloseList] = useState<boolean>(false);
  const listRef = useRef<HTMLDivElement>(null);

  const foldList = () => {
    if (!listRef || !listRef.current) {
      return;
    }

    const style = listRef.current.style;

    if (closeList) {
      style.maxHeight = "0";
    } else {
      style.maxHeight = `${listRef.current.scrollHeight}px`;
    }
    setCloseList(!closeList);
  };

  return (
    <>
      <h4>Why How What</h4>
      <FiArrowDown
        className={`${closeList ? "open" : "close"}`}
        onClick={foldList}
      />

      <div className="content" ref={listRef}>
        여러가지 목적이 들어가요
      </div>
    </>
  );
};
