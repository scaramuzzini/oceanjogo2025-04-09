import './jogo.css'
import { useState } from 'react';

function Quadrado({q, handleClick}) {
    return <button className='q'
        onClick={handleClick}>
            {q}
        </button>
}

function Tabuleiro() {
    //const [vezDoX, setVezDoX] = useState(true);
    const [quadrados, setQuadrados] = useState(Array(9).fill(null))
    function handleClick(i) {
        console.log('Clicou no quadrado '+i+' valor: '+quadrados[i]);
        const novosQuadrados = quadrados.slice();
        novosQuadrados[i] = 'X';
        setQuadrados(novosQuadrados);
    }
    return (
        <div>
            <div className="linha">
                <Quadrado q={quadrados[0]} handleClick={() => handleClick(0)} />
                <Quadrado q={quadrados[1]} handleClick={() => handleClick(1)} />
                <Quadrado q={quadrados[2]} handleClick={() => handleClick(2)} />
            </div>
            <div className="linha">
                <Quadrado />
                <Quadrado />
                <Quadrado />
            </div>
            <div className="linha">
                <Quadrado />
                <Quadrado />
                <Quadrado />
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