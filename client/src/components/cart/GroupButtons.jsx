import {Button,ButtonGroup,makeStyles} from '@material-ui/core';
import { useState } from 'react';

const useStyle=makeStyles({
    component:{
        marginTop:30,
    },
    button:{
        borderRadius:'50%',
    },
})

const GroupButtons=()=>{
    const classes=useStyle();
    const [counter,setCounter]=useState(1);
    const handledecrement=()=>{
        setCounter(counter=>counter-1);
    }
    const handleIncrement=()=>{
        setCounter(counter=>counter+1);
    }
    return(
        <ButtonGroup className={classes.component}>
            <Button onClick={()=>handledecrement()} disabled={counter==1} className={classes.button}>-</Button>
            <Button>{counter}</Button>
            <Button onClick={()=>handleIncrement()} className={classes.button}>+</Button>
        </ButtonGroup>
    )
}

export default GroupButtons;