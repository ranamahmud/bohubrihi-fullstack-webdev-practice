import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, ScrollView } from 'react-native';
import ListItem from './Components/ListItem';
export default function App() {
  const [inputValue, setInputValue] = useState("");
  const [placeList, setPlaceList] = useState([]);
  return (
    <View style={styles.container}>
      <View style={styles.inputView}>
        <TextInput style={{
          width: "80%",
          borderBottomWidth: 1,
          borderColor: "green",
          padding: 7
        }}
          placeholder="Add a place..."
          value={inputValue}
          onChangeText={text => setInputValue(text)}
        />
        <Button title="Add" onPress={() => {
          if (inputValue !== "") {
            setPlaceList([...placeList, { key: Math.random().toString(), value: inputValue }])
          }

        }} />
      </View>
      <FlatList style={{ width: '100%' }}
        data={placeList}
        renderItem={(info) => {
          return (
            <ListItem placeName={info.item.value} onItemPressed={() => alert(info.item.value)} />
          )
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flexStart',
  },
  inputView: {
    padding: 20,
    width: "100%",
    marginTop: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  }
});
