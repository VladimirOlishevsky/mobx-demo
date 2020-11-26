import React, { useRef } from 'react';
import storeInstance from '../store/Store'
import { observer } from "mobx-react";

export const Form = observer(() => {

    let textInput = useRef();

    const handleSubmit = (e, store) => {
        e.preventDefault();
        store.postComment(textInput.value);
        textInput.value = "";
    }
    
    return (
        <form onSubmit={(e) => handleSubmit(e, storeInstance)}>
            
            <div>
                <input type="text" id={'comment'} className="form-control" placeholder={"Write a comment ..."} 
                ref={value => {
                    textInput = value
                }} 
                />
            </div>
        </form>
    )
})
