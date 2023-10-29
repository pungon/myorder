
import React from 'react';
import {  Text, StyleSheet, TouchableOpacity } from 'react-native';

type LayoutButtonProps = {
    title: string;
    onPress: () => void;
}

const LayoutButton = ({ title, onPress }: LayoutButtonProps) => {
    return (
        <TouchableOpacity onPress={onPress} style={styles.customButton}>
            <Text style={styles.buttonText}>{title}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20
    },
    flex1: {
        flex:1
    },
    padH: {
        paddingHorizontal: 5
    },
    customButton: {
        backgroundColor: "#27B8FC",
        padding: 10,
        borderRadius: 10, 
        alignItems: 'center', 
    },
    buttonText: {
        color: 'white', 
        fontWeight: 'bold',
    },
});

  
export default LayoutButton;