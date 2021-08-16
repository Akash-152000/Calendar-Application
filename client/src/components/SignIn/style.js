import { makeStyles } from "@material-ui/core";

const useStyle = makeStyles((theme)=>({
    root: {
        background:'#C51162',
        height:'100vh',
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        '& .MuiTextField-root': {
          margin: theme.spacing(1),
          width: '25ch',
        },
    },
    container:{
        height:'500px',
        width:'500px',
        background:'#303F9F',
    },
    fields:{
        marginLeft:'20px',
        marginTop:'80px'
    },
    user:{
        display:'flex',
        justifyContent:'start',
        alignItems:'center'
    },
    email:{
        display:'flex',
        justifyContent:'start',
        alignItems:'center'
    },
    password:{
        display:'flex',
        justifyContent:'start',
        alignItems:'center'
    },
    btn:{
        display:'flex',
        justifyContent:'center',
        marginTop:'40px'
    },
    link:{
        textDecoration:'none',
        color:'white'
    }
}));
export default useStyle;