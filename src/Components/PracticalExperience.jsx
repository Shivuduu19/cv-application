import { useState } from "react";

const PracticalExperience = ({ Edit }) => {
  const [companyName, setCompanyName] = useState("");
  const [positionTitle, setPositionTitle] = useState("");
  const [responsibilities, setResponsibilities] = useState("");
  const [startDate, setDateFrom] = useState("");
  const [endDate, setEndDate] = useState("");
  const handleCompanyNameChange = (e) => setCompanyName(e.target.value);
  const handlePositionTitleChange = (e) => setPositionTitle(e.target.value);
  const handleResponsibilities = (e) => setResponsibilities(e.target.value);
  const handleStartDate = (e) => setDateFrom(e.target.value);
  const handleEndDate = (e) => setEndDate(e.target.value);
  return (
    <div className="section">
      <h2>Practical Experience</h2>
      {Edit ? (
        <div>
          <input
            type="text"
            placeholder="Company Name"
            value={companyName}
            onChange={handleCompanyNameChange}
          />
          <input
            type="text"
            placeholder="position Title"
            value={positionTitle}
            onChange={handlePositionTitleChange}
          />
          <input
            type="text"
            placeholder="Responsibilities"
            value={responsibilities}
            onChange={handleResponsibilities}
          />
          <input
            type="text"
            placeholder="Start Date"
            value={startDate}
            onChange={handleStartDate}
          />
          <input
            type="text"
            placeholder="End Date"
            value={endDate}
            onChange={handleEndDate}
          />
        </div>
      ) : (
        <div>
          <p>Company Name:{companyName}</p>
          <p>Position Title:{positionTitle}</p>
          <p>Responsibilities:{responsibilities}</p>
          <p>Start Date:{startDate}</p>
          <p>End Date :{endDate}</p>
        </div>
      )}
    </div>
  );
};
export default PracticalExperience;
