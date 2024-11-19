import { Button, Dropdown, Modal, Tabs } from "antd";
import {
  ApiOutlined,
  BarChartOutlined,
  CloseOutlined,
  DownloadOutlined,
  MoreOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import EditChart from "../EditChart";
import "./index.css";
import { componentTypes } from "./helper";

const AgModal = ({
  isModalOpen,
  handleClose,
  isEditing,
  setIsEditing,
  component,
  setComponent,
}) => {
  const items = [
    {
      label: "Edit Chart",
      key: "0",
      icon: <BarChartOutlined />,
    },
    {
      label: "Advanced Settings",
      key: "1",
      icon: <SettingOutlined />,
    },
    {
      label: "Unlink from Grid",
      key: "3",
      icon: <ApiOutlined />,
    },
    {
      label: "Download Chart",
      key: "4",
      icon: <DownloadOutlined />,
    },
  ];
  const getComponent = (component, componentProps) => {
    const chartItem = componentTypes[component];
    return chartItem && chartItem(componentProps);
  };
  const handleCancel = () => {
    setIsEditing(false);
    setComponent("STACKED_BAR_CHART");
  };
  return (
    <>
      <Modal
        title="Range Chart"
        centered
        keyboard={false}
        open={isModalOpen}
        onCancel={handleClose}
        width={"70vw"}
        footer={null}
        style={{
          maxWidth: "70vw",
        }}
      >
        {!isEditing && (
          <div style={{ display: "flex", justifyContent: "end" }}>
            <Dropdown
              className="edit-chart"
              menu={{ items, onClick: () => setIsEditing(true) }}
              trigger={["click"]}
            >
              <Button type="text" icon={<MoreOutlined />} />
            </Dropdown>
          </div>
        )}
        <div style={{ display: "flex" }}>
          {component && getComponent(component, {})}
          {isEditing && (
            <div className="card-container">
              <Tabs type="card" defaultActiveKey="1">
                <Tabs.TabPane
                  tab={
                    <span style={{ cursor: "pointer" }} onClick={handleCancel}>
                      <CloseOutlined />
                    </span>
                  }
                  // key={"0"}
                />
                <Tabs.TabPane tab="Chart" key={"1"}>
                  <div>
                    <EditChart setComponent={setComponent} />
                  </div>
                </Tabs.TabPane>
                <Tabs.TabPane tab="Setup" key={"2"}>
                  <div>
                    <p>Setup</p>
                  </div>
                </Tabs.TabPane>
                <Tabs.TabPane tab="Customize" key={"3"}>
                  <div>
                    <p>Customize</p>
                  </div>
                </Tabs.TabPane>
              </Tabs>
            </div>
          )}
        </div>
        {/* <StackedBarChart/>
         <LineRefrenceChart/>
         <StackedAreaChart/>
         <CustomPieChart/>
         <TwoLevelPieChart/>
         <AreaChartFillByValue/> */}
      </Modal>
    </>
  );
};

export default AgModal;
