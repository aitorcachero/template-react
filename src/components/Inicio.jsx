import ContactList from './ContactList';
import styles from './Inicio.module.css';
import React, { useState } from 'react';

function Inicio() {
  const [showInicio, setShowInicio] = useState(true);

  const valorInput = () => {
    const valor = document.querySelector('input').value;
    return valor;
  };

  const toggleComponents = () => {
    console.log;
    setShowInicio(false);
  };

  return (
    <>
      {showInicio ? (
        <div>
          <h1>Cuantas personas quieres renderizar?</h1>
          <input className={styles.input} type="text" />
          <button className={styles.btn} onClick={toggleComponents}>
            Renderizar
          </button>
        </div>
      ) : (
        <div>
          <ContactList numbers={valorInput()} />
        </div>
      )}
    </>
  );
}

export default Inicio;

// const toggleComponents = (e) => {
//   const valor = document.querySelector('input').value;
//   console.log(valor);
//   setShowInicio(false);
// };
