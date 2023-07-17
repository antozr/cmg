"use client"

import Link from "next/link";
import React, { useState } from "react";
import "./Nav.scss";

const Navbar = () => {
  let allLinkArray = [
    {
      name: "Acceuils",
      link: "/",
      index: 0,
    },
    {
      name: "Nos chats",
      link: "/noschats",
      index: 1,
    },
    {
      name: "Nos chattons",
      link: "/noschattons",
      index: 2,
    },
    // {
    //   name: "En savoir +",
    //   link: "/ensavoirplus",
    //   index: 3,
    // },
    {
      name: "Contacts",
      link: "/contacts",
      index: 4,
    },
    {
      name: "Réglementation",
      link: "/reglementation",
      index: 5,
    },
  ];

  const [activeLink, setActiveLink] = useState(0);

  function changeActiveState(e) {
    let allLink = document.querySelectorAll(".nav__link");

    if (window.innerWidth < 600) {
      activeMenuMobile();
    }
    console.log();

    allLink.forEach((el) => {
      el.parentElement.classList.remove("nav__el--actif");
    });
    e.target.parentElement.classList.add("nav__el--actif");
  }

  function activeMenuMobile() {
    let navMobile = document.querySelector(".nav__list");

    if (navMobile.classList.contains("nav__list--open")) {
      navMobile.classList.add("nav__list--close");
      setTimeout(() => {
        navMobile.classList.remove("nav__list--open");
        navMobile.classList.remove("nav__list--close");
      }, 300);
    } else {
      navMobile.classList.add("nav__list--open");
    }
  }

  return (
    <>
      <header className="head">
        <div className="head__logo">
          <Link
            href="/"
            className="head__logoTxt"
            aria-label="Retour à la page d'acceuil"
          >
            {/* CMG */}
            <svg
              width="72"
              height="48"
              viewBox="0 0 72 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5.568 36V1.44H5.616L21.984 24.672L21.264 24.624L37.584 1.44H37.632V36H36.048V5.328L36.192 6.096L21.6 26.592H21.504L6.912 6.096L7.2 5.376V36H5.568Z"
                fill="black"
              />
              <path
                d="M11.48 33.974C11.672 34.106 11.96 34.268 12.344 34.46C12.716 34.652 13.166 34.82 13.694 34.964C14.21 35.096 14.786 35.156 15.422 35.144C16.442 35.132 17.36 34.952 18.176 34.604C18.992 34.244 19.682 33.764 20.246 33.164C20.81 32.552 21.248 31.856 21.56 31.076C21.86 30.284 22.01 29.444 22.01 28.556C22.01 27.56 21.854 26.648 21.542 25.82C21.23 24.992 20.786 24.278 20.21 23.678C19.634 23.066 18.95 22.592 18.158 22.256C17.366 21.92 16.502 21.752 15.566 21.752C14.738 21.752 14 21.866 13.352 22.094C12.692 22.31 12.14 22.556 11.696 22.832L12.524 24.794C12.86 24.566 13.28 24.338 13.784 24.11C14.288 23.882 14.858 23.768 15.494 23.768C16.07 23.768 16.622 23.888 17.15 24.128C17.678 24.356 18.14 24.686 18.536 25.118C18.932 25.538 19.25 26.03 19.49 26.594C19.718 27.158 19.832 27.77 19.832 28.43C19.832 29.114 19.73 29.744 19.526 30.32C19.31 30.896 19.01 31.394 18.626 31.814C18.23 32.222 17.762 32.546 17.222 32.786C16.67 33.014 16.052 33.128 15.368 33.128C14.696 33.128 14.108 33.026 13.604 32.822C13.088 32.606 12.674 32.366 12.362 32.102L11.48 33.974Z"
                fill="black"
              />
              <path
                d="M32.222 33.794C32.054 33.962 31.802 34.124 31.466 34.28C31.142 34.436 30.776 34.58 30.368 34.712C29.96 34.844 29.54 34.946 29.108 35.018C28.676 35.102 28.268 35.144 27.884 35.144C26.828 35.144 25.874 34.982 25.022 34.658C24.182 34.334 23.462 33.89 22.862 33.326C22.262 32.75 21.8 32.072 21.476 31.292C21.152 30.512 20.99 29.666 20.99 28.754C20.99 27.614 21.17 26.612 21.53 25.748C21.89 24.872 22.382 24.14 23.006 23.552C23.63 22.952 24.344 22.502 25.148 22.202C25.964 21.902 26.822 21.752 27.722 21.752C28.514 21.752 29.246 21.842 29.918 22.022C30.602 22.202 31.184 22.43 31.664 22.706L30.98 24.65C30.752 24.518 30.458 24.392 30.098 24.272C29.738 24.14 29.372 24.038 29 23.966C28.628 23.894 28.292 23.858 27.992 23.858C27.236 23.858 26.558 23.966 25.958 24.182C25.37 24.386 24.866 24.692 24.446 25.1C24.026 25.508 23.702 26.006 23.474 26.594C23.258 27.17 23.15 27.83 23.15 28.574C23.15 29.246 23.264 29.858 23.492 30.41C23.732 30.962 24.062 31.436 24.482 31.832C24.902 32.228 25.406 32.534 25.994 32.75C26.582 32.954 27.23 33.056 27.938 33.056C28.346 33.056 28.742 33.02 29.126 32.948C29.51 32.876 29.84 32.762 30.116 32.606V30.428H27.65V28.412H32.222V33.794Z"
                fill="black"
              />
            </svg>
          </Link>
          <p className="head__logoTxt">CMG</p>
        </div>
        <nav className="head__nav">
          <button className="nav__btn" onClick={() => activeMenuMobile()}>
            <span className="nav__btnBat"></span>
            <span className="nav__btnBat"></span>
            <span className="nav__btnBat"></span>
          </button>
          <ul className="nav__list">
            {allLinkArray.map((el, key) => (
              <li className="nav__el">
                <Link
                  key={key}
                  href={el.link}
                  className={
                    activeLink === 0 ? "nav__link nav__link--el" : "nav__link"
                  }
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
