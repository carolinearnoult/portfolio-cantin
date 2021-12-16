import React from 'react';
import './Contact.css';
import contactImg from "./image/lovers.jpg"

function Contact() {
    return (
        <div className="contact component__space" id="Contact">
          <div className="row">
            <div className="col__2">
               <div className="contact__box">
                   <div className="contact__meta">
                        <h1 className="hire__text">Me Contacter</h1>
                        <p className="hire__text white">
                         Vous souhaitez avoir plus d'informations sur mes prestations, faire une demande de devis
                         ou réserver une séance.<br />
                         charlescantin@gmail.com.
                        </p>         
                   </div>
                   <div className="input__box">
                      <input type="text" className="contact name" placeholder="Votre nom *" />
                      <input type="text" className="contact email" placeholder="exemple@monadresse.com *" />
                      <input type="text" className="contact subject" placeholder="Objet du message" />
                      <textarea name="message" id="messag" placeholder="Votre message"></textarea>
                      <button className="btn__contact contact pointer" type="submit">Envoyer</button>
                   </div>
               </div> 
            </div> 

            <div className="col__2">
              <img src={contactImg} alt="photgraphie d'un bouquet de roses" className="contact__img" />
            </div>
          </div>
        </div>
    )
}

export default Contact;
