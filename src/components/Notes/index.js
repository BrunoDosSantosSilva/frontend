import React from 'react';

function Notes({data}){
    return(
        <>
        <li className="notepad-infos">

            <div>
              <strong>{data.titulo}</strong>
              <span>
                x
              </span>
            </div>

            <textarea defaultValue={data.descricao}></textarea>
            <span>!</span>
          </li>
        </>
    )
}

export default Notes;