import React from "react";
import { useState } from "react";
import "./styles.css";

function ListaDeTarefas() {
  const [tarefa, setTarefa] = useState("");
  const [lista, setLista] = useState([]);

  const adicionarTarefa = () => {
    if (tarefa.trim() !== "") {
      setLista([...lista, tarefa]);
      setTarefa("");
    }
  };

  return (
    <div className="lista-container">
      <h1 className="titulo">Minha Lista de Tarefas</h1>

      <div>
        <input
          type="text"
          value={tarefa}
          onChange={(e) => setTarefa(e.target.value)}
          placeholder="Digite uma tarefa"
          style={{ padding: "8px", marginRight: "10px" }}
        />

        <button onClick={adicionarTarefa} className="btn-adicionar">
          Adicionar
        </button>
      </div>
      <ul className="lista-tarefas">
        {lista.map((item, index) => (
          <li key={index} className="item-tarefa">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListaDeTarefas;
