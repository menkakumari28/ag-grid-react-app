import {
  CopyOutlined,
  DownloadOutlined,
  FileExcelOutlined,
  ScissorOutlined,
  SnippetsOutlined,
  SyncOutlined,
} from "@ant-design/icons";

export const columns = [
  { title: `Name`, dataIndex: `name` },
  { title: `Age`, dataIndex: `age` },
  { title: `Address`, dataIndex: `address` },
  { title: `City`, dataIndex: `city` },
  { title: `State`, dataIndex: `state` },
  { title: `Street`, dataIndex: `street` },
  { title: `Pin`, dataIndex: `pin` },
  { title: `Number`, dataIndex: `number` },
];

export const dataMap = [
  {
    name: `John Brown`,
    age: 32,
    address: `New York No. 1 Lake Park`,
    city: `London`,
    state: `London`,
    street: 2,
    pin: `1234`,
    number: `8765432144`,
  },
  {
    name: `Jim Green`,
    age: 42,
    address: `London No. 1 Lake Park`,
    city: `London`,
    state: `London`,
    street: 2,
    pin: `1234`,
    number: `8765432144`,
  },
  {
    name: `Joe Black`,
    age: 32,
    address: `Sidney No. 1 Lake Park`,
    city: `London`,
    state: `London`,
    street: 2,
    pin: `1234`,
    number: `8765432144`,
  },
  {
    name: `Jim Red`,
    age: 32,
    address: `London No. 2 Lake Park`,
    city: `London`,
    state: `London`,
    street: 2,
    pin: `1234`,
    number: `8765432144`,
  },
  {
    name: `Jim Red`,
    age: 32,
    address: `London No. 2 Lake Park`,
    city: `London`,
    state: `London`,
    street: 2,
    pin: `1234`,
    number: `8765432144`,
  },
  {
    name: `Jim Red`,
    age: 32,
    address: `London No. 2 Lake Park`,
    city: `London`,
    state: `London`,
    street: 2,
    pin: 1234,
    number: 8765432144,
  },
];
function getData() {
  let data = [];
  let countries = "Austria,Belgium,Chile,Denmark,Finland,Japan,UK".split(",");
  for (let i = 0; i < 300; i++) {
    data.push({
      id: i,
      from: countries[i % countries.length],
      to: countries[(i + 1) % countries.length],
      sales: Math.random() * 10000,
      expenses: Math.random() * 5000,
      amount: Math.random() * 10000,
      extra: Math.random() * 10000,
    });
  }
  return data;
}
export const data = dataMap;

export const items = [
  {
    label: "Cut",
    key: "1",
    icon: <ScissorOutlined />,
    disabled: true,
  },
  {
    label: "Copy",
    key: "2",
    icon: <CopyOutlined />,
  },
  {
    label: "Copy with Headers",
    key: "3",
    icon: <CopyOutlined />,
  },
  {
    label: "Copy with Group Headers",
    key: "4",
    icon: <CopyOutlined />,
  },
  {
    label: "Paste",
    key: "5",
    icon: <SnippetsOutlined />,
    disabled: true,
  },
  {
    type: "divider",
  },
  {
    label: "Chart Range",
    key: "6",
    icon: <SnippetsOutlined />,
    children: [
      {
        label: "Column",
        key: "6-1",
        children: [
          {
            label: "Grouped",
            key: "6-1-1",
          },
          {
            label: "Stacked",
            key: "6-1-2",
          },
          {
            label: "100% Stacked",
            key: "6-1-3",
          },
        ],
      },
      {
        label: "Bar",
        key: "6-2",
        children: [
          {
            label: "Grouped",
            key: "6-2-1",
          },
          {
            label: "Stacked",
            key: "6-2-2",
          },
          {
            label: "100% Stacked",
            key: "6-2-3",
          },
        ],
      },
      {
        label: "Pie",
        key: "6-3",
        children: [
          {
            label: "Pie",
            key: "6-3-1",
          },
          {
            label: "Donut",
            key: "6-3-2",
          },
        ],
      },
      {
        label: "Line",
        key: "6-4",
      },
      {
        label: "X Y (Scatter)",
        key: "6-5",
        children: [
          {
            label: "Scatter",
            key: "6-5-1",
          },
          {
            label: "Bubble",
            key: "6-5-2",
          },
        ],
      },
      {
        label: "Area",
        key: "6-6",
        children: [
          {
            label: "Area",
            key: "6-6-1",
          },
          {
            label: "Stacked",
            key: "6-6-2",
          },
          {
            label: "100% Stacked",
            key: "6-6-3",
          },
        ],
      },
      {
        label: "Polar",
        key: "6-7",
        children: [
          {
            label: "Radar Line",
            key: "6-7-1",
          },
          {
            label: "Radar Area",
            key: "6-7-2",
          },
          {
            label: "Nightingale",
            key: "6-7-3",
          },
          {
            label: "Radial Column",
            key: "6-7-4",
          },
          {
            label: "Radial Bar",
            key: "6-7-5",
          },
        ],
      },
      {
        label: "Statistical",
        key: "6-8",
        children: [
          {
            label: "Box Plot",
            key: "6-8-1",
          },
          {
            label: "Histogram",
            key: "6-8-2",
          },
          {
            label: "Range Bar",
            key: "6-8-3",
          },
          {
            label: "Range Area",
            key: "6-8-4",
          },
        ],
      },
      {
        label: "Hierarchical",
        key: "6-9",
        children: [
          {
            label: "Treemap",
            key: "6-9-1",
          },
          {
            label: "Sunburst",
            key: "6-9-2",
          },
        ],
      },
      {
        label: "Specialized",
        key: "6-10",
        children: [
          {
            label: "Heatmap",
            key: "6-10-1",
          },
          {
            label: "Waterfall",
            key: "6-10-2",
          },
        ],
      },
      {
        label: "Combination",
        key: "6-11",
        children: [
          {
            label: "Column & Line",
            key: "6-11-1",
          },
          {
            label: "Area & Column",
            key: "6-11-2",
          },
        ],
      },
    ],
  },
  {
    label: "Export",
    key: "7",
    icon: <DownloadOutlined />,
    children: [
      {
        label: "Excel Export",
        key: "7-1",
        icon: <FileExcelOutlined />,
      },
    ],
  },
  {
    type: "divider",
  },
  {
    label: "Replay Demo",
    key: "8",
    icon: <SyncOutlined />,
  },
];
