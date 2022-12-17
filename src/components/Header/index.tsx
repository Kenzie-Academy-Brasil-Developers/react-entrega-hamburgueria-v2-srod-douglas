export const HeaderDashboard = () => {
    return (
        <>
            <header>
                <div>
                    <h1>CODE<span>burguer</span></h1>
                </div>
                <div>
                    <form>
                        <input placeholder="Digitar Pesquisa"/>
                        <button type="submit">Search</button>
                    </form>
                    <span>Contador de itens do carrinho</span>
                    <button type="button">Logout</button>
                </div>
            </header>
        </>
    )
}