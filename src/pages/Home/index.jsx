import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";

function Home() {
  return (
    <div>
      <h1>Home</h1>
      <h2>Selecione uma opção para começar</h2>
      <ul>
        <li>
          <Link to="/questao01" className="link-item">Mudar tema</Link>
        </li>
        <li>
          <Link to="/questao02" className="link-item">Menssagem</Link>
        </li>
        <li>
          <Link to="/questao03" className="link-item">Listar Tarefas</Link>
        </li>
      </ul>
    </div>
  );
}
export default Home;
