import Botao from "../Botao";
import Relogio from "./Relogio";

import ITarefa from "../../Interfaces/ITarefas";

import style from './Cronometro.module.scss'
import { tempoParaSegundos } from "../../common/utils/time";
import { useEffect, useState } from "react";

export default function Cronometro({ tarefa, finalizarTarefa }: { tarefa: ITarefa | undefined, finalizarTarefa: () => void }) {
    const [tempo, setTempo] = useState<number>();

    useEffect(() => {
        if (tarefa?.tempo)
            setTempo(tempoParaSegundos(tarefa.tempo))
    }, [tarefa]);

    function regressiva(contador: number = 0) {
        setTimeout(() => {
            if(contador > 0){
                setTempo(contador - 1)
                return regressiva(contador - 1)
            }
            else {
                finalizarTarefa();
            }
        }, 1000);
    }

    return (
        <div className={style.cronometro}>
            <p className={style.titulo}>Escolha um card e inicie o cronômetro</p>

            <div className={style.relogioWrapper}>
                <Relogio tempo={tempo} />
            </div>
            <Botao
                onClick={() => regressiva(tempo)}
                type="button"
            >
                Começar!
            </Botao>
        </div>
    )
}