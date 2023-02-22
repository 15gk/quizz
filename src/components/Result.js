import React from 'react'
import '../styles/Result.css'
import {Link} from 'react-router-dom'
import ResultTable from './ResultTable'

const Result = () => {

  function onRestart(){
    console.log('On restart');
  }
  return (
    <div className='container'>
      <h1 className='title text-light'>Quiz application</h1>
      
      <div className='result flex-center'>
        <div className='flex'>
          <span>Username</span>
          <span className='bold'>LIF</span>
        </div>
        <div className='flex'>
          <span>Total Quiz Points : </span>
          <span className='bold'>50</span>
        </div>

        <div className='flex'>
          <span>Total Quiz Points : </span>
          <span className='bold'>50</span>
        </div>

        <div className='flex'>
          <span>Total Questions: </span>
          <span className='bold'>10</span>
        </div>

        <div className='flex'>
          <span>Total Attempts : </span>
          <span className='bold'>50</span>
        </div>

        <div className='flex'>
          <span> Total Earned Points :</span>
          <span className='bold'>50</span>
        </div>
         

        <div className='flex'>
          <span> Quiz Result : </span>
          <span className='bold'>Passed</span>
        </div>

       </div>
    
    <div className='start'>
      <Link className='btn ' to ='/' onclick={onRestart}>Restart</Link>
    </div>
     <ResultTable/>
    </div>
  )
}

export default Result