import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center' ,
        backgroundColor:'#c4c4c4',
        flexDirection:'row'
    },
    img:{
        width: 100,
        height:100,
        margin:10,
    },
    btnconfig:{
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#c4c4c4'
    },
   fundo:{
    alignItems:'center', 
    width:150,
    height:120,
    backgroundColor:'gray',
    borderRadius:4,
    marginBottom:25,
   },
   fundo2:{
    alignItems:'center', 
    width:150,
    height:120,
    backgroundColor:'blue',
    borderRadius:4,
    marginBottom:25,
   }
});

export default styles;