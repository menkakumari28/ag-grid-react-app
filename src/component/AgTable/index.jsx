import "@mescius/wijmo.styles/wijmo.css";
import { FlexGrid } from "@mescius/wijmo.react.grid";
import {
  CellRange,
  ClipStringOptions,
} from "@mescius/wijmo.grid";
import { data, items } from "./data";
import { Dropdown } from "antd";
import { useCallback, useRef, useState } from "react";
import AgModal from "../AgModal";
import { csvToJson } from "./helper";
import { AgTableContext } from "../../context/AgTableContext";

const AgTable = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [component, setComponent] = useState("STACKED_BAR_CHART");
  const [selectedData, setSelectedData] = useState({});
  const flexGridRef = useRef(null);
  const handleClose = () => {
    setIsModalOpen(false);
    setIsEditing(false);
  };
  const initializeGrid = useCallback((flexGrid) => {
    flexGridRef.current = flexGrid;
    flexGrid.onSelectionChanged(null);
  });
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const onClick = useCallback(({ item, key, keyPath, domEvent }) => {
    // console.log("Clicked", item, key, keyPath);
    setIsModalOpen(true);
  }, []);

  const onSelectionChanged = useCallback(() => {
    const { _row, _col, _row2, _col2 } = flexGridRef.current.selection;
    // console.log(flexGridRef.current.columns, flexGridRef.current.rows);
    const grid = flexGridRef.current;
    let rng = new CellRange(_row, _col, _row2, _col2);
    const csvString = flexGridRef.current.getClipString(
      rng,
      ClipStringOptions.CSV,
      true,
      false
    );
    const s = csvToJson(csvString);
    setSelectedData(s);
  });

  return (
    <>
      <AgTableContext.Provider
        value={{
          isModalOpen,
          setIsModalOpen,
          isEditing,
          setIsEditing,
          component,
          setComponent,
          selectedData,
          setSelectedData,
        }}
      >
        <Dropdown
          menu={{
            items,
            onClick,
          }}
          trigger={["contextMenu"]}
        >
          <div className="container-fluid">
            <FlexGrid
              stickyHeaders
              showMarquee={true}
              allowSorting="MultiColumn"
              itemsSource={data}
              headersVisibility={1}
              initialized={initializeGrid}
              selectionChanged={onSelectionChanged}
            />
          </div>
        </Dropdown>
        <AgModal
          isModalOpen={isModalOpen}
          handleOk={handleOk}
          handleClose={handleClose}
          isEditing={isEditing}
          setIsEditing={setIsEditing}
          component={component}
          setComponent={setComponent}
        />
      </AgTableContext.Provider>
    </>
  );
};

export default AgTable;
