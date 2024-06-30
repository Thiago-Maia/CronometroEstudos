import style from './Botao.module.scss'

export default function Botao(props: any) {

    return (
        <button onClick={props.onClick} type={props.type} className={style.botao}>
            {props.children}
        </button>
    )
}