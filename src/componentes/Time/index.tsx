import { IColaborador } from '../../compartilhado/interfaces/IColaborador';
import Colaborador from '../Colaborador'
import './Time.css'
import hexToRgba from 'hex-to-rgba';

interface TimeProps {
    cor: string
    nome: string
    colaboradores: IColaborador[]
    mudarCor: (novaCor: string, id: string) => void
    id: string
    aoDeletar: (id: string) => void
    aoFavoritar: (id: string) => void
}

const Time = (props: TimeProps) => {
    return (
        (props.colaboradores.length > 0) && <section className='time' style={{backgroundColor: hexToRgba(props.cor, '0.6')}}>
            <input onChange={evento => props.mudarCor(evento.target.value, props.id)} value={props.cor} type='color' className='input-cor'/>
            <div className='container'>
                <h3>{props.nome}</h3>
                <div style={{color: props.cor}} className='linha2'></div>
            </div>
            <div className='colaboradores'>
                {props.colaboradores.map(colaborador => {
                    return (<Colaborador
                    corDeFundo={props.cor}
                    key={colaborador.nome} 
                    nome={colaborador.nome} 
                    cargo={colaborador.cargo} 
                    imagem={colaborador.imagem ?? ''}
                    data={colaborador.data}
                    aoDeletar={props.aoDeletar}
                    id={colaborador.id ?? ''}
                    favorito={colaborador.favorito ?? false}
                    aoFavoritar={props.aoFavoritar}
                    />);
                })}
            </div>
        </section>
    )
}

export default Time