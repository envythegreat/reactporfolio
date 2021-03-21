// import 'boxicons';
import React, {useState} from 'react';
import {Setting, SimpleWaves, AnimatedWaves} from './Waves';
import CircleColor from './CircleColor';
import SmallWaves from './SmallWaves'

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
        <h2 className="Setting__title">Background Color</h2>
        <div className="color__picker">
          <CircleColor color="snow" />
          <CircleColor color="#916C7E" />
          <CircleColor color="#786C91" />
          <CircleColor color="#808080" />
          <CircleColor color="#D682AA" />
          <CircleColor color="#933060" />
          <CircleColor color="#12060C" />
          <CircleColor color="#F6E4ED" />
          <CircleColor color="#9D83D6" />
          <CircleColor color="#D682A4" />
          <CircleColor color="#D6B083" />
          <CircleColor color="#5461D9" />
          <CircleColor color="#6C78DF" />
          <CircleColor color="#8387AA" />
        </div>
        <h2 className="Setting__title">Svg Waves</h2>
        <SmallWaves>
          <SimpleWaves classnames="smallSvg" />
        </SmallWaves>
        <SmallWaves>
          <AnimatedWaves classnames="smallSvg" />
        </SmallWaves>
      </div>
    </div>
  );
}

export default Settings;