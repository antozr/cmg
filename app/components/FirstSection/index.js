import React from "react";
import ButtonPage from "../ButtonPage";
import "./FirstSection.scss";

const FirstSection = ({ firstTxt, nameTitle, linkBtn, nameBtn, urlImg ,linkBtn2, nameBtn2, secondBtn}) => {
  return (
    <>
      <section className="sect__first">
        <div className="sect__colGauche">
          <div className="colGauche__boxTitre">
            <h1 className="sect__title">
              {nameTitle} <span className="colGauche__titleEl">Monde</span>
              <span className="colGauche__titleEl">Gioia</span>
            </h1>
            <span className="sect__title colGauche__smallEl">
              du <br /><br />
              de
            </span>
          </div>

          <div className="colGauche__boxContent">
            <p className="sect__txt">{firstTxt}</p>
            <ButtonPage linkBtn={linkBtn} nameBtn={nameBtn} />
            {secondBtn === true ? <ButtonPage linkBtn={linkBtn2} nameBtn={nameBtn2} />:""}
          </div>
        </div>

        <div className="sect__colDroite">
          <img
            src={urlImg}
            alt="Présentation de chats de la chatteries."
            className="sect__img"
          />
        </div>
      </section>
    </>
  );
};

export default FirstSection;
