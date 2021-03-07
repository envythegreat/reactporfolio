import React from 'react';

function Skill(props) {
  return(
    <div className="skills__data">
      <span className="skills__name">{props.name}</span>
      <span className="skills_number">{props.number}</span>
      <span className="skills__bar" style={{width:props.width}}></span>
    </div>
  );
}

export default Skill;