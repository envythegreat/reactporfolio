import React from 'react';
import {AnimatedWaves} from '../Waves'

function Home () {
  return(
    <section className="home" id="Home">
      <div className="home__container bd-grid">
        <h1 className="home__title"><span>Mohamed Habib</span><br/>ALOUANI </h1>
        <div className="home__scroll">
            {/* <a href="#about" className="home__scroll-link">
              <box-icon color="#3bba9c" name='up-arrow-alt' ></box-icon>Scroll down
            </a> */}
        </div>
        
        {/* <img src={require('../../assets/sukuna.png').default} alt="ss" className="home__img" /> */}
      </div>
      <AnimatedWaves classnames="waves" />
    </section>
  );
}

export default Home;
