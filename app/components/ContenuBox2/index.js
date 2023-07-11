import React from 'react'
import './style.scss';
import ButtonPage from '../ButtonPage';


const SectionTexteSecondaire = ({urlImg, title, txt1, txt2}) => {
  return (
    <>
    <section className="sect__contenut2">
        <div className="contenut2__colG">
          <img
            src={urlImg}
            alt="Un chats, de la race british. "
            className="contenut2__img"
          />
        </div>

        <div className="contenut2__colD">
          <h2 className="sect__title sect__title--2 ">{title}</h2>
          <div className="contenut2__boxTxt">
            <p className="sect__txt">
              {txt1}
            </p>
            <p className="sect__txt sect__txt--boldIta">
            {txt2}
            </p>
            <ButtonPage nameBtn={'Voir nos chats '} linkBtn={"/noschats"} />
          </div>
        </div>
      </section>
    </>
  )
}

export default SectionTexteSecondaire