import React from 'react'
import ButtonPage from '../ButtonPage'

const FirstSection = ({firstTxt, nameTitle, linkBtn, nameBtn, urlImg}) => {
  return (
    <>
    <section className="sect__first">
        <div className="sect__colGauche">
            <div className="colGauche__boxTitre">
                <h1 className="sect__title">
                    Le monde fe gioia {nameTitle}
                </h1>
            </div>

            <p className="sect__txt">
                {firstTxt}
            </p>
            <ButtonPage linkBtn={linkBtn} nameBtn={nameBtn} />
        </div>

        <div className="sect__colDroite"><img src={urlImg} alt="Présentation de chats de la chatteries." className="sect__img" /></div>
    </section>
    
    </>
  )
}

export default FirstSection