import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  const [value, onChangeText] = React.useState('Useless Placeholder');
  const  handleInputChange = text =>{
    console.log(text)
  }
  return (
    <View style={styles.container}>
      <Text>Hello World</Text>
      <Text>My First React Native App</Text>
      <TextInput
      style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
      onChangeText={text => handleInputChange(text)}
      value={value}
    />
      <StatusBar style="auto" />
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
});
