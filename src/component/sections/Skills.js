import React from 'react';
import Skill from '../Skill';

function Skills () {
  return(
    <section className="skills section" id="skills">
      <h2 className="section-title">My Skills</h2>
      <div className="skills__container bd-grid">
        <div className="skills__content">
          <h3 className="skills__subtitle">Front-end Development</h3>
          <Skill name="HTML / Css" number="100%" width="100%" />
          <Skill name="Javascript" number="100%" width="100%" />
          <Skill name="Jquery / Bootsrap" number="100%" width="100%" />
          <Skill name="React" number="80%" width="80%" />
          <Skill name="React Native" number="90%" width="90%" />
        </div>
        <div className="skills__content">
          <h3 className="skills__subtitle">Back-end Development</h3>
          <Skill name="Nodejs" number="100%" width="100%" />
          <Skill name="PHP" number="90%" width="90%" />
          <Skill name="Java" number="50%" width="50%" />
          <Skill name="Mysql / MongoDB / Sequelize" number="90%" width="90%" />
          <Skill name="Expressjs /  Rest Api / Firebase" number="90%" width="90%" />
        </div>
      </div>
    </section>
  );
}

export default Skills;