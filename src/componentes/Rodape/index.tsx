import './Rodape.css'

const Rodape = () => {
    return (
        <footer className='rodape'>
            <section>
                <ul className='rodape__links'>
                <li>
                    <a href="https://www.facebook.com" target="_blank" rel="noreferrer">
                        <img src="/imagens/fb.png" alt="" />
                    </a>
                </li>
                <li>
                    <a href="https://www.twitter.com" target="_blank" rel="noreferrer">
                        <img src="/imagens/tw.png" alt="" />
                    </a>
                </li>
                <li>
                    <a href="https://www.instagram.com" target="_blank" rel="noreferrer">
                        <img src="/imagens/ig.png" alt="" />
                    </a>
                </li>
                </ul>
            </section>
            <section>
                <img src='/imagens/logo.png' alt='logo organo'/>
            </section>
            <section>
                <p className='rodape__paragrafo'>
                    Desenvolvido sem fins comerciais.
                </p>
            </section>
        </footer>
    )
}

export default Rodape