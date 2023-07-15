import React from 'react'
import FirstSection from '../components/FirstSection'

const chattons = () => {
  return (
    <>
      <FirstSection
      firstTxt={<>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio fugiat ipsa dolore eos, voluptatum veritatis illo deleniti repellat ab soluta rerum molestias, distinctio magnam? Voluptas sapiente commodi nemo.  </>}
      nameTitle={<>Les&nbsp;chattons </>}
      urlImg={'https://images.unsplash.com/photo-1566847438217-76e82d383f84?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEwfHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60'}
      nameBtn={'Voir nos chattons'}
      linkBtn={'#nosChattons'}
      />
    
    </>
  )
}

export default chattons