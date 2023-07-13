import React from "react";
import FirstSection from "../components/FirstSection";

const contact = () => {
  return (
    <>
      <FirstSection
        nameTitle={"Contacts"}
        nameBtn={"E-mail"}
        linkBtn={"mailto:arnouldfelicie5@hotmail.com"}
        secondBtn={true}
        nameBtn2={"Facebook"}
        linkBtn2={"#"}
        firstTxt={
          <>
            Nous sommes une chatterie située dans la région de Charleroi, dans
            la province du Hainaut en Belgique. <br />
            Vous pouvez nous contactez par e-mail ou sur facebook.
          </>
        }
        urlImg={"https://images.unsplash.com/photo-1633837434287-447e2581616f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"}
      />
    </>
  );
};

export default contact;
