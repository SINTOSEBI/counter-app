import React from 'react'
import Counter from './component/Counter'

function App() {
  return (
    <div className='d-flex align items-center justify-content-center w-100 flex-column' style={{height:'100vh',backgroundColor:'black'}}>

      <div className='d-flex align-items-center justify-content-center flex-column p-5 rounded border '>
        <h1 className='text-primary'>Counter App</h1>
        <Counter/>
        </div>
      </div>
  )
}

export default App