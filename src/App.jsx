import "./App.css";
import { useState } from "react";
import LoginPage from "./components/LoginPage";
import HomePage from "./components/HomePage";

function App() {
  const [login, setlogin] = useState(true);
  const [listTransactions, setListTransactions] = useState([]);

  return (
    <div className="App">
      {login ? (
        <LoginPage setlogin={setlogin} />
      ) : (
        <HomePage
          setlogin={setlogin}
          listTransactions={listTransactions}
          setListTransactions={setListTransactions}
        />
      )}
    </div>
  );
}

export default App;
