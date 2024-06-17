import { ITarefa } from '../../types/tarefa'
import Item from './Item'
import style from './List.module.scss'

function List({ tarefas }: {tarefas: ITarefa[]}) {

    return (
        <aside className={style.listaTarefas}>
            <h2>Estudos do Dia</h2>

            <ul>
                {tarefas.map((item, idx) => (
                    <Item
                        key={idx} 
                        {...item}
                    />
                ))}
            </ul>
        </aside>
    )
}

export default List