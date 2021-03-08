import React from 'react';
import Eduinfo from '../Eduinfo';

function Education () {
  return(
    <section className="education section">
      <h2 className="section-title">My Education</h2>
      <div className="education__container bd-grid" >
        <Eduinfo 
          year="2020- present"
          university="Enset Mohammadia"
          type="Master in Computer Engineering - Big Data and Cloud 
          Computing"
          speciality="Mohammedia" 
        />
        <Eduinfo 
          year="2019 - 2020"
          university="Enset Mohammadia"
          type="BS degree in Web and Mobile Development"
          speciality="Mohammedia" 
        />
        <Eduinfo 
          year="2017 - 2019"
          university="ECOSIG"
          type="Software development technician"
          speciality="beni Mellal" 
        />
      </div>
    </section>
  );
}
export default Education;