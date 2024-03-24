import { useState } from 'react';
import Banner from './componentes/Banner';
import Formulario from './componentes/Formulario';
import Time from './componentes/Time';
import Titulo from './componentes/Titulo';
import Rodape from './componentes/Rodape';
import Alerta from './componentes/Alerta';


//      Para adicionar um id personalizado:
import { v4 as uuidv4 } from 'uuid'; 
import { IColaborador } from './compartilhado/interfaces/IColaborador';


function App() {

    class ClasseTime {
        nome
        cor
        id

        constructor (nome: string, cor: string) {
            this.nome = nome;
            this.cor = cor;
            this.id = uuidv4();
        }
    }

    const programacao = new ClasseTime ('Programação', '#57C278');
    const frontEnd = new ClasseTime ('Front-end', '#82CFFA');
    const dataScience = new ClasseTime ('Data Science', '#A6D157');
    const devops = new ClasseTime('Devops', '#E06B69');
    const uxEDesing = new ClasseTime('UX e Desing', '#DB6EBF');
    const mobile = new ClasseTime('Mobile', '#FFBA05');
    const inovacaoEGestao = new ClasseTime('Inovação e Gestão', '#FF8A29');

    const [times, setTimes] = useState ([programacao, frontEnd, dataScience, devops, uxEDesing, mobile, inovacaoEGestao])

    const [colaboradores, setColaboradores] = useState<IColaborador[]>([])

    const [mostrarAlerta, setMostrarAlerta] = useState(false);

    const abrirAlerta = () => {
        setMostrarAlerta(true);
    };

    const fecharAlerta = () => {
        setMostrarAlerta(false);
    };

    const aoNovoColaboradorAdicionado = (colaborador: IColaborador) => {
        const jaExiste = colaboradores.some(
            (c) =>
                c.nome === colaborador.nome &&
                c.cargo === colaborador.cargo &&
                c.imagem === colaborador.imagem &&
                c.time === colaborador.time
        );

        if (!jaExiste) {
            colaborador.id = uuidv4();
            colaborador.favorito = false;
            setColaboradores([...colaboradores, colaborador]);
        } else {
            abrirAlerta();
        }
    };

    function detelarColaborador(id: string) {
        setColaboradores(colaboradores.filter(colaborador => colaborador.id !== id))
    }

    function mudarCorDoTime(cor: string, id: string) {
        setTimes(times.map(time => {
            if(time.id === id) {
                time.cor = cor;
            }
            return time;
        }));
    }

    function cadastrarTime(novoTime: {nome: string; cor: string}) {
        setTimes([...times, {...novoTime, id: uuidv4()}])

    }

    function botaoFavorito(id: string) {
        setColaboradores(colaboradores.map(
                    colaborador => {
            if(colaborador.id ===id){
                colaborador.favorito = !colaborador.favorito
            };
            return colaborador
        }))  
    }

    return (
        <div className="App">
            <Banner enderecoImagem="/imagens/banner.png" textoAlternativo="banner do organo"/>
            <Formulario 
                times={times.map(time => time.nome)} 
                aoColaboradorCadastrado={colaborador => aoNovoColaboradorAdicionado(colaborador)}
                cadastrarTime={cadastrarTime}
            />
            <section className='times'>
                <Titulo/>
                {times.map(time => 
                    <Time 
                        mudarCor={mudarCorDoTime}
                        key={time.nome} 
                        nome={time.nome} 
                        cor={time.cor}
                        id={time.id}
                        colaboradores={colaboradores.filter(colaborador => colaborador.time === time.nome)}
                        aoDeletar={detelarColaborador}
                        aoFavoritar={botaoFavorito}
                    />
                )}
            </section>

            {mostrarAlerta && (
            <Alerta fecharAlerta={fecharAlerta}>Colaborador já existe!</Alerta>
            )}

            <Rodape/>
        </div>
    );
}

export default App;