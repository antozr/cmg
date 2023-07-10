import ButtonPage from "./components/ButtonPage";
import FirstSection from "./components/FirstSection";
import InterSection from "./components/InterSection";


export default function Home() {

  let allTitle = [
    <>Une envie de boules de poils</>
  ]
  let allTxt = [
    <>Nous sommes un élevages familliale, où nos chats, des <b>British Shorthair</b>, vivents en notre compagnies. </>,

]
  return (
    <>
      <div className="home">
        <FirstSection firstTxt={allTxt[0]} nameTitle={"Chatterie"} nameBtn={"Voir les chats"} linkBtn={'/noschats'} urlImg={'https://images.unsplash.com/photo-1495360010541-f48722b34f7d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=736&q=80'} />
        <InterSection titleInter={allTitle[0]} nameBtn={" Voir les chattons"} linkBtn={'/noschattons'} />
      </div>
    </>
  )
}
