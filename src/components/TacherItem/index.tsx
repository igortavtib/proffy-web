import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css'

function TeacherItem() {
  return(
    <article className="teacher-item">
      <header>
        <img 
          src="https://scontent.fbfh10-1.fna.fbcdn.net/v/t1.0-9/p960x960/38817142_10156590829939304_2189405788689137664_o.jpg?_nc_cat=1&_nc_sid=85a577&_nc_ohc=TjQmLU8lEGgAX8a2MsI&_nc_ht=scontent.fbfh10-1.fna&_nc_tp=6&oh=ba38906731a5deacfa015a6d7f6b08f2&oe=5F4EAE92"
          alt="Drake"
          />
        <div>
          <strong>Drake</strong>
          <span>Física</span>
        </div>
      </header>

      <p>
        Amante das altas técnologias físicas
        <br></br>
        Desde pequeno apaixonado por fórmulas físicas de alta complexidade. Amo ensinar física aos outros e aprender novas fórmulas. Com certeza serei um excelente professor.
      </p>

      <footer>
        <p>
          Preço/hora
          <strong>R$ 90,00</strong>
        </p>
        <button type="button">
          <img src={whatsappIcon} alt="Whatsapp"/>
          Entrar em contato
        </button>
      </footer>
    </article>
  );
}

export default TeacherItem;
