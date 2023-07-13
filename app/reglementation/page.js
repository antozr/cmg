import React from 'react'
import FirstSection from '../components/FirstSection'

const reglementation = () => {
  return (
    <>
      <FirstSection
        nameTitle={<>Les&nbsp;regles</>}
        firstTxt={<> Pour vous informer des différentes démarches qui sont obligatoires pour obtenir un animal de compagnie, nous vous disposons différents liens vers des articles / documents, pour vous informer des démarches à faire de votre côté. Nous restons à votre disposition si vous avez des questions.   </>}
        nameBtn={'Contract type d\'achat'}
        linkBtn={'http://bienetreanimal.wallonie.be/files/documents/Animaux-Compagnie/certificat-garantie-annexeXI.pdf'}
        secondBtn={true}
        nameBtn2={'Permis de détentions'}
        linkBtn2={'https://www.wallonie.be/fr/actualites/bien-etre-animal-le-permis-de-detention-est-entre-en-vigueur'}
        urlImg={'https://images.unsplash.com/photo-1633837434287-447e2581616f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80'}
      />
    </>
  )
}

export default reglementation