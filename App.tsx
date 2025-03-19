// App.tsx
import { StyleSheet, Text, View } from 'react-native';
import { useState } from 'react';
import Input from './Input.tsx';
import React from 'react';

export default function App() {
  const [name, setName] = useState('');
  const [nim, setNim] = useState('');

  return (
    <View style={styles.container}>
      <Text>{name} {nim}</Text>
      <Input label="Name" placeholder="Input your name" value={name} onChangeText={setName} />
      <Input label="NIM" placeholder="Input your NIM" value={nim} onChangeText={setNim} keyboardType="numeric" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
});
