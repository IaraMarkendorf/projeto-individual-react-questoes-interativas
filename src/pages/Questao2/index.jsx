import React from "react";
import { useState } from "react";
import "./styles.css";

function Questao2() {
  
  const [mensagem, setMensagem] = useState("Olá!");
  
 const login = () => {
  setMensagem("Bem-vindo!");
 }

  return (
    <div className="mensagem-container">
      <h1 className="titulo">Mensagem</h1>
      <h2 className="mensagem-texto">{mensagem}</h2>
      <button onClick={login} className="btn-login">
        Entrar
      </button>
    </div>
  );
}
export default Questao2;