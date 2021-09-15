import { useForm } from "react-hook-form"
import "./style.css"
import * as yup from "yup"
import {yupResolver} from "@hookform/resolvers/yup"


const CardCadastro =({setUser, users, setUsers})=>{
    
    const formSchema= yup.object().shape({
        user: yup.string().required("Usuário obrigatório"),
        name: yup.string().required("Nome obrigatório"),
        email: yup.string().required("Email obrigatório").email("Email inválido"),
        confirmEmail: yup.string().email("Email inválido").oneOf([yup.ref("email"),null], "Email não confere"),
        password: yup.string().required("Senha obrigatória")
        .matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$*&@#])[0-9a-zA-Z$*&@#]{8,}$/,"Senha inválida"),
        confirmPassword: yup.string().oneOf([yup.ref("password"), null], "Senhas não conferem")
    })
    
    const {register, handleSubmit, formState:{errors}}=useForm({
        resolver: yupResolver(formSchema)
    })
    const handleSubmitFunction=(data)=>{
        setUsers([...users, data])
        setUser(false)
    }
    return(
        <>
        <h1>Formulário</h1>
        
        <form className="container" onSubmit={handleSubmit(handleSubmitFunction)}>
          <input placeholder="Nome de usuário *" maxLength="18" {...register("user")}/>
          {errors.user?.message}
          <input placeholder="Nome completo *" {...register("name")}/>
          {errors.name?.message}
          <input placeholder="Endereço de Email *" {...register("email")}/>
          {errors.email?.message}
          <input placeholder="Confirme seu Email *"{...register("confirmEmail")}/>
          {errors.confirmEmail?.message}
          <div className="pass">
              <div>
              <input placeholder="Senha *" type="password" minLength="8" {...register("password")}/>
                {errors.password?.message}
              </div>
              <div>
                <input placeholder="Confirmar sua senha *" type="password" {...register("confirmPassword")}/>
                {errors.confirmPassword?.message}
              </div>
          </div>
          <div className="suggestions">
              <ol>
                  <li>Uma letra maiúscula</li>
                  <li>Uma letra minúscula</li>
                  <li>Um número</li>
                  <li>Um caractere especial (ex.: @#$)</li>
                  <li>Mínimo 8 caracteres</li>
              </ol>
          </div>
          <div className="container_terms">
            <input type="checkbox" {...register("acept")}/>
            <p>Eu aceito os termos de uso da aplicação</p>
          </div>
          <button className="confirm_cad" type="submit">Cadastrar</button>
          
          <p><button onClick={()=>setUser(false)}>Já possui uma conta?</button></p>
        </form>
        </>
    )
}
export default CardCadastro