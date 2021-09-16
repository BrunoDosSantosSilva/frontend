
import React, {useState, useEffect} from 'react';

import api from './services/api';

import "../src/stile/app.css"
import "../src/stile/global.css"
import "../src/stile/sidebar.css"
import "../src/stile/main.css"

import Notes from './components/Notes/index'
import Radiobutton from './components/RadioButton';


function App() {

  const[titulo, setTitulo ]= useState('')
  const[descricao, setDescricao] = useState('')
  const[allDescreicao, setAllDescricao] = useState([])

  useEffect(()=>{
    async function getALLDescricao(){
      const response = await api.get('/',);

      setAllDescricao(response.data)

    }

    getALLDescricao()
  },[])

  async function handleSubmit(e){
    e.preventDefault();

    const response = await api.post('/add', {
        titulo,
        descricao,
        prioridade:false,
        statos:false,
        prazo:false,
      })

      setTitulo('')
      setDescricao('')

      setAllDescricao([...allDescreicao, response.data])

  }

  useEffect(()=>{
    function enabeleSubmitButton(){
      let btn=document.getElementById('btn_submit')
      btn.style.background="#FFD3CA"
      if(titulo && descricao){
        btn.style.background='#EB8F7A'
      }
    }
    enabeleSubmitButton()
  },[titulo,descricao])

  return (
    <div id="app">
      <aside>
        <strong>Tarefas</strong>
        <form onSubmit={handleSubmit}>

          <div className="input-block">
            <label htmlFor="title">Titulo da tarefa</label>
            <input
            required
            value={titulo}
            onChange={e =>setTitulo(e.target.value)}
            />
          </div>

          <div className="input-block">
            <label htmlFor="descricao">Descrição</label>
            <textarea
            required
            value={descricao}
            onChange={e =>setDescricao(e.target.value)}
            />
          </div>

          <button id="btn_submit" type="submit">Salvar</button>
          <div>
            <h1> 
              
            </h1>
          </div>
        </form>
        <Radiobutton/>
      </aside>
      <main>
        <ul>
          {allDescreicao.map(data=>(
            <Notes data={data}/>
          ))}
        </ul>
      </main>
    </div>
  );
}

export default App;
