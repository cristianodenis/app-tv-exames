import React,{useState} from 'react';
import {View,TouchableOpacity,Image,SafeAreaView} from 'react-native';

import { useNavigation } from '@react-navigation/native';
import styles from './styles';

export default function Home(props){
    const navigation = useNavigation();
    
    const metros = props.route.params?.metros != 0 ? props.route.params?.metros : null;
    const [valor,setValor] = useState(metros);
    
    alert(valor)

    return(
        
      <SafeAreaView style={{flex:1,backgroundColor:'#c4c4c4'}}> 

       <View style={{justifyContent:'center',alignItems:'center',marginBottom:20}}>         
          <Image style={{width:370,height:60,marginTop:10}} source={require('../../imagens/logo.jpeg')}/>
       </View>

       <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center'}}>

            <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>

                <TouchableOpacity onPress={() =>  navigation.navigate("Topico1",{metros:metros})}>
                    <View style={styles.fundo}>
                    <Image style={styles.img} source={require('../../imagens/pigassou.png')}/>
                    </View>
                </TouchableOpacity>
                
                <TouchableOpacity onPress={() => navigation.navigate("Topico2",{metros:metros})}>
                <View style={styles.fundo}>
                        <Image style={styles.img} source={require('../../imagens/snellen.png')}/>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigation.navigate("Topico3",{metros:metros})}>
                <View style={styles.fundo}>
                        <Image style={styles.img} source={require('../../imagens/numeros.png')}/>
                    </View>
                </TouchableOpacity>
            </View>


            <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                <TouchableOpacity onPress={() => navigation.navigate("Topico4",{metros:metros})}>
                <View style={styles.fundo}>
                        <Image style={styles.img} source={require('../../imagens/landolt.png')}/>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigation.navigate("Topico5",{metros:metros})}>
                    <View style={styles.fundo}>
                        <Image style={styles.img} source={require('../../imagens/letras_v2.png')}/>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigation.navigate("Topico6",{metros:metros})}>
                    <View style={styles.fundo}>
                        <Image style={styles.img} source={require('../../imagens/figuras.png')}/>
                    </View>
                </TouchableOpacity>
            </View>
              
            <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                <TouchableOpacity onPress={() => navigation.navigate("Topico7",{metros:metros})}>
                    <View style={styles.fundo}>
                        <Image style={styles.img} source={require('../../imagens/rossano.png')}/>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigation.navigate("Topico8")}>
                    <View style={styles.fundo}>
                        <Image style={styles.img} source={require('../../imagens/rossano.png')}/>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigation.navigate("Topico9",{metros:metros})}>
                    <View style={styles.fundo}>
                        <Image style={styles.img} source={require('../../imagens/lea.png')}/>
                    </View>
                </TouchableOpacity>  
            </View>
        </View>   

        <View style={{Width:30,height:1,justifyContent:'flex-end',alignItems:'flex-end',margin:5}}>
            <TouchableOpacity onPress={() => { setValor(), navigation.navigate("Configuracoes")}}>
                < Image style={{width:50,height:50}}
                source={require('../../imagens/configuracoes.png')}/>
            </TouchableOpacity> 
        </View>
    </SafeAreaView>
    );
}