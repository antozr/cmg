import React from 'react'
import FirstSection from '../components/FirstSection'
import ContenutBox1 from '../components/ContenutBox1'
import BoxInfoChat from '../components/BoxInfoChat'

import dataChat from '../assets/data/chat.json';


const NosChats = () => {
  return (
    <>
      <FirstSection  
        nameTitle={<>Nos&nbsp;chats</>}
        firstTxt={<>Nous sommes un élevage de <b>chats British Shorthair</b>, avec des couleurs différentes pour chaque. Mais qui donne un charme dans la maison quand tout le monde est ensemble.<br/> Car nos chats sont élevés et vivent avec nous, et avec d’autres animaux, pour qu’ils soient sociabilisés, aussi bien avec des enfants que des chiens. <i>Ce sont des amours de chats. </i> </>}
        nameBtn={'Voir les chats'}
        linkBtn={'#leschats'}
        urlImg={'http://antoni-dumont.be/projets/cmg/chats/head-2.jpg'}
      />

      <ContenutBox1
        title={<>Les British </>}
        txt1={<><i>"Le british shorthair est une race de chat originaire de Grande-Bretagne. Ce chat de taille moyenne à grande est caractérisé par ses formes arrondies et ses grands yeux." </i></>}
        txt2={<>Nous avons 2 chats, dont un mâle et une femelle, qui vivent dans notre chatterie & famille. C’est avec eux que nous réalisons des portées pour avoir des petits chattons qui font le bonheur de tous. Nous leur apportons les soins et l’amour qu’ils ont besoin ainsi que toutes l’affection dont ils ont besoin et bien plus encore. </>}
        urlImg={'http://antoni-dumont.be/projets/cmg/chats/british-img-1.jpg'}
      />
<div id="leschats"></div>
      <BoxInfoChat allDataChat={dataChat[0]} ageChat={2021} txtBtn={'Demande de saillie'} urlImg1={'http://antoni-dumont.be/projets/cmg/chats/SODA-1.jpg'} />
      <BoxInfoChat allDataChat={dataChat[1]} bgColor={true} txtBtn={'Demande de saillie'}  ageChat={2019} urlImg1={'http://antoni-dumont.be/projets/cmg/chats/osiris-1.jpg'} />
      <BoxInfoChat allDataChat={dataChat[2]} bgColor={false} txtBtn={'Suivre son évolution'}  ageChat={2023} urlImg1={'http://antoni-dumont.be/projets/cmg/chats/uliana-1.jpg'} />
    </>
  )
}

export default NosChats