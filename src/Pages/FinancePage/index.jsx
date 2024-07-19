import { useState } from "react"
import React from "react"

import TransactionForm from "../../Components/TransactionForm"
import TransactionList from "../../Components/TransactionList"
import CardTotal from "../../Components/CardTotal"

import "./styles.css" 

export default function FinancePage(){

    const [transactions, setTransactions] = useState([]);

    const addTransaction = (transaction) => {
        setTransactions([...transactions, transaction]);
    };

    return(
        <div className="financePage">
            <div className="caixa1">
                <TransactionForm addTransaction={addTransaction}/>
                <CardTotal transactions={transactions}/>
            </div>
            <div className="caixa2">
                <TransactionList transactions={transactions}/>
            </div>
        </div>
    )
}