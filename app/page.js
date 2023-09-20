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
      Nous sommes un élevages familliale, où nos chats, des{" "}
      <b>British Shorthair</b>, vivents en notre compagnies.{" "}
    </>,
    <>
    Nous sommes une chatterie familiale où les chats vivent avec nous, ils font partie à part entière de notre famille. Dés lors ils sont en contactes avec des enfants, des chiens et habitué au bruit de la vie quotidienne. Avec nos chattons, nous les habituons dés le plus jeunes âges à vivre avec nous, pour qu’il s’habitue au mieux chez vous. 
    </>,
    <><b>
    Reconnu par la région Wallonne avec notre numéro <span style={{color:"#727986" }}>d’agrément HK20504073</span>, on se situe dans la région de Charleroi dans&nbsp;le&nbsp;Hainaut. 
    </b> </>,
    <>Ce sont des british shorthair & longhair, que nous avons depuis leurs plus jeunes âges. Ils évoluent dans un environnement familial, vivant entouré d’une famille, d’enfants mais aussi de chien. Ils reçoivent l’amour et l’affection qu’ils ont besoin tout en vivant leur vie en harmonie avec tout le monde.</>,
    <><b>Nous avons un mâle et une femelle, de couleur différente, mais au caractère complémentaire. Ils sont proches de nous. Mais avec chacun leurs petits caractères qui les rend uniques et à qui on donne tous notre amour. Vous souhaitez en savoir plus sur eux ? 
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
            "https://images.unsplash.com/photo-1495360010541-f48722b34f7d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=736&q=80"
          }
        />

       
        <ContenutBox1 title={allTitle[1]} txt1={allTxt[1]} txt2={allTxt[2]} urlImg={"https://images.unsplash.com/photo-1516139008210-96e45dccd83b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80"} />
        <InterSection
          titleInter={allTitle[0]}
          nameBtn={" Voir les chattons "}
          linkBtn={"/noschattons"}
          size1={true}
        />
        <SectionTexteSecondaire 
        urlImg={"https://images.unsplash.com/photo-1586289883499-f11d28aaf52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"}
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
