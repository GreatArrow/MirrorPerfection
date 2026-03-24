import React from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';

const ActivitySelector = ({ people, onSelectPerson }) => {
    return (
        <View>
            <Text>Select a Person</Text>
            <FlatList
                data={people}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => onSelectPerson(item)}>
                        <Text>{item.name}</Text>
                    </TouchableOpacity>
                )}
            />
        </View>
    );
};

export default ActivitySelector;