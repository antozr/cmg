import Link from "next/link";
import React from "react";
import './Foot.scss';
const Foot = () => {

    let dateYear = new Date().getFullYear();
  return (
    <>
      <footer className="foot">
        <div className="foot__top">
            <div className="foot__logoBox">
                <Link href={'/'}  className="foot__logo" aria-label="Redirection vers la page d'acceuil.">
                    CMG
                </Link>
            </div>
            <div className="foot__linkBox">
                <h2 className="foot__title">
                    La chatterie Du Monde De Gioia
                </h2>
                <ul className="foot__list">
                    <li className="foot__el">
                        <p className="foot__txt">
                            Agrément : <b>HK20504073</b>
                        </p>
                    </li>
                    <li className="foot__el">
                        <p className="foot__txt">
                            Région Hainaut ( Belgique )
                        </p>
                    </li>
                </ul>
            </div>
            <div className="foot__linkBox">
                <h2 className="foot__title">
                    La chatterie Du Monde De Gioia
                </h2>
                <ul className="foot__list">
                    <li className="foot__el">
                        <Link href={'/noschats'} className="foot__link" aria-label="Redirection vers la page des chats">
                            Les chats
                        </Link>
                    </li>
                    <li className="foot__el">
                        <Link href={'/noschattons'} className="foot__link" aria-label="Redirection vers la page des chattons">
                            Les chattons
                        </Link>
                    </li>
                    <li className="foot__el">
                        <Link href={'/reglementation'} className="foot__link" aria-label="Redirection vers la page des chats">
                            La réglementations 
                        </Link>
                    </li>
                </ul>
            </div>
        </div>

<div className="foot__bot">
    <p className="foot__txt foot__txt--center">
    la chatterie du monde de Gioia ® {dateYear}
    </p>
</div>
      </footer>
    </>
  );
};

export default Foot;
