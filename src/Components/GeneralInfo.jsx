import { useState } from "react";
import EducationalExperience from "./EducationalExperience";
import PracticalExperience from "./PracticalExperience";

const GeneralInfo = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [isEdit, setIsEdit] = useState(false);

  const handleNameChange = (e) => setName(e.target.value);
  const handleMailChange = (e) => setEmail(e.target.value);
  const handlePhoneChange = (e) => setPhone(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsEdit(false);
    console.log("submit", { name, email, phone });
  };
  const handleEdit = () => {
    setIsEdit(true);
  };
  return (
    <div className="section">
      <h2>General Information</h2>
      {isEdit ? (
        <div>
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={handleNameChange}
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={handleMailChange}
          />
          <input
            type="tel"
            placeholder="phone"
            value={phone}
            onChange={handlePhoneChange}
          />
          <EducationalExperience Edit={isEdit} />
          <PracticalExperience Edit={isEdit} />
          <button onClick={handleSubmit}>Submit</button>
        </div>
      ) : (
        <div>
          <p>Name:{name}</p>
          <p>Email:{email}</p>
          <p>Phone:{phone}</p>
          <EducationalExperience edit={isEdit} />
          <PracticalExperience />
          <button onClick={handleEdit}>Edit</button>
        </div>
      )}
    </div>
  );
};

export default GeneralInfo;
