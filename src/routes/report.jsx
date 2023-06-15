import { useEffect, useState } from "react";
import { Tabs } from "antd";
import withPrimaryLayout from "../layout/primary-layout";
import { getDocuments } from "../db/firebase";
import { Heading2 } from "../components/Heading/Heading";
import ReportTable from "../components/ReportTable/ReportTable";

const Report = () => {
  const [documents, setDocuments] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const documents = await getDocuments({ collection_name: "queries" });
      setDocuments(documents);
    }
    fetchData();
  }, []);

  const onChange = (key) => {
    console.log(key);
  };

  const items = [
    {
      key: "1",
      label: `Active`,
      children: <ReportTable documents={documents} />,
    },
    {
      key: "2",
      label: `Done`,
      children: <ReportTable documents={documents} />,
    },
  ];

  return (
    <div className="container">
      {/* Need to relook */}
      <div
        style={{
          paddingTop: "100px",
        }}
      >
        <div>
          <Heading2 text={"Report"} />
        </div>
        <div className="pt-6 mb-6">
          <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
        </div>
      </div>
    </div>
  );
};

const PLReport = withPrimaryLayout(Report);

export default PLReport;
