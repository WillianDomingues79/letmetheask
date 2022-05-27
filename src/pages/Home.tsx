import illustrationImg from "../assets/illustration.svg"
import logoImg from '../assets/logo.svg'
import googleIconImg from '../assets/google-icon.svg'

import '../styles/auth.scss';

export function Home() {
  return(
    <div id="page-auth">
      <aside>
        <img src={illustrationImg} alt="ilustração simbolizando perguntas e respostas" />
        <strong>Crie salas de d&amp;A ao vivo</strong>
        <p>Tire as duvidas da sua audiencia em tempo real</p>
      </aside>
      <main>
        <div>
          <img src={logoImg} alt="Letmetheask" />
          <button>
            <img src={googleIconImg} alt="Logo do Google" />Crie sua sala com o Google
          </button>
          <div>ou entre em uma sala</div>
          <form>
            <input type="text" placeholder='Digite o código da sala' />
            <button type='submit'>Entrar na sala</button>
          </form>
        </div>
      </main>
    </div>
  )
}