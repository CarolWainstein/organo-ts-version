import './CampoTexto.css';

interface CampoTextoProps {
    type?: 'text' | 'date' | 'string' | 'color';
    label: string;
    placeholder: string;
    obrigatorio?: boolean;
    valor: string;
    aoAlterado: (valor: string) => void;
}

const CampoTexto = ({ type = 'text', label, placeholder, valor, obrigatorio = false, aoAlterado}: CampoTextoProps) => {

    const aoDigitado = (evento: React.ChangeEvent<HTMLInputElement>) => {
        aoAlterado(evento.target.value);
    }

    return (
        <div className={`campo-texto campo-${type}`}>
            <label>{label}</label>
            <input
                type={type}
                value={valor}
                onChange={aoDigitado}
                required={obrigatorio}
                placeholder={placeholder}
            />
        </div>
    );
}

export default CampoTexto;
