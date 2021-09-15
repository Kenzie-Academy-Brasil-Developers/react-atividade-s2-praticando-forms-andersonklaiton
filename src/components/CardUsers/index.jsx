import "./style.css"
const CardUsers=({users, setUser})=>{
    
    return(
        <div className="container_users">
            <h1>Usuários</h1>
           {users.map((usuario, index)=>{
               return(
                   <div key={index} className="container_user">
                        <p>Usuário: {usuario.user}</p>
                        <p>Nome: {usuario.name}</p>
                        <p>Email: {usuario.email}</p>
                   </div>
               )
           })} 
           <button className="btnBack" onClick={()=>setUser(true)}>Voltar</button>
        </div>
    )
}
export default CardUsers