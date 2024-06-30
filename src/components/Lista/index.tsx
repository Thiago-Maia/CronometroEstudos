import { useState } from 'react'
import Item from './item'
import style from './Lista.module.scss'
import ITarefa from '../../Interfaces/ITarefas'

export default function Lista(
    {
        tarefas,
        selecionaTarefa
    }:
        {
            tarefas: ITarefa[],
            selecionaTarefa: (tarefaSelecionada: ITarefa) => void
        }
) {

    return (
        <aside className={style.listaTarefas}>
            <h2> Estudos do dia </h2>
            <ul>
                {tarefas.map(item =>
                (
                    <Item
                        key={item.id}
                        tarefa={item}
                        selecionaTarefa={selecionaTarefa}
                    />
                )
                )}
            </ul>
        </aside>
    )
}