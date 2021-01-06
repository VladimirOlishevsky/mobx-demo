import React, { FormEvent, useState, useRef } from 'react';
import storeInstance from '../../store/Store'
import { observer } from "mobx-react";
import { Button, InputBase } from "@material-ui/core";
import { useStyles } from './rawStyles';

export const Form = observer(() => {

const [inputValue, setInputValue] = useState('')
    const styles = useStyles();
    const handleSubmit = (event: FormEvent<HTMLFormElement>, store: any) => {
        event.preventDefault();
        store.postComment(inputValue);
        setInputValue('');
    }

    const handleChange = (value: string) => {
        setInputValue(value)
    }
    return (
        <form
            className={styles.form}
            onSubmit={(e) => handleSubmit(e, storeInstance)}>
            <InputBase
                value={inputValue}
                onChange={(e) => handleChange(e.currentTarget.value)}
                className={styles.input}
                 />
            <Button type="submit">add comment</Button>
        </form>
    )
})
