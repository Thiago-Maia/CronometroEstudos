import ITarefa from '../../../Interfaces/ITarefas'
import style from './Item.module.scss'

export default function Item(
    {
        tarefa,
        selecionaTarefa
    }:
        {
            tarefa: ITarefa,
            selecionaTarefa: (tarefaSelecionada: ITarefa) => void
        }
) {
    return (
        <li className={`${style.item} ${tarefa.selecionado ? style.itemSelecionado : ''} ${tarefa.completado ? style.itemCompletado : ''}`} onClick={() =>  !tarefa.completado && selecionaTarefa(tarefa)}>
            <h3>{tarefa.tarefa}</h3>
            <span>
                {tarefa.tempo}
            </span>
            {tarefa.completado &&
                <span className={style.concluido} aria-label='tarefa completada'></span>
            }
        </li>
    )
}