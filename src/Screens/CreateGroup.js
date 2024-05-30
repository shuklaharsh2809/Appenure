import React, {useState} from 'react';
import {View, TextInput, Button, StyleSheet} from 'react-native';

const CreateGroup = ({navigation}) => {
  // Accept navigation prop
  const [groupName, setGroupName] = useState('');

  const handleSelectContacts = () => {
    console.log('Contacts selected');
    navigation.navigate('SelectContacts');
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={[styles.input, {color: 'black'}]}
        placeholder="Group Name"
        onChangeText={text => setGroupName(text)}
        value={groupName}
      />
      <Button
        title="Select Contacts"
        onPress={handleSelectContacts}
        color="#007bff"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    backgroundColor: 'skyblue',
  },
  input: {
    width: '90%',
    height: 40,
    marginVertical: 10,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 25,
  },
});

export default CreateGroup;
