import { AgGridReact } from "ag-grid-react"; // React Data Grid Component
import "ag-grid-enterprise";
import "ag-grid-community/styles/ag-grid.css"; // Mandatory CSS required by the Data Grid
import "ag-grid-community/styles/ag-theme-quartz.css"; // Optional Theme applied to the Data Grid
import "./App.css";
import { useCallback, useMemo, useState } from "react";
import all from "./assets/all.json";

function App() {
  const pagination = true;
  const paginationPageSize = 10;
  const paginationPageSizeSelector = [10, 50, 100];
  const containerStyle = useMemo(() => ({ width: "100%", height: "100%" }), []);
  const gridStyle = useMemo(() => ({ height: "100%", width: "100%" }), []);
  const [rowData, setRowData] = useState();

  const onGridReady = useCallback(() => {
    fetch("https://www.ag-grid.com/example-assets/olympic-winners.json")
      .then((resp) => resp.json())
      .then((data) => setRowData(data));
  }, []);

  const defaultColDef = useMemo(() => {
    return {
      editable: true,
      filter: true,
    };
  }, []);

  const getCountryCode = (countryName) => {
    return all?.find((country) => country.name.common === countryName);
  };
  const CountryFlagRenderer = ({ value }) => {
    const result = getCountryCode(value);
    return (
      <span
        style={{
          display: "flex",
          height: "100%",
          width: "100%",
          alignItems: "center",
        }}
      >
        {value && (
          <img
            alt={`${result?.flags?.alt ?? ""}`}
            src={`https://flagcdn.com/h20/${result?.cca2?.toLowerCase()}.png`}
            style={{
              display: "block",
              width: "25px",
              height: "auto",
              maxHeight: "50%",
              marginRight: "12px",
              filter: "brightness(1.1)",
            }}
          />
        )}
        <p
          style={{
            textOverflow: "ellipsis",
            overflow: "hidden",
            whiteSpace: "nowrap",
          }}
        >
          {value}
        </p>
      </span>
    );
  };
  const [columnDefs] = useState([
    { field: "athlete", minWidth: 170 },
    { field: "age" },
    { field: "country", cellRenderer: CountryFlagRenderer },
    { field: "year" },
    { field: "date" },
    { field: "sport" },
    { field: "gold" },
    { field: "silver" },
    { field: "bronze" },
    { field: "total" },
  ]);

  const getContextMenuItems = (params) => {
    const result = [
      {
        // custom item
        name: "Alert " + params.value,
        action: () => {
          window.alert("Alerting about " + params.value);
        },
        cssClasses: ["red", "bold"],
      },
      {
        // custom item
        name: "Always Disabled",
        disabled: true,
        tooltip:
          "Very long tooltip, did I mention that I am very long, well I am! Long!  Very Long!",
      },
      {
        name: "Country",
        subMenu: [
          {
            name: "Ireland",
            action: () => {
              console.log("Ireland was pressed");
            },
            icon: createFlagImg("ie"),
          },
          {
            name: "UK",
            action: () => {
              console.log("UK was pressed");
            },
            icon: createFlagImg("gb"),
          },
          {
            name: "France",
            action: () => {
              console.log("France was pressed");
            },
            icon: createFlagImg("fr"),
          },
        ],
      },
      {
        name: "Person",
        subMenu: [
          {
            name: "Niall",
            action: () => {
              console.log("Niall was pressed");
            },
          },
          {
            name: "Sean",
            action: () => {
              console.log("Sean was pressed");
            },
          },
          {
            name: "John",
            action: () => {
              console.log("John was pressed");
            },
          },
          {
            name: "Alberto",
            action: () => {
              console.log("Alberto was pressed");
            },
          },
          {
            name: "Tony",
            action: () => {
              console.log("Tony was pressed");
            },
          },
          {
            name: "Andrew",
            action: () => {
              console.log("Andrew was pressed");
            },
          },
          {
            name: "Kev",
            action: () => {
              console.log("Kev was pressed");
            },
          },
          {
            name: "Will",
            action: () => {
              console.log("Will was pressed");
            },
          },
          {
            name: "Armaan",
            action: () => {
              console.log("Armaan was pressed");
            },
          },
        ],
      }, // built in separator
      "separator",
      {
        // custom item
        name: "Windows",
        shortcut: "Alt + W",
        action: () => {
          console.log("Windows Item Selected");
        },
        icon: '<img src="https://www.ag-grid.com/example-assets/skills/windows.png" />',
      },
      {
        // custom item
        name: "Mac",
        shortcut: "Alt + M",
        action: () => {
          console.log("Mac Item Selected");
        },
        icon: '<img src="https://www.ag-grid.com/example-assets/skills/mac.png"/>',
      }, // built in separator
      "separator",
      {
        // custom item
        name: "Checked",
        checked: true,
        action: () => {
          console.log("Checked Selected");
        },
        icon: '<img src="https://www.ag-grid.com/example-assets/skills/mac.png"/>',
      }, // built in copy item
      "copy",
      "separator",
      "chartRange",
    ];

    return result;
  };

  return (
    <div style={containerStyle}>
      <div
        className="ag-theme-quartz-dark" // applying the Data Grid theme
        style={gridStyle} // the Data Grid will fill the size of the parent container
      >
        <AgGridReact
          rowData={rowData}
          columnDefs={columnDefs}
          defaultColDef={defaultColDef}
          pagination={pagination}
          paginationPageSize={paginationPageSize}
          paginationPageSizeSelector={paginationPageSizeSelector}
          onGridReady={onGridReady}
          cellSelection={true}
          // allowContextMenuWithControlKey={true}
          // preventDefaultOnContextMenu
          getContextMenuItems={getContextMenuItems}
        />
      </div>
    </div>
  );
}

export default App;
