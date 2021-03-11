import React from 'react';
import Project from '../Project';

function Projects () {
  return (
    <div className="portfolio section" id="portfolio">
      <h2 className="section-title">Projects</h2>
      <div className="portfolio__container bd-grid">
        <Project />
        <Project />
        <Project />
      </div>
    </div>
  );
}

export default Projects;