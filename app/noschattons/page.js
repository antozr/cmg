import React from "react";
import FirstSection from "../components/FirstSection";
import ContenutBox1 from "../components/ContenutBox1";
import InterSection from "../components/InterSection";
import BoxInfoChat from "../components/BoxInfoChat";
import dataChat from "../assets/data/chat.json";

const chattons = () => {
  return (
    <>
      <FirstSection
        firstTxt={
          <>
           C’est avec plaisir que nous vous présenterons nos petits chattons, pour vous partager leurs petites bouilles . Ainsi que vous amenez à faire connaissance avec eux.
          </>
        }
        nameTitle={<>Les&nbsp;chattons </>}
        urlImg={
          "http://antoni-dumont.be/projets/cmg/chats/chatton-2.jpg"
        }
        nameBtn={"Voir nos chattons"}
        linkBtn={"#nosChattons"}
      />

      <ContenutBox1
        title={"L'arrivee des chattons"}
        txt1={
          <>
            C’est avec plaisir que nous vous informerons de nos futures portées. Pour l’instant aucun bébé n’est prévue.  
          </>
        }
        txt2={
          <>
             Si vous souhaitez en savoir plus rendez-vous sur&nbsp;
            <a
              href="mailto:arnouldfelicie5@hotmail.com"
              className="contenut__link"
            >
              notre page Facebook 
            </a>{" "}
            pour plus d’information rapide.
          </>
        }
        urlImg={
          "http://antoni-dumont.be/projets/cmg/chats/bebe-1.jpg"
        }
      />

      <InterSection
        titleInter={"Me tenir informer des portees"}
        nameBtn={"Facebook"}
        linkBtn={"#"}
        secondBtn={true}
        nameBtn2={"E-mail"}
        linkBtn2={"mailto:arnouldfelicie5@hotmail.com"}
        size1={true}
        size2={true}
      />


{/* <BoxInfoChat
        urlImg1={
          "https://images.unsplash.com/photo-1574144611937-0df059b5ef3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60"
        }
        allDataChat={dataChat[0]}
        ageChat={2023}
        txtBtn={'Le réserver'}
      /> */}
      
    </>
  );
};

export default chattons;
