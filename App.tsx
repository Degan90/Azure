/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  Image,
  SafeAreaView,

  Text,

  View,
} from 'react-native';




function App(): JSX.Element {



  return (
    <SafeAreaView>

     <View  >
     <Text style={{fontSize:30}} >
      My Favoriet pictures 
     </Text>
     <Image style={{height:300}} source={{uri:'https://pourya.blob.core.windows.net/pouryapic/IMG_2591.JPEG'}} />
     </View>
    </SafeAreaView>
  );
}


export default App;
