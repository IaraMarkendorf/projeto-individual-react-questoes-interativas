import React, { useState } from "react";
import "./styles.css";

function Questao1() {
  const [isDark, setIsDark] = useState(false);

  const mudarTema = () => {
    setIsDark(!isDark);
  };

  return (
    <div className={isDark ? "container dark" : "container light"}>
      <h1 className="titulo">Mudar tema</h1>
      <button onClick={mudarTema} className="btn-primary">
        Mudar Tema
      </button>
    </div>
  );
}

export default Questao1;
