import { useState } from 'react';
import './App.css';
import CardCadastro from './components/CardCadastro';
import CardUsers from './components/CardUsers';

function App() {
  const [user,setUser]=useState(true)
  const [users, setUsers]=useState([])
  return (
    <div className="App">
      <div className="App-header">
        {user ? 
        <CardCadastro setUser={setUser} users={users} setUsers={setUsers}/>:
        <CardUsers users={users} setUser={setUser}/>}
      </div>
    </div>
  );
}

export default App;
