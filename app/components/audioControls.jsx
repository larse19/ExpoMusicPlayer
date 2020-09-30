import React, { Component, useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableHighlight,
  Dimensions,
} from "react-native";

const AudioControls = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  handlePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  handleSkip = () => {
    console.log("Skipped");
    //TODO
  };

  handlePrev = () => {
    console.log("Previous");
    //TODO
  };

  return (
    <View style={styles.view}>
      <TouchableHighlight
        style={[styles.buttons, styles.prev]}
        onPress={handlePrev}
      >
        <Text>Prev</Text>
      </TouchableHighlight>

      <TouchableHighlight
        style={[styles.buttons, styles.play]}
        onPress={handlePlayPause}
      >
        <Text>{isPlaying ? "Pause" : "Play"}</Text>
      </TouchableHighlight>

      <TouchableHighlight
        style={[styles.buttons, styles.skip]}
        onPress={handleSkip}
      >
        <Text>Skip</Text>
      </TouchableHighlight>
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    top: Dimensions.get("window").height * 0.85,
    flexDirection: "row",
    justifyContent: "center",
  },
  buttons: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: "green",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
  },
  skip: {
    position: "relative",
    left: 50,
  },
  prev: {
    position: "relative",
    right: 50,
  },
  play: {
    width: 70,
    height: 70,
    borderRadius: 35,
  },
});

export default AudioControls;
