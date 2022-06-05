
import './Todo.css'

import React ,{ useState } from "react"
import {useDispatch,useSelector} from 'react-redux'

import {clickAdd,clickDelete,removeAll} from '../actions/index'


function Todo() {
    const [inputData,setInputData]= useState('');
    const dipatch = useDispatch();
    const list = useSelector((state)=> state.reducer.listData)
  return (
    <div className="container">
      <div className='child'>
          <figure>
              <figcaption>Write Your Task........</figcaption>
          </figure>

          <div className='addItems'>
            <input type='text' placeholder='add text here' 
            value={inputData}
            onChange={(event)=>{   setInputData(event.target.value) }}
            ></input>
            <i className='fa fa-plus' onClick={()=>dipatch(clickAdd(inputData),setInputData(''))}></i>
    
          </div>

          <div className='showItems'>
              {

                  list.map((element)=>{

                    return ( <div className='eachItem' key={element.id}>
                    <h1  >{element.data}</h1>
                    <i className='fa fa-trash-alt' onClick={()=>dipatch(clickDelete(element.id))}></i>
                    </div>)
                      
                  }) 
              }
          
            
          </div>
          <div className='showItems'>
              <button className='btn'
              onClick={()=>dipatch(removeAll())}
              
              >clear</button>
            </div>

        
       
      </div>
    
    </div>
  );
}

export default Todo;
