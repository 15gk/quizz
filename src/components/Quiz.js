import React from 'react'
import Questions from './Questions'

const Quiz = () => {
//   prev and next botton handler
    function onNext(){
        console.log('on next click');
    }
    function onPrev(){
        console.log('on prev click');
    }
  return (
    <div className='container'>
        <h1 className='title text-light'>Quiz application</h1>
        {/*jdjjdf*/}
        <Questions/>

        <div className='grid'>
            <button className='btn prev'onClick={onPrev}>Previous</button>
            <button className='btn next' onClick={onNext}>Next</button>
        </div>
    </div>
  )
}

export default Quiz