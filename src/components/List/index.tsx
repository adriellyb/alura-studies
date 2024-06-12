import Item from './Item'
import style from './List.module.scss'

function List() {
    const tarefas = [
        {
            tarefa: "React",
            tempo: "02:00:00"
        },
        {
            tarefa: "Javascript",
            tempo: "01:00:00"
        },
        {
            tarefa: "Typescript",
            tempo: "03:00:00"
        }
    ]
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