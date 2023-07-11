import Link from 'next/link'
import React from 'react'
import './BtnPage.scss';

const ButtonPage = ({nameBtn, linkBtn, size}) => {
  return (
    <>
        <div className={ size === true ? "sect__btnBox sect__btnBox--big" : "sect__btnBox"}>
            <Link href={linkBtn} className={ size === true ? "sect__btn sect__btn--big" : "sect__btn"} aria-label='Redirection vers une autre partie du site.'>
                {nameBtn}
            </Link>
            <div className={ size === true ? "sect__btnBottomBox sect__btn sect__btn--big" : "sect__btnBottomBox sect__btn"}></div>
            </div>    
    </>
  )
}

export default ButtonPage