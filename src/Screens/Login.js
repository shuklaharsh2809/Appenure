import React, {useState} from 'react';
import {
  View,
  TextInput,
  TouchableOpacity,
  Text,
  StyleSheet,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const Login = () => {
  const [username, setUsername] = useState('');
  const navigation = useNavigation();

  const handleLogin = () => {
    //console.log('Username:', username);

    if (username === 'abc') {
      navigation.navigate('AddGroup');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Login</Text>
      <TextInput
        style={[styles.input, {color: 'black'}]}
        placeholder="Username"
        onChangeText={text => setUsername(text)}
        value={username}
      />
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'skyblue',
  },
  header: {
    fontSize: 24,
    marginBottom: 20,
  },
  input: {
    width: '80%',
    height: 40,
    marginVertical: 10,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 5,
  },
  button: {
    width: '80%',
    height: 40,
    backgroundColor: 'yellow',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  buttonText: {
    color: 'black',
    fontSize: 16,
  },
});

export default Login;
