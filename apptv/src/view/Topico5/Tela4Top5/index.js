import React,{useState,useEffect} from 'react';
import {View,Text,TouchableOpacity,SafeAreaView,Image} from 'react-native';

import { useNavigation } from '@react-navigation/native';

import styles from './style';

export default function Tela4(props){
    const navigation = useNavigation();
    
    const [valoropt,setValorPt] = useState(props.route.params?.metros);

    const [uri0,setUri0] = useState();
    const [uri1,setUri1] = useState();
    const [uri2,setUri2] = useState();
    const [uri3,setUri3] = useState();
    const [uri4,setUri4] = useState();
    const [uri5,setUri5] = useState();
    const [uri6,setUri6] = useState();
    const [uri7,setUri7] = useState();

    const valor2020 = ((20 * valoropt) / (valoropt * 3.28)* (0.00029 * 5) * 1000).toFixed(2);

    const [largura,setLargura] = useState(valoropt != null ? valor2020 * 3.7 : 50);
    const [altura,setAltura] = useState(valoropt != null ? valor2020 * 3.7 : 50);
    const [optotipos,setOptotipos] = useState('20/20');

    const array = [
      require('../../../imagens/Letra-C/9.png'),
      require('../../../imagens/Letra-C/10.png'),
      require('../../../imagens/Letra-C/11.png'),
      require('../../../imagens/Letra-C/12.png'),
      require('../../../imagens/Letra-C/13.png'),
      require('../../../imagens/Letra-C/14.png'),
      require('../../../imagens/Letra-C/15.png'),
      require('../../../imagens/Letra-C/16.png')
   ]
    
      function ImgAleatorias(o) {
        for(var j, x, i = o.length; i; j = parseInt(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
          return setUri0(o[0]),setUri1(o[1]),setUri2(o[2]),setUri3(o[3]),setUri4(o[4]),
          setUri5(o[5]),setUri6(o[6]),setUri7(o[7])
      };
    
     function Aumentar(){
      
     if(optotipos == '20/20'){
        const valor2025 = ((25 * valoropt) / (valoropt * 3.28)* (0.00029 * 5) * 1000).toFixed(2);
        setLargura(valoropt != null ? valor2025 * 3.7 : 50);
        setAltura(valoropt != null ? valor2025 * 3.7 : 50);
        setOptotipos('20/25');
      }
      else if(optotipos == '20/25'){
        const valor2030 = ((30 * valoropt) / (valoropt * 3.28)* (0.00029 * 5) * 1000).toFixed(2);
        setLargura(valoropt != null ? valor2030 * 3.7 : 50);
        setAltura(valoropt != null ? valor2030 * 3.7 : 50);
        setOptotipos('20/30');
      }
      else if(optotipos == '20/30'){
        const valor2040 = ((40 * valoropt) / (valoropt * 3.28)* (0.00029 * 5) * 1000).toFixed(2);
        setLargura(valoropt != null ? valor2040 * 3.7 : 50);
        setAltura(valoropt != null ? valor2040 * 3.7 : 50);
        setOptotipos('20/40');
      }
      else if(optotipos == '20/40'){
        const valor2050 = ((50 * valoropt) / (valoropt * 3.28)* (0.00029 * 5) * 1000).toFixed(2);
        setLargura(valoropt != null ? valor2050 * 3.7 : 50);
        setAltura(valoropt != null ? valor2050 * 3.7 : 50);
        setOptotipos('20/50');
      }
      else if(optotipos == '20/50'){
        const valor2060 = ((60 * valoropt) / (valoropt * 3.28)* (0.00029 * 5) * 1000).toFixed(2);
        setLargura(valoropt != null ? valor2060 * 3.7 : 50);
        setAltura(valoropt != null ? valor2060 * 3.7 : 50);
        setOptotipos('20/60');
      }
      else if(optotipos == '20/60'){
        const valor2080 = ((80 * valoropt) / (valoropt * 3.28)* (0.00029 * 5) * 1000).toFixed(2);
        setLargura(valoropt != null ? valor2080 * 3.7 : 50);
        setAltura(valoropt != null ? valor2080 * 3.7 : 50);
        setOptotipos('20/80');
      }
      else if(optotipos == '20/80'){
        const valor20100 = ((100 * valoropt) / (valoropt * 3.28)* (0.00029 * 5) * 1000).toFixed(2);
        setLargura(valoropt != null ? valor20100 * 3.7 : 50);
        setAltura(valoropt != null ? valor20100 * 3.7 : 50);
        setOptotipos('20/100');
      }
      else if(optotipos == '20/100'){
        const valor20150 = ((150 * valoropt) / (valoropt * 3.28)* (0.00029 * 5) * 1000).toFixed(2);
        setLargura(valoropt != null ? valor20150 * 3.7 : 50);
        setAltura(valoropt != null ? valor20150 * 3.7 : 50);
        setOptotipos('20/150');
      }
      else if(optotipos == '20/150'){
        const valor20200 = ((200 * valoropt) / (valoropt * 3.28)* (0.00029 * 5) * 1000).toFixed(2);
        setLargura(valoropt != null ? valor20200 * 3.7 : 50);
        setAltura(valoropt != null ? valor20200 * 3.7 : 50);
        setOptotipos('20/200');
      }
      else if(optotipos == '20/200'){
        const valor20400 = ((400 * valoropt) / (valoropt * 3.28)* (0.00029 * 5) * 1000).toFixed(2);
        setLargura(valoropt != null ? valor20400 * 3.7 : 50);
        setAltura(valoropt != null ? valor20400 * 3.7 : 50);
        setOptotipos('20/400');
      }
      else if(optotipos == '20/400'){
        const valor20800 = ((800 * valoropt) / (valoropt * 3.28)* (0.00029 * 5) * 1000).toFixed(2);
        setLargura(valoropt != null ? valor20800 * 3.7 : 50);
        setAltura(valoropt != null ? valor20800 * 3.7 : 50);
        setOptotipos('20/800');
      }
      
    }

     function Diminuir(){
      
     if(optotipos == '20/25'){
      const valor2020 = ((20 * valoropt) / (valoropt * 3.28)* (0.00029 * 5) * 1000).toFixed(2);
      setLargura(valoropt != null ? valor2020 * 3.7 : 50);
      setAltura(valoropt != null ? valor2020 * 3.7 : 50);
      setOptotipos('20/20');
    }
    else if(optotipos == '20/30'){
      const valor2025 = ((25 * valoropt) / (valoropt * 3.28)* (0.00029 * 5) * 1000).toFixed(2);
      setLargura(valoropt != null ? valor2025 * 3.7 : 50);
      setAltura(valoropt != null ? valor2025 * 3.7 : 50);
      setOptotipos('20/25');
    }
    else if(optotipos == '20/40'){
      const valor2030 = ((30 * valoropt) / (valoropt * 3.28)* (0.00029 * 5) * 1000).toFixed(2);
      setLargura(valoropt != null ? valor2030 * 3.7 : 50);
      setAltura(valoropt != null ? valor2030 * 3.7 : 50);
      setOptotipos('20/30');
    }
    else if(optotipos == '20/50'){
      const valor2040 = ((40 * valoropt) / (valoropt * 3.28)* (0.00029 * 5) * 1000).toFixed(2);
      setLargura(valoropt != null ? valor2040 * 3.7 : 50);
      setAltura(valoropt != null ? valor2040 * 3.7 : 50);
      setOptotipos('20/40');
    }
    else if(optotipos == '20/60'){
      const valor2050 = ((50 * valoropt) / (valoropt * 3.28)* (0.00029 * 5) * 1000).toFixed(2);
      setLargura(valoropt != null ? valor2050 * 3.7 : 50);
      setAltura(valoropt != null ? valor2050 * 3.7 : 50);
      setOptotipos('20/50');
    }
    else if(optotipos == '20/80'){
      const valor2060 = ((60 * valoropt) / (valoropt * 3.28)* (0.00029 * 5) * 1000).toFixed(2);
      setLargura(valoropt != null ? valor2060 * 3.7 : 50);
      setAltura(valoropt != null ? valor2060 * 3.7 : 50);
      setOptotipos('20/60');
    }
    else if(optotipos == '20/100'){
      const valor2080 = ((80 * valoropt) / (valoropt * 3.28)* (0.00029 * 5) * 1000).toFixed(2);
      setLargura(valoropt != null ? valor2080 * 3.7 : 50);
      setAltura(valoropt != null ? valor2080 * 3.7 : 50);
      setOptotipos('20/80');
    }
    else if(optotipos == '20/150'){
      const valor20100 = ((100 * valoropt) / (valoropt * 3.28)* (0.00029 * 5) * 1000).toFixed(2);
      setLargura(valoropt != null ? valor20100 * 3.7 : 50);
      setAltura(valoropt != null ? valor20100 * 3.7 : 50);
      setOptotipos('20/100');
    }
    else if(optotipos == '20/200'){
      const valor20150 = ((150 * valoropt) / (valoropt * 3.28)* (0.00029 * 5) * 1000).toFixed(2);
      setLargura(valoropt != null ? valor20150 * 3.7 : 50);
      setAltura(valoropt != null ? valor20150 * 3.7 : 50);
      setOptotipos('20/150');
    }
    else if(optotipos == '20/400'){
      const valor20200 = ((200 * valoropt) / (valoropt * 3.28)* (0.00029 * 5) * 1000).toFixed(2);
      setLargura(valoropt != null ? valor20200 * 3.7 : 50);
      setAltura(valoropt != null ? valor20200 * 3.7 : 50);
      setOptotipos('20/200');
    }
    else if(optotipos == '20/800'){
      const valor20400 = ((400 * valoropt) / (valoropt * 3.28)* (0.00029 * 5) * 1000).toFixed(2);
      setLargura(valoropt != null ? valor20400 * 3.7 : 50);
      setAltura(valoropt != null ? valor20400 * 3.7 : 50);
      setOptotipos('20/400');
    }

    }
    
    function Avancar(){
      navigation.navigate('Tela5Top5',{metros:valoropt}); 
    }
    function Voltar(){
      navigation.navigate('Tela3Top5',{metros:valoropt}); 
    }
    
    useEffect(()=>{ 
      ImgAleatorias(array);
    },[]);

    return(
          
      <SafeAreaView style={{flex:1,backgroundColor:'black'}}>   

          <View style={{flex:1,flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
          <Image style={{width:largura,height:altura}} source={`${uri0}`}/>
          <Image style={{width:largura,height:altura}} source={`${uri1}`}/>
            <View style={{flexDirection:'column'}}>
                <Image style={{width:largura,height:altura}} source={`${uri2}`}/>
                  <View style={{width:largura,height:5,backgroundColor:'white'}}></View>
              </View>
              <Image style={{width:largura,height:altura}} source={`${uri3}`}/>
              <Image style={{width:largura,height:altura}} source={`${uri4}`}/>
              <Image style={{width:largura,height:altura}} source={`${uri5}`}/>
              <Image style={{width:largura,height:altura}} source={`${uri6}`}/>
              <Image style={{width:largura,height:altura}} source={`${uri7}`}/>  
          </View> 

        <View style={{Width:30,height:1,justifyContent:'flex-end',alignItems:'flex-end',margin:15,marginBottom:-30}}>
            
            <TouchableOpacity onPress={()=> navigation.navigate('Home')} >
              <Image style={{width:30,height:30,marginBottom:15}} source={require('../../../imagens/home.png')}/>
            </TouchableOpacity>
          
            <TouchableOpacity onPress={()=> Aumentar()}> 
              <Image style={{width:30,height:30,marginBottom:15}} source={require('../../../imagens/adicionar.png')}/>
            </TouchableOpacity>  

            <TouchableOpacity onPress={()=> Diminuir()}> 
              <Image style={{width:30,height:30,marginBottom:15}} source={require('../../../imagens/excluir.png')}/>
            </TouchableOpacity>  
          
            <TouchableOpacity onPress={()=> Avancar()}> 
              <Image style={{width:30,height:30,marginBottom:15}} source={require('../../../imagens/seta-direita.png')}/>
            </TouchableOpacity>  

            <TouchableOpacity onPress={()=> Voltar()}> 
              <Image style={{width:30,height:30,marginBottom:15}} source={require('../../../imagens/seta-esquerda.png')}/>
            </TouchableOpacity>    
            
        </View>

        <View style={{justifyContent:'center',alignItems:'center'}}>
            <Text style={{fontSize:23,color:'white',marginBottom:5}}>{optotipos}</Text>
        </View>
    
  </SafeAreaView>
       
    );
}


