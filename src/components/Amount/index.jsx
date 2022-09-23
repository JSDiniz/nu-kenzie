import "./style.css";

function Amount({ listTransactions }) {
  const valorTotal = listTransactions.reduce((acc, valorAtual) => {
    if (valorAtual.tipo === "entrada") {
      return parseFloat(valorAtual.valor) + acc;
    } else {
      return acc - parseFloat(valorAtual.valor);
    }
  }, 0);

  return (
    <section className="amount">
      <div className="amount__box">
        <h6>Valot Total:</h6>
        <span>R$ {valorTotal.toFixed(2)}</span>
      </div>
      <p className="amount__p">O valor se refere ao saldo</p>
    </section>
  );
}

export default Amount;
