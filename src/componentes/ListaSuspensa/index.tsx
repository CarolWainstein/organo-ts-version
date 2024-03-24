import './ListaSuspensa.css'

interface ListaSuspensaProps {
    label: string
    aoAlterado: (valor: string) => void
    itens: string[]
    valor: string
    obrigatorio: boolean
}

const ListaSupensa = (props: ListaSuspensaProps) => {

    return (
        <div className="lista-suspensa">
            <label>{props.label}</label>
            <select onChange={evento => 
                props.aoAlterado(evento.target.value)} 
                required={props.obrigatorio} 
                value={props.valor}
            >
                <option value=""></option>
                {props.itens.map(item => {
                return <option key={item}>{item}</option>
                })}
            </select>
        </div>

    )
}

export default ListaSupensa