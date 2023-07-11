import React from "react";
import ButtonPage from "../ButtonPage";
import "./style.scss";

const InterSection = ({
  titleInter,
  nameBtn,
  linkBtn,
  nameBtn2,
  linkBtn2,
  secondBtn,
  size1,
  size2,
}) => {
  return (
    <>
      <div className="sect__inter">
        <h2 className="sect__title sect__title--big">{titleInter}</h2>
        <div className="sect__interBtn">
          <ButtonPage nameBtn={nameBtn} linkBtn={linkBtn} size={size1} />
          {secondBtn === true ? (
            <ButtonPage nameBtn={nameBtn2} linkBtn={linkBtn2} size={size2} />
          ) : (
            " "
          )}
        </div>
      </div>
    </>
  );
};

export default InterSection;
