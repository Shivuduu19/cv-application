import { v4 as uuidv4 } from "uuid";
const emptyCv = {
  personalInfo: {
    firstName: "",
    lastName: "",
    title: "",
    photo: "",
    address: "",
    phoneNumber: "",
    email: "",
    description: "",
  },
  educationalInfo: {
    id: uuidv4(),
    universityName: "",
    city: "",
    degree: "",
    subject: "",
    from: "",
    to: "",
  },
  experienceInfo: {
    id: uuidv4(),
    position: "",
    company: "",
    city: "",
    from: "",
    to: "",
  },
};
export default emptyCv;
