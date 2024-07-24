import { useState } from "react";

import "./styles.css";

export default function TransactionForm({ addTransaction }) {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState("");
  const [type, setType] = useState("entrada");

  const onSubmit = (e) => {
    e.preventDefault();
    const newTransaction = {
      text,
      amount: parseFloat(amount),
      type,
    };

    addTransaction(newTransaction);

    setText("");
    setAmount("");
    setType("entrada");
  };

  return (
    <form className="form" onSubmit={onSubmit}>
      <div className="cxI caixaIText">
        <label>Descrição</label>
        <input
          placeholder="Ex: Viagem, compras, academia..."
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          required
        />
      </div>
      <div className="caixaINumberISelect">
        <div className="cxI caixaINumber">
          <label>Valor</label>
          <input
            placeholder="R$ 1000.00"
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            required
          />
        </div>
        <div className="cxI caixaISelect">
          <label>Tipo</label>
          <select value={type} onChange={(e) => setType(e.target.value)}>
            <option value="entrada">Entrada</option>
            <option value="saida">Saída</option>
          </select>
        </div>
      </div>
      <button className="btnForm" type="submit">
        Enviar
      </button>
    </form>
  );
}
