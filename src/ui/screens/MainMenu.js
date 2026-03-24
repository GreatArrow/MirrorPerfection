import React from 'react';
import { View, Text, Dropdown, Switch, Button } from 'react-native';

const MainMenu = () => {
  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 24, marginBottom: 20 }}>Main Menu</Text>
      <Dropdown
        label="Select Activity"
        data={["Activity 1", "Activity 2", "Activity 3"]}
        style={{ marginBottom: 20 }}
      />
      <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 20 }}>
        <Text style={{ marginRight: 10 }}>Male</Text>
        <Switch style={{ marginRight: 20 }} />
        <Text>Female</Text>
      </View>
      <Button title="Import Video" onPress={() => {}}/>
      <Button title="Notes" onPress={() => {}} style={{ marginTop: 10 }}/>
    </View>
  );
};

export default MainMenu;