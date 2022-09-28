import "./style.css";
import img from "../Assets/img/Group 262.png";

function LoginPage({ setlogin }) {
  return (
    <main className="main">
      <section className="main__left">
        <h1>
          <span>Nu</span> Kenzie
        </h1>
        <p>Centralize o controle das suas finanças</p>
        <span>de forma rápida e segura</span>
        <button type="button" onClick={() => setlogin(false)}>
          Iniciar
        </button>
      </section>
      <figure className="main__right">
        <img src={img} alt="" />
      </figure>
    </main>
  );
}

export default LoginPage;
