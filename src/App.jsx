
import './App.css'
import Working from './Working';
import Error from './Error';
const name=prompt("Write Your Name?")
function App() {

  const codesn=(name?<Working name={name}/>:<Error/>)
  

  return (
    <>
    {codesn}

     
    </>
  )
}

export default App
