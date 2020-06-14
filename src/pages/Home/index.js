import React, {useState} from 'react';
import axios from 'axios';
import './index.css';
import {useHistory} from 'react-router-dom';

export default function Home() {

  const [user, setUsuario] = useState('');
  const history = useHistory();
  const [erro, setErro] = useState(false);


  function handlePesquisa(){
    const url = `https://api.github.com/users/${user}`;
    
    axios.get(url).then(response => {

      const gitUser = response.data;
     // const userName = [];

     // repositories.map((repository) => {
     //   userName.push(repository);
     // });
     localStorage.setItem('gitUser', JSON.stringify(gitUser));
     setErro(false);
     history.push('/repositories');
   }).catch(erro => {
     setErro(true)
   });
 }

  return (
    <>
      <div className="container">
          <input type="text"
              placeholder="insira seu username..."
              name="user"
              id="user" 
              value={user}
              onChange={e => setUsuario(e.target.value)} className="inputuser"
          />
          <button 
            type="button"
            onClick={handlePesquisa}>Pesquisar
          </button>
          {erro ? <span className="erro">Ops, ocorreu um erro na busca.</span> : ''}
        </div>
    </>

  );
}