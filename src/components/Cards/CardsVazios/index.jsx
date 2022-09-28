import "./style.css";

import img from "../../Assets/img/NoCard.png";

function CardsVazios() {
  return (
    <section className="cardsVazios">
      <section className="cardsVazios__left">
        <h6>Resumo financeiro</h6>
        <div>
          <button type="button">Todos</button>
          <button type="button">Entradas</button>
          <button type="button">Despesas</button>
        </div>
      </section>

      <section className="cardsVazios__right">
        <h6>Você ainda não possui nenhum lançamento</h6>
        <img src={img} alt="" />
        <img src={img} alt="" />
        <img src={img} alt="" />
      </section>
    </section>
  );
}

export default CardsVazios;
