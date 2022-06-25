import React from 'react';

console.disableYellowBox=true;

import Home from './src/view/Home';
import Topico1 from './src/view/Topico1';
import Topico2 from './src/view/Topico2';
import Topico3 from './src/view/Topico3';
import Topico4 from './src/view/Topico4';
import Topico5 from './src/view/Topico5';
import Topico6 from './src/view/Topico6';
import Topico7 from './src/view/Topico7';
import Topico8 from './src/view/Topico8';
import Topico9 from './src/view/Topico9';
import configuracoes from './src/view/Configuracoes';

import ParaTestes from './src/view/ParaTestes';

// telas do topico1
import Tela2Top1 from './src/view/Topico1/Tela2Top1';
import Tela3Top1 from './src/view/Topico1/Tela3Top1';
import Tela4Top1 from './src/view/Topico1/Tela4Top1';
import Tela5Top1 from './src/view/Topico1/Tela5Top1';
import Tela6Top1 from './src/view/Topico1/Tela6Top1';
import Tela7Top1 from './src/view/Topico1/Tela7Top1';
import Tela8Top1 from './src/view/Topico1/Tela8Top1';
import Tela9Top1 from './src/view/Topico1/Tela9Top1';
import Tela10Top1 from './src/view/Topico1/Tela10Top1';

// telas do topico2
import Tela2Top2 from './src/view/Topico2/Tela2Top2';
import Tela3Top2 from './src/view/Topico2/Tela3Top2';
import Tela4Top2 from './src/view/Topico2/Tela4Top2';
import Tela5Top2 from './src/view/Topico2/Tela5Top2';
import Tela6Top2 from './src/view/Topico2/Tela6Top2';
import Tela7Top2 from './src/view/Topico2/Tela7Top2';

// telas do topico3
import Tela2Top3 from './src/view/Topico3/Tela2Top3';
import Tela3Top3 from './src/view/Topico3/Tela3Top3';
import Tela4Top3 from './src/view/Topico3/Tela4Top3';
import Tela5Top3 from './src/view/Topico3/Tela5Top3';
import Tela6Top3 from './src/view/Topico3/Tela6Top3';
import Tela7Top3 from './src/view/Topico3/Tela7Top3';
import Tela8Top3 from './src/view/Topico3/Tela8Top3';

// telas do topico4
import Tela2Top4 from './src/view/Topico4/Tela2Top4';
import Tela3Top4 from './src/view/Topico4/Tela3Top4';
import Tela4Top4 from './src/view/Topico4/Tela4Top4';
import Tela5Top4 from './src/view/Topico4/Tela5Top4';
import Tela6Top4 from './src/view/Topico4/Tela6Top4';
import Tela7Top4 from './src/view/Topico4/Tela7Top4';
import Tela8Top4 from './src/view/Topico4/Tela8Top4';
import Tela9Top4 from './src/view/Topico4/Tela9Top4';
import Tela10Top4 from './src/view/Topico4/Tela10Top4';
import Tela11Top4 from './src/view/Topico4/Tela11Top4';

// telas do topico5
import Tela2Top5 from './src/view/Topico5/Tela2Top5';
import Tela3Top5 from './src/view/Topico5/Tela3Top5';
import Tela4Top5 from './src/view/Topico5/Tela4Top5';
import Tela5Top5 from './src/view/Topico5/Tela5Top5';
import Tela6Top5 from './src/view/Topico5/Tela6Top5';
import Tela7Top5 from './src/view/Topico5/Tela7Top5';
import Tela8Top5 from './src/view/Topico5/Tela8Top5';
import Tela9Top5 from './src/view/Topico5/Tela9Top5';

// telas do topico6
import Tela2Top6 from './src/view/Topico6/Tela2Top6';
import Tela3Top6 from './src/view/Topico6/Tela3Top6';
import Tela4Top6 from './src/view/Topico6/Tela4Top6';
import Tela5Top6 from './src/view/Topico6/Tela5Top6';
import Tela6Top6 from './src/view/Topico6/Tela6Top6';
import Tela7Top6 from './src/view/Topico6/Tela7Top6';
import Tela8Top6 from './src/view/Topico6/Tela8Top6';
import Tela9Top6 from './src/view/Topico6/Tela9Top6';

// telas do topico7
import Tela2Top7 from './src/view/Topico7/Tela2Top7';
import Tela3Top7 from './src/view/Topico7/Tela3Top7';
import Tela4Top7 from './src/view/Topico7/Tela4Top7';
import Tela5Top7 from './src/view/Topico7/Tela5Top7';
import Tela6Top7 from './src/view/Topico7/Tela6Top7';
import Tela7Top7 from './src/view/Topico7/Tela7Top7';
import Tela8Top7 from './src/view/Topico7/Tela8Top7';
import Tela9Top7 from './src/view/Topico7/Tela9Top7';
import Tela10Top7 from './src/view/Topico7/Tela10Top7';

