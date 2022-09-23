import "./style.css";
import FormPage from "../Form";
import Amount from "../Amount";
import Cards from "../Cards";

function HomePage({ setlogin, listTransactions, setListTransactions }) {
  const cards = listTransactions.length;

  return (
    <div className="box">
      <header>
        <section className="box__header ">
          <h1>
            <span>Nu</span> kenzie
          </h1>
          <button type="button" onClick={() => setlogin(true)}>
            Inicio
          </button>
        </section>
      </header>
      <main className="box__main">
        <section className="box__main__form">
          <FormPage setListTransactions={setListTransactions} />

          {cards !== 0 && <Amount listTransactions={listTransactions} />}
        </section>
        <section className="box__main__cards">
          <Cards
            cards={cards}
            listTransactions={listTransactions}
            setListTransactions={setListTransactions}
          />
        </section>
      </main>
    </div>
  );
}

export default HomePage;
