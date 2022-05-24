import { useState } from "react";

function SmartCounter() {
  //Retorna um vetor
  //1º variavel stateful
  //2º função amarrada a essa variavel que atualiza esse valor
  const [quantity, upQuantity] = useState(1);

  return (
    <>
      <h1>{quantity}</h1>
      <button
        onClick={() => {
          upQuantity(quantity + 1);
        }}
      >
        Aumentar
      </button>
    </>
  );
}

export default SmartCounter;
