import "./style.css";
import CardsVazios from "./CardsVazios";
import CardsIntems from "./CardsIntems";

function Cards({ cards, listTransactions, setListTransactions }) {
  return (
    <section className="cards">
      {cards === 0 ? (
        <CardsVazios />
      ) : (
        <CardsIntems
          listTransactions={listTransactions}
          setListTransactions={setListTransactions}
        />
      )}
    </section>
  );
}

export default Cards;
