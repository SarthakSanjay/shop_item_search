import { useState } from 'react'
import './App.css'
import { AddItem } from './components/AddItem'
import { PopAlert } from './components/PopAlert'
// import { Input } from './components/ui/input'
import { Context } from './context/context'
import { Search } from './components/Search'

function App() {
  const [alert , setAlert] = useState<boolean>(false)
  return (
    <Context.Provider value={setAlert}>

    <div className='bg-black h-screen w-screen flex justify-center'>
     
      {alert ?  <PopAlert /> :"" }
      {/* <Input type='search' placeholder='search' className='bg-black w-1/2 my-5' /> */}
      
      <div className='w-full flex justify-center border'>
      <Search />
      </div>
      <div className='absolute top-5 right-4'>
        <AddItem />
      </div>
    </div>
    </Context.Provider>
  )
}

export default App
