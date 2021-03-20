import React, {useState} from 'react';
import {Setting} from './Waves'
function Settings () {
  const [nav, setNav] = useState();
  const openNav = () => setNav(true);
  const closeNav = () => setNav(false);
  return (
    <div className="Settings__Container">
      <s onClick={openNav}>
        <Setting/>
      </s>
      <div className="sidenav" style={nav ? {width: '250px'} : {width: '0px'}}>
        <a href="#1" className="closebtn" onClick={closeNav}>&times;</a>
      </div>
    </div>
  );
}

export default Settings;