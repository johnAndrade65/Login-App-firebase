import { useState} from "react";
import { Link } from "react-router-dom";
import { auth } from "../../firebaseConnection";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";


const Register = () => {
  const [ email, setEmail ] = useState('');
  const [ password, setPassword ] = useState('');
  const navigate = useNavigate();

  async function handleRegister(e){
    e.preventDefault();
    if(email !== '' && password !== ''){
      await createUserWithEmailAndPassword(auth, email, password)
      .then(() => {
        navigate('/admin', {replace: true })
      })
      .catch((erro) => {
        alert(`Erro: ${erro.message}`);
      })
    }
    alert("Preencha todos os campos");
  }

    return (
      <div className="container">
        <h1>Cadastre-se</h1>
        <span>vamos criar sua conta!.</span>

        <form className="form" onSubmit={handleRegister}>
          <input
            type="text" placeholder="Digite seu e-mail..." 
            value={email}
            onChange={(e) => setEmail(e.target.value)}/>
          <input
            type="password" placeholder="Digite sua senha..." 
            value={password}
            onChange={(e) => setPassword(e.target.value)}/>

            <button type="submit">Registrar</button>
        </form>
        <Link className="button-link" to="/">Já possui uma conta? Faça o login!.</Link>
      </div>
    );
  }
  
  export default Register;