import { useState } from "react";
import ITarefa from "../../Interfaces/ITarefas";
import Botao from "../Botao";
import style from './Formulario.module.scss';
import {v4 as uuidv4} from 'uuid';

export default function Formulario({ setTarefas }: { setTarefas: React.Dispatch<React.SetStateAction<ITarefa[]>> }) {

    const [tarefa, setTarefa] = useState('')
    const [tempo, setTempo] = useState('00:00')

    function submitTarefa(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
        setTarefas(oldTarefas => [...oldTarefas, { tarefa, tempo, selecionado: false, completado: false, id: uuidv4() }])
        setTarefa('')
        setTempo('00:00')
    }

    return (
        <form className={style.novaTarefa} onSubmit={submitTarefa}>
            <div className={style.inputContainer}>
                <label htmlFor="tarefa">
                    Adicione um novo estudo
                </label>
                <input
                    type="text"
                    name="tarefa"
                    id="tarefa"
                    placeholder="O que você quer estudar?"
                    value={tarefa}
                    onChange={e => setTarefa(e.target.value)}
                    required
                />
            </div>
            <div className={style.inputContainer}>
                <label htmlFor="tempo">
                    Tempo
                </label>
                <input
                    type="time"
                    step="1"
                    name="tempo"
                    min="00:00:00"
                    max="01:30:00"
                    value={tempo}
                    onChange={e => setTempo(e.target.value)}
                    required
                />
            </div>
            <Botao type="submit">
                Adicionar
            </Botao>
        </form>
    )
}