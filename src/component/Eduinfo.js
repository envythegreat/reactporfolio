import React from 'react';

function Eduinfo({year, university, type, speciality}) {
  return(
		<div className="education__content" >
      <div>
        <h3 className="education__year"> {year} </h3>
        <span className="education__university" > {university} </span>
      </div>
      <div className="education__time" >
        <span className="education__rounder" ></span>
        <span className="education__line" ></span>
      </div>
      <div>
        <h3 className="education__race"> {type} </h3>
        <span className="education__speciality" > {speciality} </span>
      </div>
    </div>
  );
}

export default Eduinfo;