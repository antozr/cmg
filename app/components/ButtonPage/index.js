import Link from 'next/link'
import React from 'react'
import './BtnPage.scss';

const ButtonPage = ({nameBtn, linkBtn}) => {
  return (
    <>
        <div className="sect__btnBox">
            <Link href={linkBtn} className='sect__btn' aria-label='Redirection vers une autre partie du site.'>
                {nameBtn}
            </Link>
            <div className="sect__btnBottomBox sect__btn"></div>
            </div>    
    </>
  )
}

export default ButtonPage