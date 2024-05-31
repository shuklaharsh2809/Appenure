import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const UpdatedGroups = () => {
  const navigation = useNavigation();

  const handleAddButtonPress = () => {
    navigation.navigate('AddGroup');
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={[styles.header, {color: 'black'}]}>Groups</Text>
        <TouchableOpacity onPress={handleAddButtonPress}>
          <Text style={styles.addButton}>Add</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.groupContainer}>
        <Text style={styles.groupName}>Masti</Text>
        <View style={styles.memberContainer}>
          <Text style={styles.memberName}>John</Text>
          <Text style={styles.memberName}>Amay</Text>
          <Text style={styles.memberName}>Doe</Text>
        </View>
      </View>

      <View style={styles.groupContainer}>
        <Text style={styles.groupName}>MakeFun</Text>
        <View style={styles.memberContainer}>
          <Text style={styles.memberName}>John</Text>
          <Text style={styles.memberName}>Amay</Text>
          <Text style={styles.memberName}>Doe</Text>
        </View>
      </View>

      <View style={styles.groupContainer}>
        <Text style={styles.groupName}>Bhaijii</Text>
        <View style={styles.memberContainer}>
          <Text style={styles.memberName}>John</Text>
          <Text style={styles.memberName}>Amay</Text>
          <Text style={styles.memberName}>Doe</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: 'skyblue',
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  addButton: {
    fontSize: 18,
    color: 'blue',
  },
  groupContainer: {
    marginBottom: 20,
  },
  groupName: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  memberContainer: {
    flexDirection: 'row', 
  },
  memberName: {
    fontSize: 16,
    marginRight: 10, 
  },
});

export default UpdatedGroups;
