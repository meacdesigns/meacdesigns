import { useEffect, useState } from "react";
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

  return (
    <div className="container">
      {/* Need to relook */}
      <div style={{
        paddingTop: "80px"
      }}>
        <div>
          <Heading2 text={"Report"} />
        </div>
        <div className="mb-6">
          <ReportTable documents={documents} />
        </div>
      </div>
    </div>
  );
};

const PLReport = withPrimaryLayout(Report);

export default PLReport;
