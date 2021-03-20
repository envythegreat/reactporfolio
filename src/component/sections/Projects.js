import React, {useState} from 'react';
import Project from '../Project';


function Projects () {
  const [switchType, setSwitchType] = useState('Web');
  const renderSwitch = (param) => {
    switch (param) {
      case 'Web':
        return (<>
                  <Project imgLink={require('../../assets/Webex1.png').default} link="#linkUIUX1" />
                  <Project imgLink={require('../../assets/Webex2.png').default} link="#linkUIUX2" />
                  <Project imgLink={require('../../assets/Webex3.png').default} link="#linkUIUX2" />
                  <Project imgLink={require('../../assets/Webex4.png').default} link="#linkUIUX2" />
                </>);
      case 'Mobile':
        return (<>
                  <Project imgLink={require('../../assets/Uiex1.png').default} link="#linkUIUX1" />
                  <Project imgLink={require('../../assets/Uiex2.png').default} link="#linkUIUX2" />
                  <Project imgLink={require('../../assets/Uiex2.png').default} link="#linkUIUX2" />
                  <Project imgLink={require('../../assets/Uiex2.png').default} link="#linkUIUX2" />
                </>);
      case 'UIUX':
        return (<>
                  <Project imgLink={require('../../assets/Uiex1.png').default} link="#linkUIUX1" />
                  <Project imgLink={require('../../assets/Uiex2.png').default} link="#linkUIUX2" />
                  <Project imgLink={require('../../assets/Uiex2.png').default} link="#linkUIUX2" />
                </>);
      default:
        return null
    }
  }
  return (
    <div className="portfolio section" id="Portfolio">
      <h2 className="section-title">Projects</h2>
      <div className="button__container">
        <button 
          className={switchType === 'Web' ? "button" : "button__light"}
          title="School" 
          onClick={() =>{setSwitchType('Web')}}
        >Web</button>
        <button 
          className={switchType === 'Mobile' ? "button" : "button__light"}
          title="School"
          onClick={() =>{setSwitchType('Mobile')}}
        >Mobile</button>
        <button 
          className={switchType === 'UIUX' ? "button" : "button__light"}
          title="School"
          onClick={() =>{setSwitchType('UIUX')}}
        >UI/UX</button>
      </div>
      <div className="portfolio__container bd-grid">
        {renderSwitch(switchType)}
      </div>
    </div>
  );
}

export default Projects;