import React,{useState} from 'react';
import './Home.css';
import logo from './image/logo.png';

function Home() {
  // fixed Header
  window.addEventListener("scroll", function () {
    const header = document.querySelector(".header");
    header.classList.toggle("active", window.scrollY > 0);
  });
  // Toogle Menu
    const [show, setShow] = useState(true);
    return (
        <div className="home" id="Home">
          <div className="home__bg">
            <div className="header d__flex align__items__center pxy__30" >
                <div className="navigation pxy__30">
                    <ul className="navbar d__flex">
                    <a href="#Home">
                        <li className="nav__items mx__15">Home</li>
                    </a>
                    <a href="#About">
                        <li className="nav__items mx__15">Infos</li>
                    </a>
                    <a href="#Services">
                       <li className="nav__items mx__15">Tarifs</li>
                    </a>
                    <a href="#Portfolio">
                        <li className="nav__items mx__15">Galerie</li>
                    </a>
                    <a href="#Contact">
                        <li className="nav__items mx__15">Contact</li>
                    </a>
                    </ul>
                </div>
                {/*menu toggle*/}
                <div className="toggle__menu">
                  <svg onClick={() => setShow(!show)}
                  xmlns="http://www.w3.org/2000/svg" 
                  width="16" 
                  height="16" 
                  fill="currentColor" 
                  class="bi bi-justify white pointer" 
                  viewBox="0 0 16 16 ">
                  <path fill-rule="evenodd" d="M2 12.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z"/>
                  </svg>   
                </div>
                {show ?(
                <div className="sideNavbar">
                  <ul className="sidebar d__flex">
                    <li className="sideNavbar">
                       <a href="#Home">Home</a>
                    </li>
                   <li className="sideNavbar">
                      <a href="#About">About</a>
                   </li>
                   <li className="sideNavbar">
                      <a href="#Services">Services</a>
                   </li>
                   <li className="sideNavbar">
                      <a href="#Portfolio">Portfolio</a>
                   </li>
                   <li className="sideNavbar">
                      <a href="#Contact">Contact</a>
                   </li>
                  </ul>
                </div>
                ) : null}
            </div>
             {/*home container*/}
            <div className="container">
                <div className="home__content">
                    <div className="home__meta">
                        <img src={logo} alt="logo du photographes charles cantin" className="home__img" />
                    </div>
                </div>
            </div>
          </div>
        </div>
    );
}

export default Home;



   
