import React from 'react'

import HeaderCSS from './Header.module.scss';

export default function Header() {
  return (
    <div className={HeaderCSS.header}>
      <h1>Lista rzeczy do zrobienia</h1>
    </div>
  )
}
