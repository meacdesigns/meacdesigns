import { Table } from "antd";

const ReportTable = ({ documents }) => {
  const columns = [
    {
      title: "#",
      dataIndex: "name",
      render: (value, item, index) => {
        return <>{index + 1}</>;
      },
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Mobile Number",
      dataIndex: "mobile_number",
      key: "mobile_number",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Message",
      dataIndex: "message",
      key: "message",
    },
    {
      title: "Created On",
      dataIndex: "message",
      key: "message",
    },
  ];
  return <Table scroll={{ x: 1000 }} dataSource={documents} columns={columns} />;
};

export default ReportTable;
