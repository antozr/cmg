"use client";

import React, { useEffect, useState } from "react";
import "./style.scss";
import ButtonPage from "../ButtonPage";

const BoxInfoChat = ({ urlImg1, ageChat, allDataChat, bgColor, txtBtn }) => {
  const [ageC, setAgeC] = useState(0);
  let date = new Date().getUTCFullYear();
  console.log(date);

  return (
    <>
      <div className={bgColor === true ? "sect__boxChat sect__boxChat--fonce": "sect__boxChat"}>
        <div className="boxChat__colG">
          <img
            src={urlImg1}
            alt="Voici une photo d'un british shorthair de la chatterie du monde de gioia."
            className="boxChat__img"
          />
        </div>

        <div className="boxChat__colD">
          <h3 className="boxChat__title">{allDataChat.name}<br/><span className="boxChat__subTitle">{allDataChat.subName}</span></h3>
          <ul className="boxChat__list">
          <li className="baxChat__el"><i>Chatterie</i> : {allDataChat.subName}</li>
            <li className="baxChat__el"><i>Sexe</i> : {allDataChat.sexe}</li>
            <li className="baxChat__el"><i>Âge</i> : {date - ageChat} ans</li>
            <li className="baxChat__el">
              <i>Date de naissance </i> : {allDataChat.DateB}
            </li>
            <li className="baxChat__el"><i>Pays</i> : {allDataChat.land}</li>
           
            <li className="baxChat__el"><i>Couleur</i> : {allDataChat.couleur}</li>
            
            <li className="baxChat__el"><i>Portée(s)</i> : {allDataChat.portee}</li>
          </ul>
          <div className="boxChat__boxBtn">
            <ButtonPage nameBtn={"Pédigré"} linkBtn={"#"} />
            <ButtonPage
              nameBtn={txtBtn}
              linkBtn={
                "mailto:arnouldfelicie5@hotmail.com?subject:Demande-de-saillie"
              }
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default BoxInfoChat;
