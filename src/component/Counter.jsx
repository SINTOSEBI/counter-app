import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, reset } from '../redux/counterSlice'


function Counter() {

  const [range , setRange ] = useState("")
    //hook to dispatch a function in action
    const dispatch = useDispatch()
    //component can access the state by using useSelector Hook
    const count = useSelector((state)=>state.counter.value)

    console.log(range);

  return (
    <>
      <div className='d-flex align-items-center justify-content-center w-100 mt-5 flex-column'>
          <h1 style={{fontSize:'90px',color:'white'}}>{count}</h1>
          <div className='mt-5'>
              <button onClick={()=>dispatch(decrement(Number(range)))} className='btn btn-warning p-3'>Decrement</button>
              <button onClick={()=>dispatch(reset())} className='btn btn-danger p-3 ms-3'>Reset</button>
              <button onClick={()=>dispatch(increment(Number(range)))} className='btn btn-success p-3 ms-3'>Increment</button>
          </div>
      </div>
      <div className='w-25 mt-5'>
        <input type="text" onChange={(e)=>setRange(e.target.value)} className='form-control' placeholder='Enter the range' style={{borderColor:'blue'}} />
      </div>
    </>
    
  )
}

export default Counter