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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio fugiat
            ipsa dolore eos, voluptatum veritatis illo deleniti repellat ab
            soluta rerum molestias, distinctio magnam? Voluptas sapiente commodi
            nemo.{" "}
          </>
        }
        nameTitle={<>Les&nbsp;chattons </>}
        urlImg={
          "https://images.unsplash.com/photo-1566847438217-76e82d383f84?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEwfHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60"
        }
        nameBtn={"Voir nos chattons"}
        linkBtn={"#nosChattons"}
      />

      <ContenutBox1
        title={"L'arrivee des chattons"}
        txt1={
          <>
            {" "}
            C’est avec grande joie que des petits chattons British Shorthair,
            qui seront bientôt disponible mi-décembre pour venir dans vôtre
            famille. Alors envie de voir leur petite bouille ? Et si tu allais
            découvrir leur nom et voir leur première photo ? Tu pourras
            découvrir tout de leur parents et avoir toute les informations pour
            une futur adoption ( si tu as un coup de coeur ) .{" "}
          </>
        }
        txt2={
          <>
            {" "}
            Les futurs parent sont <b>Soda</b> & <b>Osiris</b>, deux chats
            british de couleur bleu & crème. La portée est attendue pour le
            ../../.... Pour toutes informations suplémentaires,{" "}
            <a
              href="mailto:arnouldfelicie5@hotmail.com"
              className="contenut__link"
            >
              vous pouvez nous contactez par e-mails.
            </a>{" "}
          </>
        }
        urlImg={
          "https://images.unsplash.com/photo-1547565560-7d3313e7fff1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80"
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

      <BoxInfoChat
        urlImg1={
          "https://images.unsplash.com/photo-1574144611937-0df059b5ef3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60"
        }
        allDataChat={dataChat[0]}
        ageChat={2023}
      />
      <BoxInfoChat
        urlImg1={
          "https://images.unsplash.com/photo-1574144611937-0df059b5ef3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60"
        }
        allDataChat={dataChat[0]}
        ageChat={2023}
      />
      <BoxInfoChat
        urlImg1={
          "https://images.unsplash.com/photo-1574144611937-0df059b5ef3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60"
        }
        allDataChat={dataChat[0]}
        ageChat={2023}
      />
      <BoxInfoChat
        urlImg1={
          "https://images.unsplash.com/photo-1574144611937-0df059b5ef3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60"
        }
        allDataChat={dataChat[0]}
        ageChat={2023}
      />
    </>
  );
};

export default chattons;
