import React from 'react';
import {useHistory} from 'react-router-dom'

export const About: React.FC = () => {

  const history = useHistory();

  return(
    <>
      <h1 className="about__title">Страница информации</h1>
      <p className="about__description">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
        Ab libero ipsam cupiditate pariatur incidunt assumenda id possimus, sint quo illum!
      </p>
      <button className="about__button" onClick={() => history.push('/')} >Вернуться к списку</button>
    </>
  )

}