// telas do topico9
import Tela2Top9 from './src/view/Topico9/Tela2Top9';
import Tela3Top9 from './src/view/Topico9/Tela3Top9';
import Tela4Top9 from './src/view/Topico9/Tela4Top9';
import Tela5Top9 from './src/view/Topico9/Tela5Top9';
import Tela6Top9 from './src/view/Topico9/Tela6Top9';
import Tela7Top9 from './src/view/Topico9/Tela7Top9';


import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name= 'Home' component={Home}
        options={{headerShown: false}}/>
        <Stack.Screen name= 'Topico1' component={Topico1}
        options={{headerShown: false}}/>
        <Stack.Screen name= 'Topico2' component={Topico2} 
        options={{headerShown: false}}/>
        <Stack.Screen name= 'Topico3' component={Topico3} 
        options={{headerShown: false}}/>
        <Stack.Screen name= 'Topico4' component={Topico4} 
        options={{headerShown: false}}/>
        <Stack.Screen name= 'Topico5' component={Topico5} 
        options={{headerShown: false}}/>
        <Stack.Screen name= 'Topico6' component={Topico6} 
        options={{headerShown: false}}/>
        <Stack.Screen name= 'Topico7' component={Topico7} 
        options={{headerShown: false}}/>
        <Stack.Screen name= 'Topico8' component={Topico8} 
        options={{headerShown: false}}/>
        <Stack.Screen name= 'Topico9' component={Topico9} 
        options={{headerShown: false}}/>
        <Stack.Screen name= 'Configuracoes' component={configuracoes} 
        options={{headerShown: false}}/>

       <Stack.Screen name= 'Tela2Top1' component={Tela2Top1} 
        options={{headerShown: false}}/>
        <Stack.Screen name= 'Tela3Top1' component={Tela3Top1} 
        options={{headerShown: false}}/>
        <Stack.Screen name= 'Tela4Top1' component={Tela4Top1} 
        options={{headerShown: false}}/>
        <Stack.Screen name= 'Tela5Top1' component={Tela5Top1} 
        options={{headerShown: false}}/>
        <Stack.Screen name= 'Tela6Top1' component={Tela6Top1} 
        options={{headerShown: false}}/>
        <Stack.Screen name= 'Tela7Top1' component={Tela7Top1} 
        options={{headerShown: false}}/>
        <Stack.Screen name= 'Tela8Top1' component={Tela8Top1} 
        options={{headerShown: false}}/>
        <Stack.Screen name= 'Tela9Top1' component={Tela9Top1} 
        options={{headerShown: false}}/>
        <Stack.Screen name= 'Tela10Top1' component={Tela10Top1} 
        options={{headerShown: false}}/>

        <Stack.Screen name= 'Tela2Top2' component={Tela2Top2} 
        options={{headerShown: false}}/>
        <Stack.Screen name= 'Tela3Top2' component={Tela3Top2} 
        options={{headerShown: false}}/>
        <Stack.Screen name= 'Tela4Top2' component={Tela4Top2} 
        options={{headerShown: false}}/>
        <Stack.Screen name= 'Tela5Top2' component={Tela5Top2} 
        options={{headerShown: false}}/>
        <Stack.Screen name= 'Tela6Top2' component={Tela6Top2} 
        options={{headerShown: false}}/>
        <Stack.Screen name= 'Tela7Top2' component={Tela7Top2} 
        options={{headerShown: false}}/>

        <Stack.Screen name= 'Tela2Top3' component={Tela2Top3} 
        options={{headerShown: false}}/>
        <Stack.Screen name= 'Tela3Top3' component={Tela3Top3} 
        options={{headerShown: false}}/>
        <Stack.Screen name= 'Tela4Top3' component={Tela4Top3} 
        options={{headerShown: false}}/>
        <Stack.Screen name= 'Tela5Top3' component={Tela5Top3} 
        options={{headerShown: false}}/>
        <Stack.Screen name= 'Tela6Top3' component={Tela6Top3} 
        options={{headerShown: false}}/>
        <Stack.Screen name= 'Tela7Top3' component={Tela7Top3} 
        options={{headerShown: false}}/>
        <Stack.Screen name= 'Tela8Top3' component={Tela8Top3} 
        options={{headerShown: false}}/>

        <Stack.Screen name= 'Tela2Top4' component={Tela2Top4} 
        options={{headerShown: false}}/>
        <Stack.Screen name= 'Tela3Top4' component={Tela3Top4} 
        options={{headerShown: false}}/>
        <Stack.Screen name= 'Tela4Top4' component={Tela4Top4} 
        options={{headerShown: false}}/>
        <Stack.Screen name= 'Tela5Top4' component={Tela5Top4} 
        options={{headerShown: false}}/>
        <Stack.Screen name= 'Tela6Top4' component={Tela6Top4} 
        options={{headerShown: false}}/>
        <Stack.Screen name= 'Tela7Top4' component={Tela7Top4} 
        options={{headerShown: false}}/>
        <Stack.Screen name= 'Tela8Top4' component={Tela8Top4} 
        options={{headerShown: false}}/>
        <Stack.Screen name= 'Tela9Top4' component={Tela9Top4} 
        options={{headerShown: false}}/>
        <Stack.Screen name= 'Tela10Top4' component={Tela10Top4} 
        options={{headerShown: false}}/>
        <Stack.Screen name= 'Tela11Top4' component={Tela11Top4} 
        options={{headerShown: false}}/>

        <Stack.Screen name= 'Tela2Top5' component={Tela2Top5} 
        options={{headerShown: false}}/>
        <Stack.Screen name= 'Tela3Top5' component={Tela3Top5} 
        options={{headerShown: false}}/>
        <Stack.Screen name= 'Tela4Top5' component={Tela4Top5} 
        options={{headerShown: false}}/>
        <Stack.Screen name= 'Tela5Top5' component={Tela5Top5} 
        options={{headerShown: false}}/>
        <Stack.Screen name= 'Tela6Top5' component={Tela6Top5} 
        options={{headerShown: false}}/>
        <Stack.Screen name= 'Tela7Top5' component={Tela7Top5} 
        options={{headerShown: false}}/>
        <Stack.Screen name= 'Tela8Top5' component={Tela8Top5} 
        options={{headerShown: false}}/>
        <Stack.Screen name= 'Tela9Top5' component={Tela9Top5} 
        options={{headerShown: false}}/>

        <Stack.Screen name= 'Tela2Top6' component={Tela2Top6} 
        options={{headerShown: false}}/>
        <Stack.Screen name= 'Tela3Top6' component={Tela3Top6} 
        options={{headerShown: false}}/>
        <Stack.Screen name= 'Tela4Top6' component={Tela4Top6} 
        options={{headerShown: false}}/>
        <Stack.Screen name= 'Tela5Top6' component={Tela5Top6} 
        options={{headerShown: false}}/>
        <Stack.Screen name= 'Tela6Top6' component={Tela6Top6} 
        options={{headerShown: false}}/>
        <Stack.Screen name= 'Tela7Top6' component={Tela7Top6} 
        options={{headerShown: false}}/>
        <Stack.Screen name= 'Tela8Top6' component={Tela8Top6} 
        options={{headerShown: false}}/>
        <Stack.Screen name= 'Tela9Top6' component={Tela9Top6} 
        options={{headerShown: false}}/>

        <Stack.Screen name= 'Tela2Top7' component={Tela2Top7} 
        options={{headerShown: false}}/>
        <Stack.Screen name= 'Tela3Top7' component={Tela3Top7} 
        options={{headerShown: false}}/>
        <Stack.Screen name= 'Tela4Top7' component={Tela4Top7} 
        options={{headerShown: false}}/>
        <Stack.Screen name= 'Tela5Top7' component={Tela5Top7} 
        options={{headerShown: false}}/>
        <Stack.Screen name= 'Tela6Top7' component={Tela6Top7} 
        options={{headerShown: false}}/>
        <Stack.Screen name= 'Tela7Top7' component={Tela7Top7} 
        options={{headerShown: false}}/>
        <Stack.Screen name= 'Tela8Top7' component={Tela8Top7} 
        options={{headerShown: false}}/>
        <Stack.Screen name= 'Tela9Top7' component={Tela9Top7} 
        options={{headerShown: false}}/>
        <Stack.Screen name= 'Tela10Top7' component={Tela10Top7} 
        options={{headerShown: false}}/>

        <Stack.Screen name= 'Tela2Top9' component={Tela2Top9} 
        options={{headerShown: false}}/>
        <Stack.Screen name= 'Tela3Top9' component={Tela3Top9} 
        options={{headerShown: false}}/>
        <Stack.Screen name= 'Tela4Top9' component={Tela4Top9} 
        options={{headerShown: false}}/>
        <Stack.Screen name= 'Tela5Top9' component={Tela5Top9} 
        options={{headerShown: false}}/>
        <Stack.Screen name= 'Tela6Top9' component={Tela6Top9} 
        options={{headerShown: false}}/>
        <Stack.Screen name= 'Tela7Top9' component={Tela7Top9} 
        options={{headerShown: false}}/>

        <Stack.Screen name= 'ParaTestes' component={ParaTestes} 
        options={{headerShown: false}}/>

      </Stack.Navigator>
    </NavigationContainer>
  );
}