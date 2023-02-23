import { useEffect } from "react"
import { useDispatch } from "react-redux";
import data from "../data/data.js";


import * as Action from '../redux/question_reducer';
export const useFetchQuestion = ()=>{
    const dispatch =useDispatch();
    const [getData,setGetData ]=useState({isLoading:false,apiData :[],ServerError:null
    
    })
    useEffect(()=>{
      setGetData(prev=>({...prev,isLoading:true}));
      
    (async()=>{
      try {
        let question =await data;
        if(question.length>0){
            setGetData(prev => ({...prev,isLoading:false}));
            setGetData(prev=>({...prev,apiData:question}));
            dispatch(Action.startExamAction(question))
        } else {
            throw new Error ("No Question available")
        }
      } catch (error) {
        setGetData(prev=>({...prev,isLoading:false}));
        setGetData(prev=>({...prev,ServerError:error}));
      }  
    })
    },[dispatch]);

    return [getData,setGetData];
}