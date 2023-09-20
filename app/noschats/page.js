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
        urlImg={'https://images.unsplash.com/photo-1571988840298-3b5301d5109b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80'}
      />

      <ContenutBox1
        title={<>Les British </>}
        txt1={<><i>"Le british shorthair est une race de chat originaire de Grande-Bretagne. Ce chat de taille moyenne à grande est caractérisé par ses formes arrondies et ses grands yeux." </i></>}
        txt2={<>Nous avons 2 chats, dont un mâle et une femelle, qui vivent dans notre chatterie & famille. C’est avec eux que nous réalisons des portées pour avoir des petits chattons qui font le bonheur de tous. Nous leur apportons les soins et l’amour qu’ils ont besoin ainsi que toutes l’affection dont ils ont besoin et bien plus encore. </>}
        urlImg={'https://images.unsplash.com/photo-1561948955-570b270e7c36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=601&q=80'}
      />
<div id="leschats"></div>
      <BoxInfoChat allDataChat={dataChat[0]} ageChat={2021} txtBtn={'Demande de saillie'} urlImg1={'https://images.unsplash.com/photo-1533738363-b7f9aef128ce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDR8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60'} />
      <BoxInfoChat allDataChat={dataChat[1]} bgColor={true} txtBtn={'Demande de saillie'}  ageChat={2019} urlImg1={'https://images.unsplash.com/photo-1533738363-b7f9aef128ce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDR8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60'} />
    </>
  )
}

export default NosChats