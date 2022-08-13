import {
    createStyles,
    alpha,
    Theme,
    makeStyles,
  } from '@material-ui/core/styles';
  import SearchIcon from '@material-ui/icons/Search';
  import InputBase from '@material-ui/core/InputBase';
  
  const useStyle=makeStyles((theme:Theme)=>
  createStyles({
    search:{
      borderRadius:2,
      marginLeft:10,
      width:'38%',
      backgroundColor:'#fff',
      display:'flex'
    },
    searchIcon:{
      marginLeft:'auto',
      padding:5,
      display:'flex',
      color:'blue'
    },
    inputRoot:{
      fontSize:'unset',
      width:'100%',
    },
    inputInput:{
      paddingLeft:10,
      width:'100%',
    },
  })
  );
  
  export default function Search(){
    const classes=useStyle();
    return <div className={classes.search}>Search
    <InputBase placeholder="Search for products, brands and more" classes={{
      root:classes.inputRoot,
      input:classes.inputInput,
    }}
    inputProps={{'aria-label':'search'}}
    />
    <div className={classes.searchIcon}><SearchIcon/></div>
    </div>;
  }
