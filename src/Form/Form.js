import { useState } from "react";

const Form = (props) => {

    const thatText = props.infoTransfer;
    const [name, changeName] = useState('');
    const [submitN, changedSubmit] = useState('');

    const nameHandler = (event) => {
        console.log(event);
        changeName(event.target.value)
        
    }

    const formClickHandler = (event) => {
        
        event.preventDefault();
        changedSubmit(name);
        props.getName(name);
        
    }

    return(

        <form onSubmit={formClickHandler}>
            <p>{thatText}</p>
            <label>Name: </label>
            <input type='text' onChange = {nameHandler} value={name}></input>
            <button>Enter</button>
            <p>{submitN}</p>
            
        </form>
    );
}
export default Form;