import Botao from "../Botao";
import Relogio from "./Relogio";

import ITarefa from "../../Interfaces/ITarefas";

import style from './Cronometro.module.scss'
import { tempoParaSegundos } from "../../common/utils/time";
import { useEffect, useRef, useState } from "react";

export default function Cronometro(
    {
        tarefa,
        finalizarTarefa,
        atualizarTempoTarefaSelecionada
    }:
        {
            tarefa: ITarefa | undefined,
            finalizarTarefa: () => void,
            atualizarTempoTarefaSelecionada: (tarefa: ITarefa, tempo: number) => void,
        }
) {

    const [tempo, setTempo] = useState<number>(0);
    const [start, setStart] = useState<boolean>(false);
    const startRef = useRef(start);

    useEffect(() => {
        if (tarefa?.tempo)
            setTempo(tempoParaSegundos(tarefa.tempo))
    }, [tarefa]);

    useEffect(() => {
        startRef.current = start;
    }, [start]);

    function iniciarRegressiva(contador: number = 0) {
        setStart(true);
        regressiva(contador)
    }

    function pararRegressiva() {
        if (tarefa) {
            setStart(false);
            atualizarTempoTarefaSelecionada(tarefa, tempo);
        }
    }

    function regressiva(contador: number = 0) {
        setTimeout(() => {
            if (startRef.current && contador > 0) {
                setTempo(contador - 1)
                return regressiva(contador - 1)
            }
            else if(contador <= 0) {
                setStart(false);
                finalizarTarefa();
            }
            else{
                return
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
                onClick={() => start ? pararRegressiva() : iniciarRegressiva(tempo)}
                type="button"
            >
                {start ? 'Parar' : 'Começar'}
            </Botao>
        </div>
    )
}