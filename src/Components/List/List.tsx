import React, { useState } from 'react';
import ListElement from '../ListElement/ListElement';

import ListCss from './List.module.scss';

export default function List() {

  const iniTab = [
    {
      id:Math.random(),
      text:"Wyprowadzić psa",
    },
    {
      id:Math.random(),
      text:"Odśnieżyć podjazd i chodnik",
    },
    {
      id:Math.random(),
      text:"Zrobić zakupy na weekend",
    },
  ];

  const [elements, setElements] = useState(iniTab);

  const allElements = elements.map(element => <ListElement key={element.id} title={element.text}/>);

  return (
    <div className={ListCss.list}>
      <ul>{allElements}</ul>
    </div>
  )
}
