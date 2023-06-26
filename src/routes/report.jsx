import { useEffect, useState } from "react";
import { Tabs } from "antd";
import withPrimaryLayout from "../layout/primary-layout";
import { getDocuments, updateDocument } from "../db/firebase";
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

  const onMarkDone = async (id, data) => {
    await updateDocument({
      collection_name: "queries",
      data,
      id,
    });
    const documents = await getDocuments({ collection_name: "queries" });
    setDocuments(documents);
  };

  const items = [
    {
      key: "1",
      label: `Active`,
      children: (
        <ReportTable
          rowKey="id"
          onAction={onMarkDone}
          type="ACTIVE"
          documents={documents.filter(({ active }) => active)}
        />
      ),
    },
    {
      key: "2",
      label: `Done`,
      children: (
        <ReportTable
          rowKey="id"
          onAction={onMarkDone}
          type="DONE"
          documents={documents.filter(({ active }) => !active)}
        />
      ),
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
          <Tabs defaultActiveKey="1" items={items} />
        </div>
      </div>
    </div>
  );
};

const PLReport = withPrimaryLayout(Report);

export default PLReport;
