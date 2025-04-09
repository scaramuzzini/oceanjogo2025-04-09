import './jogo.css'
import { useState } from 'react';

function Quadrado({q, handleClick}) {
    return <button className='q'
        onClick={handleClick}>
            {q}
        </button>
}

function verificarVencedor(quadrados) {

    const combinacoesVencedoras = [
        // linhas
        [0, 1, 2], 
        [3, 4, 5],
        [6, 7, 8],

        //colunas
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],

        // dp e ds
        [0, 4, 8],
        [2, 4, 6]
    ];

    for (let i=0; i < combinacoesVencedoras.length; i++) {
        console.log('Verificando...' + combinacoesVencedoras[i]);
        const [p1, p2, p3] = combinacoesVencedoras[i];
        if (quadrados[p1]
            && quadrados[p1] == quadrados[p2] 
            && quadrados[p2] == quadrados[p3]) {
                console.log('temos um vencedor!!! ' + quadrados[p1])
                //temos um vencedor
                return quadrados[p1];
        }
    }

    return null;      
}

function Tabuleiro() {
    const [vezDoX, setVezDoX] = useState(true);
    const [quadrados, setQuadrados] = useState(Array(9).fill(null))
    function handleClick(i) {
        if (verificarVencedor(quadrados)) {
            return;
        }

        if (quadrados[i] == null) {
            const novosQuadrados = quadrados.slice();
            novosQuadrados[i] = vezDoX ? 'X' : 'O'
            setVezDoX(!vezDoX)
            setQuadrados(novosQuadrados);
        }
    }
    function reiniciarJogo() {
        setQuadrados(Array(9).fill(null));
        setVezDoX(true);
    }

    let vencedor = verificarVencedor(quadrados);
    let mensagem;
    if (vencedor) {
        mensagem = 'Vencedor é '+vencedor;
    } else {
        mensagem = 'Agora é a vez de ' + (vezDoX ? 'X' : 'O')
    }

    return (
        <div>
            <button onClick={reiniciarJogo}>Reiniciar jogo</button>
            <h2>{mensagem}</h2>
            <div className="linha">
                <Quadrado q={quadrados[0]} handleClick={() => handleClick(0)} />
                <Quadrado q={quadrados[1]} handleClick={() => handleClick(1)} />
                <Quadrado q={quadrados[2]} handleClick={() => handleClick(2)} />
            </div>
            <div className="linha">
                <Quadrado q={quadrados[3]} handleClick={() => handleClick(3)} />
                <Quadrado q={quadrados[4]} handleClick={() => handleClick(4)} />
                <Quadrado q={quadrados[5]} handleClick={() => handleClick(5)} />
            </div>
            <div className="linha">
                <Quadrado q={quadrados[6]} handleClick={() => handleClick(6)} />
                <Quadrado q={quadrados[7]} handleClick={() => handleClick(7)} />
                <Quadrado q={quadrados[8]} handleClick={() => handleClick(8)} />
            </div>
        </div>
    )

}

export default function JogoDaVelha() {
    return (
        <>
            <h1>Jogo da velha</h1>
            <Tabuleiro />
        </>
    )
}