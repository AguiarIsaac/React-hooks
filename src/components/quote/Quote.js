import axios from "axios";
import React, { useState } from "react";

export default function Quote() {
  const [frase, setFrase] = useState("Loanding");
  const [autor, setAutor] = useState("Loanding");

  function trocaFrase() {
    axios.get("https://api-quotes-gamma.vercel.app/api").then((response) => {
      setFrase(response.data.quote);
      setAutor(response.data.speaker);
    });
  }

  return (
    <>
      <p>{frase}</p>
      <p> - {autor}</p>
      <button onClick={trocaFrase}>Trocar Frase</button>
    </>
  );
}
