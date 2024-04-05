import { useState } from 'react';
import { StyleSheet, Text, View, Image, ImageBackground, TextInput, Alert, TouchableHighlight, Dimensions } from 'react-native';

export default function App() {
  const { width: screenWidth, height: screenHeight } = Dimensions.get('window');
  const [username, setUserName] = useState("")
  const [password, setPassword] = useState("")
  const Pressed = ()=> {
    Alert.alert(`Login Successfully! Hello ${username}`);
  }

  return (
    <View style={{ height: screenHeight }}>
      <ImageBackground
        source={{ uri: 'https://th.bing.com/th/id/R.d0990b59fcde31696efba6a30f73f7ee?rik=U1GwJ5frnMwtPQ&pid=ImgRaw&r=0' }}
        resizeMode='stretch'
        style={{ ...styles.container, width: null, height: null, padding: 15, opacity:.9 }} >

        <Image
          style={{ ...styles.image, width: 300, height: 180 }}
          source={{ uri: 'https://img.gurugamer.com/resize/1200x-/2019/07/19/sky-cover-e709.jpg' }}
          resizeMode='cover'
        />

        <View style={{ width: 300 }}>
          <Text style={{ writingDirection: 'rtl', textTransform: 'uppercase', fontStyle: 'italic' }}>Register</Text>
          <TextInput
            style={styles.textInput}
            onChangeText={setUserName}
            placeholder='USERNAME'
            value={username}
          />
          <TextInput
            style={styles.textInput}
            onChangeText={setPassword}
            placeholder='PASSWORD'
            secureTextEntry={true}
            value={password}
          />
          <TouchableHighlight style={{ ...styles.button }} onPress={Pressed}>
            <Text style={{ ...styles.text }}>
              Login
            </Text>
          </TouchableHighlight>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    borderRadius: 5,
    // padding: 10
  },
  button: {
    padding: 10,
    borderRadius: 4,
    backgroundColor: 'darkblue',
    alignItems: 'center'
  },
  textInput: {
    color: 'rgb(200, 200, 200)',
    backgroundColor: 'rgb(55 55 200)',
    borderRadius: 4,
    padding: 10,
  },
  text: {
    color: '#fff',
    fontWeight: 'bold',
    textTransform: 'uppercase'
  }
});
