import React from "react";
import Button from "../Button";
import style from './Form.module.scss';
import { ITarefa } from "../../types/tarefa";

class Form extends React.Component<{
    setTarefas: React.Dispatch<React.SetStateAction<ITarefa[]>>
}> {
    state = {
        tarefa: "",
        tempo: "00:00"
    }

    adicionarTarefa(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault()
        this.props.setTarefas(tarefasAntigas => [...tarefasAntigas, {...this.state}])
        console.log("state: ", this.state);
    }

    render() {
        return(
            <form className={style.novaTarefa} onSubmit={this.adicionarTarefa.bind(this)}>
                <div className={style.inputContainer}>
                    <label htmlFor="tarefa">
                        Adicione um novo estudo
                    </label>
                    <input 
                        type="text"
                        value={this.state.tarefa}
                        onChange={e => this.setState({...this.state, tarefa: e.target.value})}
                        name="tarefa" 
                        id="tarefa"
                        placeholder="O que você quer estudar?"
                        required
                    />
                </div>

                <div className={style.inputContainer}>
                    <label htmlFor="">
                        Tempo
                    </label>
                    <input 
                        type="time" 
                        step={1}
                        value={this.state.tempo}
                        onChange={e => this.setState({...this.state, tempo: e.target.value})}
                        name="tempo" 
                        id="tempo"
                        min={"00:00:00"}
                        //max={"01:30:00"}
                        required 
                    />
                </div>
                <Button type="submit">Adicionar</Button>
            </form>
        )
    }
}

export default Form