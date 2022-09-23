import "./style.css";
import { useState } from "react";

function FormPage({ setListTransactions }) {
  const [inputDescricao, setinputDescricao] = useState("");
  const [inputNumber, setUnputNumber] = useState("");
  const [selectOption, setselectOption] = useState("entrada");

  function inserir(event) {
    event.preventDefault();

    const arrayNovo = {
      id: Math.random().toString(36).substr(2, 9),
      descricao: inputDescricao,
      valor: inputNumber,
      tipo: selectOption,
    };

    setListTransactions((alem) => [arrayNovo, ...alem]);

    setinputDescricao("");
    setUnputNumber("");
  }

  return (
    <form className="form" onSubmit={inserir}>
      <section className="form__Descricao">
        <h6>Descrição</h6>
        <input
          type="text"
          placeholder="Digite aqui sua descrição"
          value={inputDescricao}
          required
          onChange={(event) => setinputDescricao(event.target.value)}
        />
        <span>Ex: Compra de roupas</span>
      </section>
      <section className="form__informacao">
        <div className="valor">
          <h6>Valor</h6>
          <input
            type="number"
            placeholder="R$ 1.00"
            value={inputNumber}
            required
            onChange={(event) => setUnputNumber(event.target.value)}
          />
        </div>
        <div className="tipoValor">
          <h6>Tipo de valor</h6>
          <select onChange={(event) => setselectOption(event.target.value)}>
            <option value="entrada">Entrada</option>
            <option value="despesa">Despesa</option>
          </select>
        </div>
      </section>
      <button className="form__btn">Inserir valor</button>
    </form>
  );
}

export default FormPage;
