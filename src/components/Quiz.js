import React, { useEffect } from 'react'
import Questions from './Questions';
import {useSelector} from 'react-redux'

export default  function Quiz  () {

    const {questions} = useSelector(state => state);

    useEffect (()=>{
        console.log (questions.queue);
    })
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

