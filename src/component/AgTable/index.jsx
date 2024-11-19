import "@mescius/wijmo.styles/wijmo.css";
import { FlexGrid } from "@mescius/wijmo.react.grid";
import { data, items } from "./data";
import { Dropdown } from "antd";
import { useCallback, useState } from "react";
import AgModal from "../AgModal";

const AgTable = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [component, setComponent] = useState("STACKED_BAR_CHART");
  const handleClose = () => {
    setIsModalOpen(false);
    setIsEditing(false);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const onClick = useCallback(({ item, key, keyPath, domEvent }) => {
    // console.log("Clicked", item, key, keyPath);
    setIsModalOpen(true);
  }, []);
  return (
    <>
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
            selectionMode="MultiRange"
            showSelectedHeaders="All"
            headersVisibility={1}
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
    </>
  );
};

export default AgTable;
