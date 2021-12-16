import React from 'react';
import './Galerie.css';
import Project1 from './image/wedding2.jpg'; 
import Project2 from './image/pregnancy2.jpg'; 
import Project3 from './image/baby2.jpg'; 
import Project4 from './image/family2.jpg'; 
import Project5 from './image/bapteme2.jpg'; 
import Project6 from './image/couple.jpg'; 


function Galerie() {
    return (
        <div className="galerie component__space" id="Portfolio">
          <div className="heading">
        <h1 className="heading">Ma Galerie</h1>
        <p className="heading p__color">
          Bienveillant, je vous guiderai afin que vous soyez les plus naturels possible, pour des photos à votre image.
        </p>
      </div>
      <div className="container">
        <div className="row">
           <div className="col__3">
               <div className="project__box pointer relative">
                   <div className="project__box__img pointer relative">
                     <div className="project__img__box">
                        <img src={Project1} alt="" className="project__img" />
                     </div>
                     <div className="mask__effect"></div>
                   </div>
                 <div className="project__meta absolute">
                    <h5 className="project__text">Charles Cantin Photographies</h5> 
                    <h4 className="project__text">Mariage</h4>
                    <a href="#"className="project__btn">Voir la Galerie</a> 
                 </div>
               </div>
           </div> 

            <div className="col__3">
               <div className="project__box pointer relative">
                   <div className="project__box__img pointer relative">
                     <div className="project__img__box">
                        <img src={Project2} alt="" className="project__img" />
                     </div>
                     <div className="mask__effect"></div>
                   </div>
                 <div className="project__meta absolute">
                    <h5 className="project__text">Charles Cantin Photographies</h5> 
                    <h4 className="project__text">Grossesse</h4>
                    <a href="#"className="project__btn">Voir la Galerie</a> 
                 </div>
               </div>
           </div> 

            <div className="col__3">
               <div className="project__box pointer relative">
                   <div className="project__box__img pointer relative">
                     <div className="project__img__box">
                        <img src={Project3} alt="" className="project__img" />
                     </div>
                     <div className="mask__effect"></div>
                   </div>
                 <div className="project__meta absolute">
                    <h5 className="project__text">Charles Cantin Photographies</h5> 
                    <h4 className="project__text">Nouveau Né</h4>
                    <a href="#"className="project__btn">Voir la Galerie</a> 
                 </div>
               </div>
           </div> 

            <div className="col__3">
               <div className="project__box pointer relative">
                   <div className="project__box__img pointer relative">
                     <div className="project__img__box">
                        <img src={Project4} alt="" className="project__img" />
                     </div>
                     <div className="mask__effect"></div>
                   </div>
                 <div className="project__meta absolute">
                    <h5 className="project__text">Charles Cantin Photographies</h5> 
                    <h4 className="project__text">Famille</h4>
                    <a href="#"className="project__btn">Voir la Galerie</a> 
                 </div>
               </div>
           </div> 

            <div className="col__3">
               <div className="project__box pointer relative">
                   <div className="project__box__img pointer relative">
                     <div className="project__img__box">
                        <img src={Project5} alt="" className="project__img" />
                     </div>
                     <div className="mask__effect"></div>
                   </div>
                 <div className="project__meta absolute">
                    <h5 className="project__text">Charles Cantin Photographies</h5> 
                    <h4 className="project__text">Baptême</h4>
                    <a href="#"className="project__btn">Voir la Galerie</a> 
                 </div>
               </div>
           </div> 

            <div className="col__3">
               <div className="project__box pointer relative">
                   <div className="project__box__img pointer relative">
                     <div className="project__img__box">
                        <img src={Project6} alt="" className="project__img" />
                     </div>
                     <div className="mask__effect"></div>
                   </div>
                 <div className="project__meta absolute">
                    <h5 className="project__text">Charles Cantin Photographies</h5> 
                    <h4 className="project__text">Couples</h4>
                    <a href="#"className="project__btn">Voir la Galerie</a> 
                 </div>
               </div>
           </div> 
           <div className="view__more__btn d__flex align__items__center justify__content__center pxy__30">
           <a href="#"><button className="btn__contact pointer btn">Contacter</button></a>
          </div>
        </div>
      </div>    
    </div>
    )
}

export default Galerie;
