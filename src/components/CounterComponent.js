import React from "react";
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement, reset } from "../actions/Actions";
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const CounterComponent = () => {
    const count = useSelector((state) => state.count);
    const dispatch = useDispatch();

    return (
        <View style={styles.container}>
            <Text style={styles.counterText}>Count: {count}</Text>
            <View style={styles.buttonContainer}>
                <TouchableOpacity
                    style={styles.decrementButton}
                    onPress={() => dispatch(decrement())}
                >
                    <Text style={styles.buttonText}>Decrement</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.incrementButton}
                    onPress={() => dispatch(increment())}
                >
                    <Text style={styles.buttonText}>Increment</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.resetButton}
                    onPress={() => dispatch(reset())}
                >
                    <Text style={styles.buttonText}>Reset</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    counterText: {
        fontSize: 24,
        marginBottom: 20,
    },
    buttonContainer: {
        flexDirection: 'row',
    },
    decrementButton: {
        backgroundColor: '#e74c3c',
        padding: 10,
        margin: 5,
        borderRadius: 5,
    },
    incrementButton: {
        backgroundColor: '#2ecc71',
        padding: 10,
        margin: 5,
        borderRadius: 5,
    },
    resetButton: {
        backgroundColor: '#3498db',
        padding: 10,
        margin: 5,
        borderRadius: 5,
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default CounterComponent;
