"use client";

import Link from "next/link";
import React, { useState } from "react";
import './Nav.scss';

const Navbar = () => {
  let allLinkArray = [
    {
      name: "Acceuil",
      link: "/",
      index:0
    },
    {
      name: "Nos chats",
      link: "/noschats",
      index:1
    },
    {
      name: "Nos chattons",
      link: "/noschattons",
      index:2
    },
    {
      name: "En savoir +",
      link: "/ensavoirplus",
      index:3
    },
    {
      name: "Contacts",
      link: "/contacts",
      index:4
    },
    {
      name: "Réglementation",
      link: "/reglementation",
      index:5
    },
  ];

  const [activeLink, setActiveLink] = useState(0);


  function changeActiveState(e){

    let allLink = document.querySelectorAll('.nav__link');
    
    if(window.innerWidth < 600){
      activeMenuMobile()
    }
    console.log();

    allLink.forEach((el)=>{
      el.classList.remove('nav__link--actif')
    })
    e.target.parentElement.classList.add('nav__link--actif')
  }


  function activeMenuMobile(){
    let navMobile = document.querySelector('.nav__list');

    if (navMobile.classList.contains('nav__list--open')){
      navMobile.classList.add('nav__list--close')
      setTimeout(()=>{
        navMobile.classList.remove('nav__list--open')
        navMobile.classList.remove('nav__list--close')
      },300)
    }else{
      navMobile.classList.add('nav__list--open')
    }
  }



  return (
    <>
      <header className="head">
        <div className="head__logo">
          <Link href='/' className="head__logoTxt" aria-label="Retour à la page d'acceuil">
            CMG
          </Link>
          {/* <p className="head__logoTxt">CMG</p> */}
        </div>
        <nav className="head__nav">
          <button className="nav__btn" onClick={()=> activeMenuMobile()}>
            <span className="nav__btnBat"></span><span className="nav__btnBat"></span><span className="nav__btnBat"></span>
          </button>
          <ul className="nav__list">
            
            {allLinkArray.map((el) => (
              <li className="nav__el">
                <Link
                key={el.index}
                  href={el.link}
                  className={activeLink === 0 ? "nav__link nav__link--el" : "nav__link"}
                  aria-label="Je suis un lien vers la page."
                  replace={true}
                  onClick={changeActiveState}
                >
                  {el.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
