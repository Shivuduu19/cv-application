import { useState } from "react"

const EducationalExperience=()=>{
    const [school,setSchool]=useState('');
    const [studyTitle,setStudyTitle]=useState('');
    const [studydate,setStudyDate]=useState('');
    const handleSchoolChange=(e)=>setSchool(e.target.value);
    const handleStudyTitleChange=(e)=>setStudyTitle(e.target.value);
    const handleStudyDateChange=(e)=>setStudyDate(e.target.value);
    return(
    <div className="section">
            <h2>Educational Experience</h2>
        <form >
           <input type="text" placeholder="School" value={school} onChange={handleSchoolChange} />
            <input type="email" placeholder="Email" value={studyTitle} onChange={handleStudyTitleChange}/>
             <input type="tel" placeholder="Phone" value={studydate} onChange={handleStudyDateChange} />
           
        </form>
    </div>
);
}
export default EducationalExperience;