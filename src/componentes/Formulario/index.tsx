import './Formulario.css'
import CampoTexto from '../Campo'
import ListaSupensa from '../ListaSuspensa'
import Botao from '../Botao'
import { useState } from 'react'
import { IColaborador } from '../../compartilhado/interfaces/IColaborador'

interface FormularioProps {
    aoColaboradorCadastrado: (colaborador: IColaborador) => void
    times: string[]
    cadastrarTime: (time: { nome: string; cor: string }) => void
}

const Formulario = (props: FormularioProps) => {

    const [nome, setNome] = useState('')
    const [cargo, setCargo] = useState('')
    const [imagem, setImagem] = useState('')
    const [time, setTime] = useState('')
    const [nomeTime, setNomeTime] = useState('')
    const [corTime, setCorTime] = useState('')
    const [data, setData] = useState('')

    const aoSalvar = (evento: React.FormEvent<HTMLFormElement>) => {
        evento.preventDefault()
        props.aoColaboradorCadastrado({
            nome,
            cargo,
            imagem,
            time,
            data,
        })
        setNome('')
        setCargo('')
        setImagem('')
        setTime('')
    }

    return (
        <section className="formulario">
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <CampoTexto 
                    obrigatorio={true} 
                    label="Nome" 
                    placeholder="Digite seu nome"
                    valor={nome}
                    aoAlterado={valor => setNome(valor)}
                />
                <CampoTexto 
                    obrigatorio={true} 
                    label="Cargo" 
                    placeholder="Digite seu cargo"
                    valor={cargo}
                    aoAlterado={valor => setCargo(valor)}
                />
                <CampoTexto 
                    label="Data de entrada no time" 
                    placeholder=''
                    valor={data}
                    aoAlterado={valor => setData(valor)}
                    type='date'
                />
                <CampoTexto 
                    label="Imagem" 
                    placeholder="Digite o endereço da imagem"
                    valor={imagem}
                    aoAlterado={valor => setImagem(valor)}
                />
                <ListaSupensa
                    obrigatorio={true} 
                    label="Time" 
                    itens={props.times}
                    valor={time}
                    aoAlterado={valor => setTime(valor)}
                />
                <Botao>
                    Criar Card
                </Botao>
            </form>

            <form onSubmit={(evento: React.FormEvent<HTMLFormElement>) => {
                evento.preventDefault()
                props.cadastrarTime({nome: nomeTime, cor: corTime})
            }}>
                <h2>Preencha os dados para criar um novo time</h2>
                <CampoTexto 
                    obrigatorio
                    label="Nome" 
                    placeholder="Digite o nome do time"
                    valor={nomeTime}
                    aoAlterado={valor => setNomeTime(valor)}
                />
                <CampoTexto 
                    obrigatorio
                    type = 'color'
                    label="Cor" 
                    placeholder="Digite a cor do time"
                    valor={corTime}
                    aoAlterado={valor => setCorTime(valor)}
                />
                <Botao>
                    Criar Time
                </Botao>
            </form>
        </section>
    )
}

export default Formulario