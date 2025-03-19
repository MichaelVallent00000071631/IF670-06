// App.js
import { StyleSheet, Text, View } from 'react-native';
import { useState } from 'react';
import Input from './Input';

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


// import { StyleSheet, Text, View, TextInput } from 'react-native';
// import { useState } from 'react';

// const NameInput = ({ name, onChangeText }) => {
//   console.log(name);
//     return (
//       <View>
//         <Text>Name</Text>
//         <TextInput
//           placeholder="Input your name"
//           style={{
//             borderColor: "black",
//             borderWidth: 1,
//             padding: 10,
//             borderRadius: 8,
//           }}
//           onChangeText={onChangeText}
//         />
//       </View>
//     );
// };

// const NumberInput = ({ nim, onChangeText }) => {
//   console.log(nim);
//     return (
//       <View>
//         <Text>NIM</Text>
//         <TextInput
//           placeholder="Input your NIM"
//           style={{
//             borderColor: "black",
//             borderWidth: 1,
//             padding: 10,
//             borderRadius: 8,
//           }}
//           onChangeText={onChangeText}
//           keyboardType="numeric"
//         />
//       </View>
//     );
// };
// export default function App() {
//   const [ name, setName ] = useState("");
//   const [ nim, setNim ] = useState("");

//   const handleChangeMyName = (value) => {
//     setName(value);
//   }

//   const handleChangeMyNim = (value) => {
//     setNim(value);
//   }

//   return (
//     <View style={styles.container}>
//       <Text>{name} {nim}</Text>
//       <NameInput name={name} onChangeText={handleChangeMyName}/>
//       <NumberInput nim={nim} onChangeText={handleChangeMyNim}/>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//     flex: 1,
//   },
// });
