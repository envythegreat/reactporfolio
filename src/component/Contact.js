import React, {useState} from 'react';


const Contact = ({show, children, hideModal }) => {
  const [showClassName, SetShowClassName ] = useState(show ? "modal display-block" : "modal display-none")
  const handleClose = () => {
                              SetShowClassName("modal display-none")
                              hideModal()
                            }

  return (
    <div className={showClassName}>
      <section className="modal-main contact section" id="contact">
        <button className="close__Button" onClick={handleClose}>X</button>
        <h2 className="section-title" >Get In Touch</h2>

        <div className="contact__container bd-grid" >
          {/* <form action="" className="contact__form">
            <div className="contact__inputs">
              <input type="text" placeholder="Name" className="contact__input" />
              <input type="email" placeholder="Email" className="contact__input" />
            </div>
            <input type="text" placeholder="Subject" className="contact__input" />
            <textarea 
              name="" id="" cols="0" rows="0"
              placeholder="Message" className="contact__input"
            ></textarea>
            <input 
              type="submit" value="Send Message"
              className="contact__button" />
          </form> */}
          <div>

            <div className="contact__info">
              <h3 className="contact__subtitle" >Call me</h3>
              <span className="Contact__text" >+212 6126-57776</span>
              <span className="Contact__text" >+212 6638-06196</span>
            </div>

            <div className="contact__info">
              <h3 className="contact__subtitle" >Email</h3>
              <span className="Contact__text" >mhabib.alouani@gmail.com</span>
            </div>

            <div className="contact__info">
              <h3 className="contact__subtitle" >Location</h3>
              <span className="Contact__text" >Dr jaghou Rue 9 N 3</span>
              <span className="Contact__text" >Beni Mellal, Morroco</span>
            </div>

          </div>
        </div>

      </section>
    </div>
  );
};

export default Contact;