import './App.css';
import {useState} from "react"
import Axios from 'axios'

function App() {

  const[name,setName] =useState("");
  const[email,setEmail] =useState("");

  const[usersList,setUsersList] = useState([])
  
  const addUser = () =>{
    Axios.post('http://localhost:3001/create',
    {name:name, email:email}).then(()=>{console.log("succes")});
  }

  const getUsers = () =>{
    Axios.get('http://localhost:3001/users').then((
      response
    )=>{console.log(response)})

  }

  
  
  return (

    <div className="App">
      <div className="inputDisplay">
        <label>UserName</ label>  
        <input type="text" 
        onChange={(event) =>{
          setName(event.target.value);
        }}/>
        <label>UserEmail</label>  
        <input type="text"
        onChange={(event) =>{
          setEmail(event.target.value);
        }}/>
        <button onClick={addUser} >Add User</button>
        <div className="button">
        <button onClick={getUsers} >show users</button>
        </div>
      </div>
    </div>
  );
}

export default App;
