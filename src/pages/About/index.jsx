import React from 'react'
import Cards from '../../components/cards';

export default function About(){
    return (
        <div>
            <h1>Resume</h1>
            <div>
            <Cards title="Usuer" number={15054}/>
            <Cards title="Processos" number={15054}/>
            <Cards title="Novos Usuários" number={354}/>
            <Cards title="Processos por cliente" number={2}/>
            <Cards title="Processos por cliente" number={2}/>
            <Cards title="Processos por cliente" number={2}/>
            </div>
        </div>
    );
}