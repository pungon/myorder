
import React from 'react';
import { View, Modal, Text, TouchableOpacity, StyleSheet } from 'react-native';

type ConfirmationModalProps = {
  isVisible: boolean;
  productName: string;
  onConfirm: () => void;
  onCancel: () => void;
};

const ConfirmationModal: React.FC<ConfirmationModalProps> = ({ isVisible, productName, onConfirm, onCancel }) => {
  return (
    <Modal
      transparent={true}
      animationType="slide"
      visible={isVisible}
      onRequestClose={onCancel}
    >
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <Text style={styles.modalText}>ยืนยันการลบ {productName}?</Text>
          <View style={styles.buttonContainer}>
            <TouchableOpacity onPress={onCancel} style={styles.button}>
              <Text style={styles.textStyle}>ยกเลิก</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={onConfirm} style={styles.button2}>
              <Text style={styles.textStyle}>ยืนยัน</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};
const styles = StyleSheet.create({
centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
    paddingHorizontal:40
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  buttonContainer: {
    flexDirection: 'row',
    alignSelf: 'center',
    marginTop: 10
  },
  button: {
    backgroundColor: "#04AEFD",
    padding: 10,
    borderRadius: 10,
    marginHorizontal: 10
  },
  button2: {
    color: 'white',
    backgroundColor: '#FF7B53',
    padding: 10,
    borderRadius: 10,
    marginHorizontal: 10
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  }
});

export default ConfirmationModal;
