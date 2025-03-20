import './App.css'
import AddItemForm from './components/AddItemForm'
import NavBar from './components/NavBar'

function App() {

  return (
    <>
      <NavBar />

      <div className='card m-6'>
        <h1 className="text-4xl font-bold font-mono">Password Orc</h1>
        <h3 className='text-2xl'>Store passwords, notes, and files in an encrypted vault</h3>
      </div>

      <AddItemForm />
      
    </>
  )
}

export default App
