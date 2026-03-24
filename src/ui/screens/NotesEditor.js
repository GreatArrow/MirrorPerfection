import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

const NotesEditor = () => {
    const [weaknesses, setWeaknesses] = React.useState('');
    const [improvementPlans, setImprovementPlans] = React.useState('');

    return (
        <View style={styles.container}>
            <Text style={styles.heading}>Weaknesses</Text>
            <TextInput
                style={styles.input}
                value={weaknesses}
                onChangeText={setWeaknesses}
                placeholder="Enter weaknesses..."
            />
            <Text style={styles.heading}>Improvement Plans</Text>
            <TextInput
                style={styles.input}
                value={improvementPlans}
                onChangeText={setImprovementPlans}
                placeholder="Enter improvement plans..."
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 20,
    },
    heading: {
        fontSize: 24,
        marginBottom: 10,
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 20,
        paddingLeft: 10,
    },
});

export default NotesEditor;
