import React, { useContext, useEffect, useMemo, useRef, useState } from "react";
import { useQuery, useMutation } from "@apollo/client";
import "./list.css";

export const List = (listName, listClass, event, listData, listItem) => {
  const [dragging, setDragging] = useState(false);
  const handleDragEnter = (e, ...params) => {
    console.log("list enter");
  };
  const handleDrag = (e) => {
    console.log(dragging);
  };
  return (
    <div
      id={listName}
      className={listClass}
      onDragEnter={(e) => {
        handleDragEnter(e, { list: { listName } });
      }}
    >
      {listData.map((item) => ({ listItem }))}
    </div>
  );
};
