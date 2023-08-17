import { useState } from "react"
import EducationalExperience from "./EducationalExperience"

const GeneralInfo=()=>{
    const [name,setName] = useState('')
    const [email,setEmail] = useState('')
    const [phone,setPhone] = useState('')

    const handleNameChange=(e)=>setName(e.target.value);
    const handleMailChange=(e)=>setEmail(e.target.value);
    const handlePhoneChange=(e)=>setPhone(e.target.value);
    

   const handleSubmit = (e)=>{
    e.preventDefault();
     console.log('submit',{name,email,phone});
    };
    return(
       <div className="section">
        <h2>General Information</h2>
     <form onSubmit={handleSubmit}>
       <input type="text" placeholder="Name" value={name} onChange={handleNameChange} />
       <input type="email" placeholder="Email" value={email} onChange={handleMailChange}/>
       <input type="tel" placeholder="phone" value={phone} onChange={handlePhoneChange} />
       <EducationalExperience/>
       <button type="submit">Submit</button>
   </form>
   </div>
    );
}

export default GeneralInfo;