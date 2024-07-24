import { FaRegTrashAlt } from "react-icons/fa";
import { IoMdTrendingDown } from "react-icons/io";
import { IoMdTrendingUp } from "react-icons/io";

import "./styles.css";

export default function TransactionList({ transactions, filter, removeTransaction }) {
  const filteredTransactions = transactions.filter((transaction) => {
    if (filter === "all") return true;
    return transaction.type === filter;
  });

  return (
    <div className="transactionList">
      <ul className="listaFinances">
        {filteredTransactions.map((transaction, index) => (
          <li key={index}>
            <p className="p1">{transaction.text}</p>
            <p className="p2">R$ {transaction.amount.toFixed(2)}</p>
            <p className="p3">
              {transaction.type === "entrada" ? (
                <IoMdTrendingUp className="icon up" />
              ) : (
                <IoMdTrendingDown className="icon down" />
              )}
            </p>

            <FaRegTrashAlt className="p4" onClick={() => removeTransaction(index)} />
          </li>
        ))}
      </ul>
    </div>
  );
}
