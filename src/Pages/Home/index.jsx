import { useState } from "react"
import React from "react"

import TransactionForm from "../../Components/TransactionForm"
import TransactionList from "../../Components/TransactionList"
import CardTotal from "../../Components/CardTotal"
import TransactionFilter from "../../Components/TransactionFilter"

import "./styles.css" 

export default function Home(){

    const [transactions, setTransactions] = useState([]);
    const [filter, setFilter] = useState('all');

    const addTransaction = (transaction) => {
        setTransactions([...transactions, transaction]);
    };

    const removeTransaction = (indexToRemove) => {
        setTransactions(transactions.filter((_, index) => index !== indexToRemove));
    };

    return(
        <div className="financePage">
            <div className="caixa1">
                <TransactionForm addTransaction={addTransaction}/>
                <CardTotal transactions={transactions}/>
            </div>
            <div className="caixa2">
                <TransactionFilter 
                    setFilter={setFilter} 
                />

                <TransactionList transactions={transactions} filter={filter} removeTransaction={removeTransaction}/>
            </div>
        </div>
    )
}