import React, { useEffect, useState } from 'react';
import './index.css';
import {Link} from 'react-router-dom';

export default function Repositores() {
    const [gitUser, setGitUser] = useState([]);
    const [expandMore, setexpandMore] = useState(false);

    function expand() {
      if (expandMore) {
        setexpandMore(false);
      } else {
        setexpandMore(true);
      }
    }
  
    useEffect(() => {
      let gitUser = localStorage.getItem('gitUser');
      
      gitUser = JSON.parse(gitUser);
      
      setGitUser(gitUser);
      localStorage.clear();
    }, []);
  
    return (
      <>
        <div className="Container">
            <div className="card">
                <img src={gitUser.avatar_url} alt="Avatar"></img>
                <div className="header">
                    <h2>{gitUser.name}</h2>
                    <button className="ExpandMore" onClick={expand}>{expandMore ? ">" : "<"}</button>
                    <h3>Work Contact</h3>
                </div>
                {expandMore &&
                <div className="card-items">
                        <h4>Company: <span className="dados">{gitUser.company ? gitUser.company : 'Não possui'}</span></h4>
                        <h4>Blog: <span className="dados">{gitUser.blog ? gitUser.blog : 'Não possui'}</span></h4>
                        <h4>Location: <span className="dados">{gitUser.location ? gitUser.location : 'Não possui'}</span></h4>
                        <h4>E-mail: <span className="dados">{gitUser.email ? gitUser.email : 'Não possui'}</span></h4>
                        <h4>Bio: <span className="dados">{gitUser.bio ? gitUser.bio : 'Não possui'}</span></h4>
                        <h4>Repositories: <span className="dados">{gitUser.public_repos ? gitUser.public_repos : 'Não possui'}</span></h4>
                        <h4>Hireable: <span className="dados">{gitUser.hireable ? gitUser.hireable : 'Não possui'}</span></h4>
                </div>
                }
            </div>
            <Link to="/" className="voltar">Voltar para página principal</Link>
        </div>

      </>
    );
  }

//"name": "Nome", <p>{usuario.name}</p>
//"avatar_url": "imagem",
//"company": "....",
//"blog": "...",
//"location": "....",
//"email": null,
//"bio": "....",
//public_repos: Quantidade de Repos, criados.