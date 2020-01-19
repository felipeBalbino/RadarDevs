import React, { useState } from 'react';
import './Global.css';
import './App.css';
import './Sidebar.css';
import './Main.css';

function App() {
  return (
    <div id="app">
      <aside>
        <strong>
          Cadastrar
        </strong>
        <form>
          <div className="input-block">
            <label htmlFor="github_username">Usuário do Github</label>
            <input namne="github_username" id="github_username" required/>
          </div>
          <div className="input-block">
            <label htmlFor="techs">Tecnologias</label>
            <input namne="techs" id="techs" required/>
          </div>

          <div className="input-group">
            <div className="input-block">
              <label htmlFor="latitude">latitude</label>
              <input namne="latitude" id="latitude" required/>
            </div>
            <div className="input-block">
              <label htmlFor="longitude">longitude</label>
              <input namne="longitude" id="longitude" required/>
            </div>
          </div>

          <button type="submit">Salvar</button>
        </form>
      </aside>

      <main>
        <ul>
          <li className="dev-item">
            <header>
              <img src="https://avatars3.githubusercontent.com/u/905470?s=460&v=4" alt="Felipe Balbino"/>
              <div className="user-info">
                <strong>Felipe Balbino</strong>
                <span>ReactJs, React Nativa, Node;js</span>
              </div>
            </header>
            <p>Sou desenvolvedor de software que adora trabalhar com projetos desafiadores e criativos. Como programador, estou em constante busca por melhores práticas.</p>
            <a href="https://github.com/felipeBalbino">Acessar perfil no GitHub</a>
          </li>

          <li className="dev-item">
            <header>
              <img src="https://avatars3.githubusercontent.com/u/905470?s=460&v=4" alt="Felipe Balbino"/>
              <div className="user-info">
                <strong>Felipe Balbino</strong>
                <span>ReactJs, React Nativa, Node;js</span>
              </div>
            </header>
            <p>Sou desenvolvedor de software que adora trabalhar com projetos desafiadores e criativos. Como programador, estou em constante busca por melhores práticas.</p>
            <a href="https://github.com/felipeBalbino">Acessar perfil no GitHub</a>
          </li>

          <li className="dev-item">
            <header>
              <img src="https://avatars3.githubusercontent.com/u/905470?s=460&v=4" alt="Felipe Balbino"/>
              <div className="user-info">
                <strong>Felipe Balbino</strong>
                <span>ReactJs, React Nativa, Node;js</span>
              </div>
            </header>
            <p>Sou desenvolvedor de software que adora trabalhar com projetos desafiadores e criativos. Como programador, estou em constante busca por melhores práticas.</p>
            <a href="https://github.com/felipeBalbino">Acessar perfil no GitHub</a>
          </li>

          <li className="dev-item">
            <header>
              <img src="https://avatars3.githubusercontent.com/u/905470?s=460&v=4" alt="Felipe Balbino"/>
              <div className="user-info">
                <strong>Felipe Balbino</strong>
                <span>ReactJs, React Nativa, Node;js</span>
              </div>
            </header>
            <p>Sou desenvolvedor de software que adora trabalhar com projetos desafiadores e criativos. Como programador, estou em constante busca por melhores práticas.</p>
            <a href="https://github.com/felipeBalbino">Acessar perfil no GitHub</a>
          </li>
        </ul>

      </main>

    </div>
  );
}

export default App;
