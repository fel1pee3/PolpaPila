import "./styles.css"

export default function TransactionList({ transactions }){

    return(
        <div>
            <h2>Lista de Transações</h2>
            <ul>
                {transactions.map((transaction, index) => (
                <li key={index}>
                    {transaction.text} - {transaction.amount} - {transaction.type}
                </li>
                ))}
            </ul>
        </div>
    )
}