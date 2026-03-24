import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, Slider } from 'react-native';

const MirrorMode = () => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [speed, setSpeed] = useState(1);
  const [mirrorPercentage, setMirrorPercentage] = useState(100);

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const adjustSpeed = (value) => {
    setSpeed(value);
  };

  const adjustMirrorPercentage = (value) => {
    setMirrorPercentage(value);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Mirror Mode</Text>
      <View style={styles.videoViewer}>
        <Text>Video Viewer</Text>
        <Text>{isPlaying ? 'Playing...' : 'Paused'}</Text>
      </View>
      <Button title={isPlaying ? 'Pause' : 'Play'} onPress={togglePlayPause} />
      <Text>Speed: {speed}x</Text>
      <Slider
        minimumValue={0.5}
        maximumValue={2}
        step={0.1}
        value={speed}
        onValueChange={adjustSpeed}
      />
      <Text>Mirror Percentage: {mirrorPercentage}%</Text>
      <Slider
        minimumValue={0}
        maximumValue={100}
        step={1}
        value={mirrorPercentage}
        onValueChange={adjustMirrorPercentage}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  videoViewer: {
    width: '100%',
    height: 200,
    backgroundColor: '#eee',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
});

export default MirrorMode;