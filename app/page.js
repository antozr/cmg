import SectionTexteSecondaire from "./components/ContenuBox2";
import ContenutBox1 from "./components/ContenutBox1";
import FirstSection from "./components/FirstSection";
import InterSection from "./components/InterSection";

export default function Home() {
  let allTitle = [<>Une envie de boules de poils</>
,<>Qui sommes nous ? </>,
<>Une envie d en savoir plus </>,
<>Nos chats</>,
<></>];
  let allTxt = [
    <>
      Nous sommes un élevage familial, où nos chats, <b>des British Shorthair</b>, vivants en notre compagnie. {" "}
    </>,
    <>
Nous sommes une chatterie familiale où les chats vivent avec nous, ils font partie à part entière de notre famille. Dès lors ils sont en contact avec des enfants, des chiens et habitué au bruit de la vie quotidienne. Avec nos chattons, nous les habituons dès le plus jeune âge à vivre avec nous, pour qu’il s’habitue au mieux chez vous.    </>,
    <><b>
    Reconnu par la région Wallonne avec notre numéro <span style={{color:"#727986" }}>d’agrément HK20504073</span>, on se situe dans la région de Charleroi dans&nbsp;le&nbsp;Hainaut. 
    </b> </>,
    <>Ce sont des british shorthair & longhair, que nous avons depuis leurs plus jeunes âges. Ils évoluent dans un environnement familial, vivant entouré d’une famille, d’enfants mais aussi de chien. Ils reçoivent l’amour et l’affection qu’ils ont besoin tout en vivant leur vie en harmonie avec tout le monde.</>,
    <><b>Nous avons un mâle et une femelle, de couleur différente, mais au caractère complémentaire. Ils sont proches de nous. Mais avec chacun leurs petits caractères qui les rend uniques et à qui on donne tous notre amour.<br/><i> Vous souhaitez en savoir plus sur eux ? </i>
    </b></>,
    <></>
  ];
  return (
    <>
      <div className="home">
        <FirstSection
          firstTxt={allTxt[0]}
          nameTitle={"Chatterie"}
          nameBtn={"Voir les chats"}
          linkBtn={"/noschats"}
          urlImg={
            "http://antoni-dumont.be/projets/cmg/chats/head-3.jpg"
          }
        />

       
        <ContenutBox1 title={allTitle[1]} txt1={allTxt[1]} txt2={allTxt[2]} urlImg={"http://antoni-dumont.be/projets/cmg/chats/home-perso-1.jpg"} />
        <InterSection
          titleInter={allTitle[0]}
          nameBtn={" Voir les chattons "}
          linkBtn={"/noschattons"}
          size1={true}
        />
        <SectionTexteSecondaire 
        urlImg={"http://antoni-dumont.be/projets/cmg/chats/british-img-1.jpg"}
        title={allTitle[3]}
        txt1={allTxt[3]}
        txt2={allTxt[4]}  />
        <InterSection
          titleInter={allTitle[2]}
          nameBtn={" Par email "}
          linkBtn={"mailto:arnouldfelicie5@hotmail.com"}
          size1={true}
          nameBtn2={"Facebook"}
          linkBtn2={"#"}
          size2={true}
          secondBtn={true}
        />
      </div>
    </>
  );
}
