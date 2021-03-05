import React from 'react'


function About () {
  return(
    <section className="about section" id="about">
      <h2 className="section-title">About</h2>
      <div className="about__container bd-grid">
        <div className="about__img">
          <img src={require('../../assets/madara.png').default} alt="" />
        </div>
        <div>
          <h2 className="about__subtitle">Mohamed Habib Alouani</h2>
          <span className="about__profession">Full Stack Developer</span>
          <p className="about__text">
            I have a clear, logical mind with a practical approach to problem-solving and a drive to see things
            through to completion. i always strive to achieve the highest standard possible at any given task in any
            given situation. When it comes to making something with Javascript i'm creatively insane. I am
            currently looking for an opportunity to use my technical skills in a challenging working environment and
            become a valuable asset to the organization that I work for.
          </p>
          <div className="about__social">
            <a href="#1" className="about__social-icon"><box-icon name='linkedin-square' type='logo' ></box-icon></a>
            <a href="#2" className="about__social-icon"><box-icon type='logo' name='github'></box-icon></a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;