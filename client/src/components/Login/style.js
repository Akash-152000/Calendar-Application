import { makeStyles } from "@material-ui/styles";

const useStyle = makeStyles(()=>({
    root:{
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        background:'#C51162',
        height:'100vh'
    },
    container:{
        height:'500px',
        width:'500px',
        background:'#303F9F'
    },
    fields:{

        marginTop:'80px'
    },
    email:{
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        marginBottom:'20px'
    },
    password:{
        display:'flex',
        justifyContent:'center',
        alignItems:'center'
    },
    btn:{
        display:'flex',
        justifyContent:'center',
        marginTop:'40px',
    },
    link:{
        textDecoration:'none',
        color:'white'
    }
}));
export default useStyle;