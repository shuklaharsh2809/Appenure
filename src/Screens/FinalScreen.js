import React, {useState} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import {useNavigation} from '@react-navigation/native';
const NamePage = () => {
  const navigation = useNavigation();
  const [names, setNames] = useState(['John', 'Jane', 'Alice']);

  const handleCreate = () => {
    // Here you can add your logic to create something with the names
    console.log('Create button pressed');
    navigation.navigate('UpdatedGroups');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Names</Text>
      {names.map((name, index) => (
        <Text key={index} style={styles.name}>
          {name}
        </Text>
      ))}
      <Button title="Create" onPress={handleCreate} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: 'skyblue',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  name: {
    fontSize: 18,
    marginBottom: 10,
  },
});

export default NamePage;
