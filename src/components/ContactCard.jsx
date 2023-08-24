// ContactCard.js

import style from './Card.module.css';

function ContactCard({ src, name, email, phone }) {
  return (
    <li className={style.card}>
      <img src={src} alt="" />
      <hr className={style.hr} />
      <h2>{name}</h2>
      <h4>{email}</h4>
      <p>{phone}</p>
    </li>
  );
}

export default ContactCard;
