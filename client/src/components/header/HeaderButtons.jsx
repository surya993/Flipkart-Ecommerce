import { useState,useContext } from 'react';
import {Box, Button, makeStyles, Typography,Badge} from '@material-ui/core';
import { Link } from 'react-router-dom';
import {ShoppingCart} from '@material-ui/icons';

//components
import LoginDialog from '../login/Login';
import {LoginContext} from '../../context/ContextProvider';
import Profile from './Profile';
import CartItem from '../cart/CartItem';
import { useSelector } from 'react-redux';

const useStyle=makeStyles({
    login:{
        backgroundColor:'#FFFFFF',
        color: '#2874f0',
        textTransform:'none',
        fontWeight:600,
        borderRadius:2,
        padding: '5px 40px',
        boxShadow:'none',
    },
    wrapper:{
        margin:'0 7% 0 auto',
        display:'flex',
        '&>*':{
            marginRight: 50,
            alignItems:'center',
            textDecoration:'none',
            color:'#fff',
        }
    },
    Container:{
        display:'flex',
    },
    container1:{
        display:'flex'
    }
})

const HeaderButtons = () =>{
    const classes = useStyle();
    const [open,setOpen]=useState(false);
    const {account,setAccount}=useContext(LoginContext)

    const {cartItems}=useSelector(state=>state.cart);

    const openLoginDialog=()=>{
        setOpen(true);
    }
    return (
        <Box className={classes.Container} className={classes.wrapper}>
            {
                account? <Profile account={account} setAccount={setAccount}/>:
                <Link>
                    <Button variant="contained" onClick={()=>openLoginDialog()} className={classes.login}>Login</Button>
                </Link>
            }
                <Link><Typography style={{marginTop:5}}>More</Typography></Link>
            <Link to='/cart' className={classes.container1}>
                <Badge badgeContent={cartItems.length} color="secondary"> <ShoppingCart/> </Badge>
                <Typography style={{marginLeft:10}}>
                    Cart
                </Typography>
            </Link>
            <LoginDialog open={open} setOpen={setOpen} setAccount={setAccount}/>
        </Box>
    )
}
export default HeaderButtons;