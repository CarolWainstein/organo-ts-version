import './Banner.css'

interface BannerProps {
    enderecoImagem: string
    textoAlternativo?: string
}

function Banner({enderecoImagem, textoAlternativo} :BannerProps) {
    return (
        <header className="banner">
           <img src={enderecoImagem} alt={textoAlternativo}/> 
        </header>
        
    )
}

export default Banner