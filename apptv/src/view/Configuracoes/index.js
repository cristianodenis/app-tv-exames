import React,{useState} from 'react';
import {View,Text,TouchableOpacity,Image, ImageBackground,SafeAreaView} from 'react-native';
import { useNavigation } from '@react-navigation/native';
//import Slider from '@react-native-community/slider';

export default function Topico2(){
    const navigation = useNavigation();

    const [valor,setValor] = useState(0);

    const v1 = parseFloat(valor);
    
      
    function Padrao(){
        navigation.navigate('Home',{metros:valor})
    }

    function Aumentar(){
     setValor(v1 + 0.5);
    }

    function Diminuir(){
        {
            v1 != 0 &&
            setValor(v1 - 0.5);
        }
    }

    return(
     <SafeAreaView style={{flex:1,backgroundColor:'#c4c4c4'}}>

            <View>
                <TouchableOpacity onPress={()=> navigation.navigate('Home')} style={{margin:10}}>
                   <Image style={{width:30,height:30}} source={require('../../imagens/home.png')}/>
                </TouchableOpacity>
            </View>

            <View style={{justifyContent:'center',alignItems:'center'}}>
                <Text style={{color:'black'}}>0.5 -- 1 -- 1.5 -- 2 -- 2.5 -- 3 -- 3.5 -- 4 -- 4.5 -- 5 -- 5.5 -- 6 -- 6.5...</Text>
               <View style={{width:400,height:10,backgroundColor:'gray'}}></View>

               <View style={{flexDirection:'row'}}>
                    <TouchableOpacity style={{width:50,height:30,borderRadius:10,backgroundColor:'gray',margin:20,justifyContent:'center', alignItems:'center'}}
                        onPress={()=> Aumentar()}>
                        <Text style={{fontSize:23,color:'white'}}>+</Text>
                    </TouchableOpacity>
                
                    <TouchableOpacity style={{width:50,height:30,borderRadius:10,backgroundColor:'gray',margin:20,justifyContent:'center', alignItems:'center'}}
                        onPress={()=> Diminuir()}>
                        <Text style={{fontSize:23,color:'white'}}>-</Text>
                    </TouchableOpacity>
               </View>
           </View>

            <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                <ImageBackground source={require('../../imagens/tv.png')} style={{width:200,height:200,justifyContent:'center',alignItems:'center'}}>
                   <Text style={{color:'black', fontSize:23,marginTop:-105}}>{valor + ' Metros'}</Text>
                </ImageBackground>
            </View>
            
            <View style={{justifyContent:'flex-end',alignItems:'center',margin:15}}>
                <TouchableOpacity onPress={()=> Padrao()} style={{width:300,height:45,backgroundColor:'gray',alignItems:'center',justifyContent:'center',borderRadius:10}}>
                    <Text style={{color:'black'}}>INICIAR COMO PADRÃO</Text>
                </TouchableOpacity>
            </View>        
    </SafeAreaView>  
    );
}