import './jogo.css'
import { useState } from 'react';

function Quadrado() {

    const [q,setQ] = useState('')

    function handleClick() {
        if (q == 'X') {
            setQ('O')
        } else {
            setQ('X')
        }
    }

    return <button className='q'
        onClick={handleClick}>
            {q}
        </button>
}

function Tabuleiro() {
    return (
        <div>
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