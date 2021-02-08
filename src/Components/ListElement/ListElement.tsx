import React, { useState } from 'react';

import ListElementCSS from './ListElement.module.scss';

type CardProps = {
  title: string,
}

export default function ListElement ({title}: CardProps) {

  const [isActive, setIsActive] = useState(false);

  const handleItemChange = (e: { preventDefault: () => void; }) => {
    setIsActive(!isActive);
  }

  const doneItem = ListElementCSS.p_off;

  return (
    <li className={ListElementCSS.list_element}>
      <p className={isActive ? doneItem : ''}>{title}</p>
      <button onClick={handleItemChange}>{ isActive ? 'Cofnij' : 'Zrobione!' }</button>
    </li>
  )
}
