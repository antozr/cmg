import ButtonPage from "./components/ButtonPage";
import FirstSection from "./components/FirstSection";


export default function Home() {
  return (
    <>
      <div className="home">
        <FirstSection firstTxt={'je suis home'} nameTitle={"Chatterie"} nameBtn={"Voir les chats"} linkBtn={'/noschats'} urlImg={'https://images.unsplash.com/photo-1495360010541-f48722b34f7d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=736&q=80'} />
        <ButtonPage nameBtn={"Voir les chats"} linkBtn={'/noschats'} />
      </div>
    </>
  )
}
