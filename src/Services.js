import React from "react";
import "./Services.css";
import Blog1 from './image/tarif_img1.jpg';
import Blog2 from './image/tarif_img2.jpg';
import Blog3 from './image/tarif_img3.jpg';
import Blog4 from './image/tarif_img4.jpg';
import Blog5 from './image/tarif_img5.jpg';
import Blog6 from './image/tarif_img6.jpg';

function Blog() {
  return (
    <div className="blog component__space" id="Services">
      <div className="heading">
        <h1 className="heading__tarifs">Mes tarifs & prestations</h1>
        <p className="heading p__color">
          Photographe de vie, je vous propose de réaliser vos reportages sur mesure selon vos envies.
        </p>  
      </div>
      <div className="container">
          <div className="row">
              <div className="col__3">
              <div className="project__box pointer relative">
                     <div className="project__box__img pointer relative">
                         <div className="project__img__box">
                             <img src={Blog1} alt="" className="project__img" />
                         </div>
                         <div className="mask__effect"></div>
                     </div>
                      <div className="Blog__meta absolute">
                         <h4 className="project__text">"Juste moi" 130€</h4>
                         <p className="about__text p__color__tarifs">Portraits réalisées en extérieur ou en studio, sélécition de 25 photographies</p>
                         <a href="#" className="blog project__btn btn">Demander un devis</a>
                       </div>
                 </div>
              </div>

              <div className="col__3">
              <div className="project__box pointer relative">
                     <div className="project__box__img pointer relative">
                         <div className="project__img__box">
                             <img src={Blog2} alt="" className="project__img" />
                         </div>
                         <div className="mask__effect"></div>
                     </div>
                      <div className="Blog__meta absolute">
                         <h4 className="project__text">"Pour deux" 195€</h4>
                          <p className="about__text p__color__tarifs">Portraits réalisées en extérieur ou en studio, sélécition de 25 photographies</p>
                         <a href="#" className="blog project__btn btn">Demander un devis</a>
                       </div>
                 </div>
              </div>

              <div className="col__3">
              <div className="project__box pointer relative">
                     <div className="project__box__img pointer relative">
                         <div className="project__img__box">
                             <img src={Blog3} alt="" className="project__img" />
                         </div>
                         <div className="mask__effect"></div>
                     </div>
                      <div className="Blog__meta absolute">
                         <h4 className="project__text">"Famille" 220€</h4>
                          <p className="about__text p__color__tarifs">Jusqu'à 4 personnes ensuite 30 euros supp/personne (Hormis enfant jusqu'à 2ans) </p>
                         <a href="#" className="blog project__btn btn">Demander un devis</a>
                       </div>
                 </div>
              </div>

               <div className="col__3">
              <div className="project__box pointer relative">
                     <div className="project__box__img pointer relative">
                         <div className="project__img__box">
                             <img src={Blog4} alt="" className="project__img" />
                         </div>
                         <div className="mask__effect"></div>
                     </div>
                      <div className="Blog__meta absolute">
                         <h4 className="project__text">"Il était une fois" 160€</h4>
                          <p className="about__text p__color__tarifs">Photo de grossesse (à votre domicile, en extérieur ou en studio)</p>
                         <a href="#" className="blog project__btn btn">Demander un devis</a>
                       </div>
                 </div>
              </div>

               <div className="col__3">
              <div className="project__box pointer relative">
                     <div className="project__box__img pointer relative">
                         <div className="project__img__box">
                             <img src={Blog5} alt="" className="project__img" />
                         </div>
                         <div className="mask__effect"></div>
                     </div>
                      <div className="Blog__meta absolute">
                         <h4 className="project__text">"Mon nouveau né" 100 €</h4>
                          <p className="about__text p__color__tarifs">Portrait de votre nouveau né jusqu'à 3 ans à votre domicile </p>
                         <a href="#" className="blog project__btn btn">Demander un devis</a>
                       </div>
                 </div>
              </div>

               <div className="col__3">
              <div className="project__box pointer relative">
                     <div className="project__box__img pointer relative">
                         <div className="project__img__box">
                             <img src={Blog6} alt="" className="project__img" />
                         </div>
                         <div className="mask__effect"></div>
                     </div>
                      <div className="Blog__meta absolute">
                         <h4 className="project__text">"J'immortalise l'évènement"</h4>
                          <p className="about__text p__color__tarifs">Prestation de votre futur mariage ou baptême sur demande de devis</p>
                         <a href="#" className="blog project__btn btn">Demander un devis</a>
                       </div>
                 </div>
              </div>

          </div>
      </div>
    </div>
  );
}

export default Blog;