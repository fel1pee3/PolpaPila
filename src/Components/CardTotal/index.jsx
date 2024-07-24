import "./styles.css";

export default function CardTotal({ transactions }) {
  const calculateBalance = () => {
    return transactions.reduce((acc, transaction) => {
      if (transaction.type === "entrada") {
        return acc + transaction.amount;
      } else if (transaction.type === "saida") {
        return acc - transaction.amount;
      } else {
        return acc;
      }
    }, 0);
  };

  return (
    <div className="cardTotal">
      <div className="">
        <h1>Valor total: </h1>
        <span>R$ {calculateBalance().toFixed(2)}</span>
      </div>
      <p>O valor se refere ao saldo.</p>
    </div>
  );
}
