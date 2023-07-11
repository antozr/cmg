import React from 'react'
import ButtonPage from '../ButtonPage'
import './style.scss';

const InterSection = ({titleInter, nameBtn, linkBtn}) => {
  return (
    <>
        <div className="sect__inter">
            <h2 className="sect__title sect__title--big">
                {titleInter}
            </h2>
            <ButtonPage nameBtn={nameBtn} linkBtn={linkBtn} size={true}/>
        </div>
    </>
  )
}

export default InterSection