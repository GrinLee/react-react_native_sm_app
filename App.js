// import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { useState, useEffect, useCallback } from 'react';		
import * as SplashScreen from 'expo-splash-screen';
import * as Font from 'expo-font';


SplashScreen.preventAutoHideAsync();

export default function App() {

  const [loaded, setLoaded] = useState(false);

  useEffect(()=>{
    const prepare = async()=>{
      try{
        await Font.loadAsync({
          "black": require("./assets/fonts//Roboto-Black.ttf"),
          "blackItalic": require("./assets/fonts/Roboto-BlackItalic.ttf"),
          "bold": require("./assets/fonts/Roboto-Bold.ttf"),
          "boldItalic": require("./assets/fonts/Roboto-BoldItalic.ttf"),
          "italic": require("./assets/fonts/Roboto-Italic.ttf"),
          "light": require("./assets/fonts/Roboto-Light.ttf"),
          "lightItalic": require("./assets/fonts/Roboto-LightItalic.ttf"),
          "medium": require("./assets/fonts/Roboto-Medium.ttf"),
          "mediumItalic": require("./assets/fonts/Roboto-MediumItalic.ttf"),
          "regular": require("./assets/fonts/Roboto-Regular.ttf"),
          "thin": require("./assets/fonts/Roboto-Thin.ttf"),
          "thinItalic": require("./assets/fonts/Roboto-ThinItalic.ttf"),
        });

      } 
      
      catch(error){
        console.log(error);
      }

      finally {
        setLoaded(true);
      }
    };
    prepare();
  }, 2000)

  const onLayout = useCallback( async()=>{
      if(loaded){
        await SplashScreen.hideAsync();
      }
  }, [loaded])

  if(!loaded){
    return null;
  }
  return (
    <SafeAreaProvider 
      style={styles.container}
      onLayout={onLayout}>
      <SafeAreaView>
  
        <Text style={styles.label}>What Up Girl!</Text>

      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  label: {
    color: 'blue',
    fontSize: 18,
    fontFamily: "black"
  },
});
