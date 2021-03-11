import React from 'react';


function Project () {
  return(
    <div className="portfolio__img">
      <img src={require('../assets/madara.jpg').default} alt="pol" />
        
      <div className="portfolio__link">
        <a className="portfolio__link-name" href="#link1" > View Details </a>
      </div>
    </div>
  )
}

export default Project;