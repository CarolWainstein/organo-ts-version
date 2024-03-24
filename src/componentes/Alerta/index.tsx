import './Alerta.css';

interface AlertaProps {
  children: React.ReactNode;
  fecharAlerta: () => void;
}

const Alerta = ({ children, fecharAlerta }: AlertaProps) => {
  return (
    <div className="alerta-container">
      <div className="alerta-texto">{children}</div>
      <span className="fechar-alerta" onClick={fecharAlerta}>
        X
      </span>
    </div>
  );
};

export default Alerta;