import './jogo.css'
function Tabuleiro() {
    return (
        <div>
            <div className="linha">
                <button className='quadrado'>X</button>
                <button className='quadrado'>X</button>
                <button className='quadrado'>X</button>
            </div>
            <div className="linha">
                <button className='quadrado'>X</button>
                <button className='quadrado'>X</button>
                <button className='quadrado'>X</button>
            </div>
            <div className="linha">
                <button className='quadrado'>X</button>
                <button className='quadrado'>X</button>
                <button className='quadrado'>X</button>
            </div>
        </div>
    )

}

export default function JogoDaVelha() {
    return (
        <>
            <h1>Jogo da velha</h1>
            <p>Este é um jogo...</p>
            <Tabuleiro />
        </>
    )
}