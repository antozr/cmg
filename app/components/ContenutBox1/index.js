import React from "react";

import "./style.scss";

const ContenutBox1 = ({title, txt1, txt2, urlImg}) => {
  return (
    <>
      <section className="sect__contenut1">
        <div className="contenut__colG">
          <img
            src={urlImg}
            alt="Un chats, de la race british. "
            className="contenut__img"
          />
        </div>

        <div className="contenut__colD">
          <h2 className="sect__title contenut--2 sect__title--ecartG">{title}</h2>
          <div className="contenut__boxTxt">
            <p className="sect__txt">
              {txt1}
            </p>
            <p className="sect__txt sect__txt--boldIta">
            {txt2}
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContenutBox1;
