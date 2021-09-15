import React from 'react';
import "../src/stile/app.css"
import "../src/stile/global.css"
import "../src/stile/sidebar.css"
import "../src/stile/main.css"
import Notes from './components/Notes/index'


function App() {
  return (
    <div id="app">
      <aside>
        <strong>Tarefas</strong>
        <form>
          <div className="input-block">
            <label htmlFor="title">Titulo da tarefa</label>
            <input />
          </div>

          <div className="input-block">
            <label htmlFor="descricao">Descrição</label>
            <textarea></textarea>
          </div>

          <button type="submit">Salvar</button>
          <div>
            <h1>
              
            </h1>
          </div>
        </form>
      </aside>
      <main>
        <ul>
          <Notes/>
        </ul>
      </main>
    </div>
  );
}

export default App;
