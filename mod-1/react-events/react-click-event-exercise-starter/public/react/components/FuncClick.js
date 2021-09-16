//dependencies
import React, {useState} from 'react';


//function
const FuncClick = (props)=>{
    //hooks
    const [message, setMessage] = useState('click the button below vv')
    const [newMessage, setNewMessage] = useState('')
    const [count, setCount] = useState(0)

    function handleClick(){
        setMessage(newMessage)
        setCount(count + 1)
    }
    function resetCounter(){
        setCount(0)
    }
    
    return(
        <div className='item'>
            <p>{message}</p> <br />
            <p>{newMessage}</p><br />
            <p>Button Click Count =  {count} times</p>
            <input type="text" onChange = {(event)=> setNewMessage(event.target.value)}/> 
            <button onClick = {handleClick}>clickme!</button>
            <button onClick = {resetCounter}>reset counter</button>
        </div>

    )
}
module.exports = FuncClick;