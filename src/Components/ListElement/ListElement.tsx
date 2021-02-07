import React from 'react';

import ListElementCSS from './ListElement.module.scss';

type CardProps = {
  title: string,
}

export default function ListElement ({title}: CardProps) {
  return (
    <li className={ListElementCSS.list_element}><p>{title}</p></li>
  )
}
