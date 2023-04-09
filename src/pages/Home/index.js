import "./home.css";
import { useState} from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../../firebaseConnection";
import { signInWithEmailAndPassword } from "firebase/auth";

const Home = () => {
  const [ email, setEmail ] = useState('');
  const [ password, setPassword ] = useState('');

  const navigate = useNavigate();

  async function handleLogin(e){
    e.preventDefault();
    if(email !== '' && password !== ''){

      await signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        //Navegar para /admin
        navigate('/admin', {replace: true})
      })
      .catch((erro) => {
        alert(`Erro: ${erro.message}`);
      })
    }
    alert("Preencha todos os campos");
  }

    return (
      <div className="container">
        <h1>Lista de Tarefas</h1>
        <span>Gerencie sua agenda de forma fácil.</span>

        <form className="form" onSubmit={handleLogin}>
          <input
            type="text" placeholder="Digite seu e-mail..." 
            value={email}
            onChange={(e) => setEmail(e.target.value)}/>
          <input
            type="password" placeholder="Digite sua senha..." 
            value={password}
            onChange={(e) => setPassword(e.target.value)}/>

            <button type="submit">Acessar</button>
        </form>
        <Link className="button-link" to="/register">Não possui uma conta? cadastre-se!</Link>
      </div>
    );
  }
  
  export default Home;