import { StatusBar } from 'expo-status-bar';
import { useRef } from 'react';
import { StyleSheet, Animated, View, Button } from 'react-native';

export default function App() {
  console.group('This is from App.js...');

  const boxOpacityAnimationValue = useRef(new Animated.Value(0)).current;

  const handleFadeBox = ()=>{
    Animated.timing(boxOpacityAnimationValue, {
      duration: 1000,
      toValue: 1,
      delay: 200,
      useNativeDriver: true
    }).start();
  }

  const opacityStyle = {
    opacity: boxOpacityAnimationValue
  }

  const handleFadeOut = ()=>{
    Animated.timing(boxOpacityAnimationValue, {
      duration: 500,
      toValue: 0,
      useNativeDriver: true
    }).start();
  }

  const handleCallbackMethod = ()=>{
    Animated.timing(boxOpacityAnimationValue, {
      duration: 500, 
      toValue: 1,
      useNativeDriver: true
    }).start(()=>{
      // boxOpacityAnimationValue.setValue(0);  // when we don't need 'no delay or other things'
      Animated.timing(boxOpacityAnimationValue, {
        duration: 500,
        toValue: 0,
        useNativeDriver: true
      }).start();
    });
  }

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      <Animated.View style={[styles.box, opacityStyle]}></Animated.View>
      <Button onPress={handleFadeBox} title='Fade this Orange Box in' color={'black'}/>

      <Button onPress={handleFadeOut} color={'green'} title="Fade this Orange Box out"/>

      <Button onPress={handleCallbackMethod} title='Handle Callback method of timing' color={'blue'}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  box: {
    height: 200,
    width: 200,
    backgroundColor: 'orange',
    marginBottom: 40
  }
});
