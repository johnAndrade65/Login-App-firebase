import { useState, useEffect } from "react";
import "./admin.css";
import { auth, db } from '../../firebaseConnection';
import { signOut } from 'firebase/auth';
import {
     addDoc,
     collection
} from 'firebase/firestore';

const Admin = () => {
     const [tarefaInput, setTarefaInput] = useState("");
     const [user, setUser] = useState({});

     useEffect(() => {
          async function loadTarefa(){
               const userDetail = localStorage.getItem("@detailUser")
               setUser(JSON.parse(userDetail));
          }
          loadTarefa();
     }, []);

     async function handleRegister(e){
        e.preventDefault();

        if(tarefaInput === ''){
          alert("Digite sua tarefa");
          return;
        }
        await addDoc(collection(db, "tarefas"), {
          tarefa: tarefaInput,
          created: new Date(),
          userUid: user?.uid
        })
        .then(() => {
          alert("tarefa registrada!");
          setTarefaInput('');
        })
        .catch((erro) => {
          alert("Erro ao registrar " + erro);
        })
     }
     async function handleLogout(){
          await signOut(auth);
     }

     return (
          <div className="admin-container">
               <h1>Minhas tarefas</h1>
               <form className="form" onSubmit={handleRegister}>
                    <textarea
                         placeholder="Digite sua tarefa..."
                         value={tarefaInput}
                         onChange={(e) => setTarefaInput(e.target.value)}
                    />
                    <button className="btn-register" type="submit">Registrar tarefa</button>
               </form>
               <article className="list">
                    <p>Etudar javascript</p>
                    <div>
                         <button>Editar</button>
                         <button className="btn-delete">Concluir</button>
                    </div>
               </article>
               <button className="btn-logout" onClick={handleLogout}>Sair</button>
          </div>
     );
};

export default Admin;
