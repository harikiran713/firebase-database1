
import './App.css'
import {getDatabase,ref,set} from "firebase/database"
import {app} from "./firebase"
const db =getDatabase(app);
function App() {
  
const putData=()=>
{
  set(ref(db,"users/crush"),{
    name:"mtr",
    age:21,
    place:"hyd"
  })
}
  return (
    
      <div>
       <h1>hello harikiran</h1>
       <button onClick={putData}>put data</button>

      </div>
      
  
  )
}

export default App
