import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Button} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const SelectContacts = () => {
  const navigation = useNavigation(); 
  const [contacts, setContacts] = useState([
    {id: 1, name: 'John Doe', isSelected: false},
    {id: 2, name: 'Jane Smith', isSelected: false},
    {id: 3, name: 'Alice Johnson', isSelected: false},
    {id: 4, name: 'Bob Brown', isSelected: false},
    {id: 5, name: 'Emily Davis', isSelected: false},
  ]);

  const handleContactPress = id => {
    const updatedContacts = contacts.map(contact =>
      contact.id === id
        ? {...contact, isSelected: !contact.isSelected}
        : contact,
    );
    setContacts(updatedContacts);
  };

  const handleSubmit = () => {
   
    console.log(
      'Selected Contacts:',
      contacts.filter(contact => contact.isSelected),
    );
   
    navigation.navigate('FinalScreen');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Contacts</Text>
      {contacts.map(contact => (
        <TouchableOpacity
          key={contact.id}
          style={[
            styles.contact,
            {backgroundColor: contact.isSelected ? '#e6f2ff' : 'transparent'},
          ]}
          onPress={() => handleContactPress(contact.id)}>
          <Text style={styles.contactName}>{contact.name}</Text>
        </TouchableOpacity>
      ))}
      <Button title="Submit" onPress={handleSubmit} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: 'skyblue',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  contact: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginBottom: 10,
    borderRadius: 5,
    width: '100%',
  },
  contactName: {
    fontSize: 16,
    color: 'black',
  },
});

export default SelectContacts;
