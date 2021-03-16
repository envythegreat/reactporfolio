import React from 'react';


function Project ({imgLink, link}) {
  return(
    <div className="portfolio__img">
      <img src={imgLink} alt="pol" />
        
      <div className="portfolio__link">
        <a className="portfolio__link-name" href={link} > View Details </a>
      </div>
    </div>
  )
}

export default Project;