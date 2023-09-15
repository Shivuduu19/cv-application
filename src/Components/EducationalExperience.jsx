import { useState } from "react";

const EducationalExperience = ({ Edit }) => {
  const [school, setSchool] = useState("");
  const [studyTitle, setStudyTitle] = useState("");
  const [studydate, setStudyDate] = useState("");
  const handleSchoolChange = (e) => setSchool(e.target.value);
  const handleStudyTitleChange = (e) => setStudyTitle(e.target.value);
  const handleStudyDateChange = (e) => setStudyDate(e.target.value);
  return (
    <div className="section">
      <h2>Educational Experience</h2>
      {Edit ? (
        <div>
          <input
            type="text"
            placeholder="School"
            value={school}
            onChange={handleSchoolChange}
          />
          <input
            type="text"
            placeholder="Title of study"
            value={studyTitle}
            onChange={handleStudyTitleChange}
          />
          <input
            type="text"
            placeholder="Date of study"
            value={studydate}
            onChange={handleStudyDateChange}
          />
        </div>
      ) : (
        <div>
          <p>School:{school}</p>
          <p>Title of study:{studyTitle}</p>
          <p>Date od study:{studydate}</p>
        </div>
      )}
    </div>
  );
};
export default EducationalExperience;
