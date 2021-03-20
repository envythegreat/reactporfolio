import React, {useState} from 'react';
import AllEdu from '../AllEdu';

function Education () {

  const [switchType, setSwitchType] = useState(true)

  return(
    <section className="education section" id="Education">
      <h2 className="section-title">My Education</h2>
      <div className="button__container">
        <button 
          className={switchType ? "button" : "button__light"}
          title="School" 
          onClick={() =>{setSwitchType(true)}}
        >school</button>
        <button 
          className={switchType ? "button__light" : "button"}
          title="School"
          onClick={() =>{setSwitchType(false)}}
        >online</button>
      </div>
      <AllEdu PswitchType={switchType} />
    </section>
  );
}
export default Education;