"use client";

import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <>
        <header className="head">
                <div className="head__logo">
                    <p className="head__logoTxt">
                        CMG
                    </p>
                </div>
                <nav className="head__nav">
                    <ul className="nav__list">
                        <li className="nav__el">
                            <Link href="/" className='nav__link' aria-label='Je suis un lien vers la Home page'>
                                Acceuil
                            </Link>
                        </li>
                        <li className="nav__el">
                            <Link href="/noschats" className='nav__link' aria-label='Je suis un lien vers la Home page'>
                                Nos chats 
                            </Link>
                        </li>
                        <li className="nav__el">
                            <Link href="#" className='nav__link' aria-label='Je suis un lien vers la Home page'>
                                Nos chattons 
                            </Link>
                        </li>
                    </ul>
                </nav>            </header>    
    </>
  )
}

export default Navbar