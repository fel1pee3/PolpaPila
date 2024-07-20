import "./styles.css"

export default function TransactionFilter({ setFilter }){
    return(
        <div className="transactionFilter">
            <h1>Resumo finaceiro</h1>
            <div className="btnsFilter">
                <button onClick={() => setFilter('all')}>Todos</button>
                <button onClick={() => setFilter('entrada')}>Entradas</button>
                <button onClick={() => setFilter('saida')}>Saídas</button>
            </div>
        </div>
    )
}