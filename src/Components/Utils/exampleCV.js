import { v4 as uuidv4 } from "uuid";
// import examplePhoto from "../../assets/examplePhoto";

const exampleCV = {
  personalInfo: {
    firstName: "jackie",
    lastName: "Den",
    title: "Senior Web Developer",
    photo: "",
    address: "avatar Street 10",
    phoneNumber: "3544546549",
    email: "jackie44Den@gmail.com",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tempus imperdiet nisl sed vestibulum. Donec gravida, nulla eget blandit fermentum, mauris nisi rutrum libero, ac pharetra erat est sit amet tellus. Quisque fermentum dolor a interdum fermentum. Maecenas vehicula ac ipsum nec gravida. Integer quis porta turpis. Aenean et metus .",
  },
  experienceInfo: [
    {
      id: uuidv4(),
      position: "Senior Web Developer",
      company: "XYZ Company.Inc",
      city: "Anytown,USA",
      from: "2020",
      to: "Present",
    },
    {
      id: uuidv4(),
      position: "Junior Web Developer",
      company: "ABC Web Solutions",
      city: "Sometown,USA",
      from: "2018",
      to: "2019",
    },
  ],
  educationInfo: [
    {
      id: uuidv4(),
      universityName: "Unviersity Namew",
      city: "Anutown,USA",
      degree: "Graduation",
      subject: "Subject",
      from: "20016",
      to: "2018",
    },
  ],
};

export default exampleCV;
