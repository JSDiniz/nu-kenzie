import "./style.css";

import { useState, useEffect } from "react";

function CardsIntems({ listTransactions, setListTransactions }) {
  const [filtList, setFiltList] = useState(listTransactions);

  useEffect(() => {
    setFiltList(listTransactions);
  }, [listTransactions]);

  function filt(event) {
    event.preventDefault();

    if (event.target.nodeName === "BUTTON") {
      if (event.target.innerText === "Entradas") {
        const filtrs = listTransactions.filter(
          (elem) => elem.tipo === "entrada"
        );

        setFiltList(filtrs);
      } else if (event.target.innerText === "Despesas") {
        const filtrs = listTransactions.filter(
          (elem) => elem.tipo === "despesa"
        );

        setFiltList(filtrs);
      } else {
        setFiltList(listTransactions);
      }
    }
  }

  function delet(event) {
    event.preventDefault();
    if (event.target.nodeName === "BUTTON" || event.target.nodeName === "IMG") {
      const filtrs = listTransactions.filter((elem) => {
        return elem.id !== event.target.id;
      });
      setListTransactions(filtrs);
    }
  }

  return (
    <section className="cardsIntems">
      <section onClick={filt} className="cardsIntems__top">
        <h6>Resumo financeiro</h6>
        <div>
          <button type="button">Todos</button>
          <button type="button">Entradas</button>
          <button type="button">Despesas</button>
        </div>
      </section>
      <ul className="cardsIntems__button">
        {filtList.map((elem, index) => (
          <li key={index} className={elem.tipo}>
            <section>
              <h6>{elem.descricao}</h6>
              <span>R$ {parseFloat(elem.valor).toFixed(2)}</span>
              <button id={elem.id} type="button" onClick={delet}></button>
            </section>
            <p>{elem.tipo}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default CardsIntems;
