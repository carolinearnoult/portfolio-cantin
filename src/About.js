import React from 'react';
import './About.css';
import aboutImg from './image/portrait.jpg';

function About() {
    //up__to__top__btn
    window.addEventListener("scroll", function(){
      const upToTop = document.querySelector("a.bottom__to__top");
      upToTop.classList.toggle("active", window.scrollY > 0)
    });

    return (
        <div className="about component__space" id="About">
          <div className="container">
            <div className="row">
              <div className="col__2">
                  <img src={aboutImg} alt="" className="about__img" />
              </div>
              <div className="col__2">
                <h1 className="about__heading">
                    Mon Histoire
                </h1>
                <div className="about__meta">
                    <p className="about__text p__color">
                      Depuis mon enfance, j’aime regarder les albums photos de ma famille. Les photos sont pour moi des trésors, 
                      des témoins précieux des vies entrecroisées des membres d’une famille et des amitiés fortes. J’ai eu la chance de posséder 
                      tôt un appareil argentique et de faire mes premiers pas dans le numérique.Le sens de la famille, et le relationnel facile 
                      avec les enfants et leurs parents associés à l’intérêt pour la photographie ont fait de moi celle que je suis aujourd’hui.   
                    </p>
                </div>
                 <h1 className="about__heading">
                    Ma Mission
                </h1>
                <div className="about__meta">
                    <p className="about__text p__color">
                      Ma mission de photographe est avant tout une mission humaine. Si vous croisez ma route, attirés par le style et la qualité de
                       mes photos, ce n’est pas par hasard. Je veux vous offrir plus que de simples photos. Je veux vous offrir des souvenirs impérissables 
                       de votre vie, que vous pourrez transmettre avec bonheur à vos enfants et petits-enfants, pour que les souvenirs de votre vie et de votre
                        amour perdurent durant des générations.           
                    </p>
                    <div className="about__button d__flex align__items__center">
                        <a href="#Contact">
                          <button className="about btn pointer">Me Contacter</button>
                          </a>
                    </div>
                </div>
              </div>
            </div>
          </div>
          <div className="up__to__top__btn">
            <a href="#" className="bottom__to__top">
            <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="16" 
            height="16" 
            fill="currentColor" 
            class="bi bi-chevron-up white" 
            viewBox="0 0 16 16">
            <path 
            fill-rule="evenodd" 
            d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"/>
           </svg>
           </a>
          </div>
       </div>
    );
}

export default About;
