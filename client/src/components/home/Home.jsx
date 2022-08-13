import {Box,makeStyles} from '@material-ui/core'
//components
import NavBar from "./NavBar";
import Banner from "./Banner";
import Slide from './Slide';
import MidSection from './MidSection';
//import {products} from '../../constants/data';
import { useDispatch, useSelector } from 'react-redux';
 import { useEffect } from 'react';
 import {getProducts as listProducts} from '../../redux/actions/productActions'; 

const useStyle=makeStyles({
    components:{
        padding:10,
        backgroundColor:'#F2F2F2'
    },
    rightwrapper:{
        background:'#FFFFFF',
        padding:5,
        margin:'12px 0px 0px 10px',
    }
})

const Home = () =>{
    const classes=useStyle();
    const adURL='https://rukminim1.flixcart.com/flap/464/708/image/633789f7def60050.jpg?q=70';

    const {products}=useSelector(state=>state.getProducts)

    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(listProducts())
    },[dispatch])

    return(
        <div>
            <NavBar/>
            <Box className={classes.components}>
                <Banner/>
                    <Box style={{display:'flex'}}>
                        <Box style={{width:'83%'}}>
                            <Slide
                                timer={true}
                                title="Deal of the Day"
                                products={products}
                            />
                        </Box>
                        <Box className={classes.rightwrapper}><img src={adURL} style={{width:230}}/></Box>
                        </Box>
                    </Box>
                    <MidSection/>
                    <Slide 
                    timer={false}
                    title="Discounts for You"
                    products={products}/>
                    <Slide 
                    timer={false}
                    title="Suggested Items"
                    products={products}/>
                    <Slide 
                    timer={false}
                    title="Top Selections"
                    products={products}/>
                    <Slide 
                    timer={false}
                    title="Recommended Items"
                    products={products}/>
                    <Slide 
                    timer={false}
                    title="Bestsellers"
                    products={products}/>
        </div>
        
    )
}
export default Home;