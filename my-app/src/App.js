
import React from 'react';
import './App.css';
function App() {
  const [state,setstate]=React.useState({
    num1:2,
    num2:4,
    response:"",
    score:0,
    incorrect:false
  })
  function updateKeyPress(event){
    if(event.key==='Enter')
    {
      const answer=parseInt(state.response)
      if(state.num1+state.num2===answer){
        //answer is correct
        setstate({
          ...state,
          num1:Math.ceil(Math.random() * 10),
          num2:Math.ceil(Math.random() * 10),
          score:state.score + 1,
          response:"",
          incorrect:false
        })
      }
      else
      {
       //answer is incoorect
       setstate({
        ...state,
        score:state.score - 1,
        response:"",
        incorrect:true
       })
      }
    }
  }
  function updateResponse(event){
    setstate({
    ...state,
    response:event.target.value
    })
  }
  if (state.score===10)
  {
    return(
      <div id="win">You Win!</div>
    )
  }

 return (
  <div className='app'>
    <div className={state.incorrect ?'incorrect' : ""} id='problem'>{state.num1} + {state.num2}</div>
    <input autoFocus={true} onKeyDown={updateKeyPress} onChange={updateResponse} value={state.response}/>
    <div>Score:{state.score}</div>
  </div>
 )
}

export default App;
