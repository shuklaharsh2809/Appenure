import React, {useState, useEffect} from 'react';
import {View, Text, TouchableOpacity, Modal, StyleSheet} from 'react-native';

const AddGroup = ({navigation}) => {
  const [isModalVisible, setIsModalVisible] = useState(true);

  const handleGoToNextPage = () => {
    // Navigate to the next page here
    navigation.navigate('CreateGroup');
  };

  // Ensure the modal is always visible on page refresh by setting isModalVisible to true on component mount
  useEffect(() => {
    setIsModalVisible(true);
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Groups</Text>
        <TouchableOpacity style={styles.addButton} onPress={handleGoToNextPage}>
          <Text style={styles.addButtonText}>Add</Text>
        </TouchableOpacity>
      </View>
      <Modal
        visible={isModalVisible}
        transparent={true}
        animationType="slide"
        onRequestClose={() => setIsModalVisible(false)}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Create Group</Text>
            <TouchableOpacity
              style={styles.modalButton}
              onPress={handleGoToNextPage}>
              <Text style={styles.modalButtonText}>Create</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'skyblue',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
  },
  addButton: {
    paddingVertical: 5,
    paddingHorizontal: 10,
    backgroundColor: '#007bff',
    borderRadius: 5,
  },
  addButtonText: {
    color: '#fff',
    fontSize: 16,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    elevation: 5,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: 'black',
  },
  modalButton: {
    backgroundColor: '#007bff',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  modalButtonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default AddGroup;
