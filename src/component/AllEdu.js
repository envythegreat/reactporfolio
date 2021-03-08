import React from 'react';
import Eduinfo from './Eduinfo';

function AllEdu({PswitchType}) {
  return(
    <>
      {
        PswitchType 
          ? 
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
          :
          <div className="education__container bd-grid" >
            <Eduinfo 
              year="2020- present"
              university="Hackerrank"
              type="JavaScript"
              speciality="NA" 
            />
            <Eduinfo 
              year="2019 - 2020"
              university="Hackerrank"
              type="ReactJs"
              speciality="NA" 
            />
            <Eduinfo 
              year="2017 - 2019"
              university="Coursera"
              type="Building Web Applications in PHP"
              speciality="NA" 
            />
            <Eduinfo 
              year="2017 - 2019"
              university="Coursera"
              type="Python Data Structures"
              speciality="NA" 
            />
            <Eduinfo 
              year="2017 - 2019"
              university="Coursera"
              type="Structured Query Language (SQL)"
              speciality="NA" 
            />
            <Eduinfo 
              year="2017 - 2019"
              university="Coursera"
              type="Usable Security"
              speciality="NA" 
            />
        </div>
        }
    </>
  );
}

export default AllEdu;