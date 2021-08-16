import { makeStyles } from "@material-ui/core";

const useStyle = makeStyles(()=>({

    root:{
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        height:'100vh',
        background:'#C51162'
    },
    container:{
        background:'#303F9F',
        height:'500px',
        width:'500px',
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
    },
    btn:{
        margin:'10px',
        height:'60px',
        width:'200px'
    },
    link:{
        textDecoration:'none',
        color:'white'
    }

}));
export default useStyle;