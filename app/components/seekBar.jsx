import React, { Component } from "react";
import Slider from "@react-native-community/slider";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Dimensions,
} from "react-native";

function pad(n, width, z = 0) {
  n = n + "";
  return n.length >= width ? n : new Array(width - n.length + 1).join(z) + n;
}

const minutesAndSeconds = (position) => [
  pad(Math.floor(position / 60), 2),
  pad(position % 60, 2),
];

const SeekBar = ({ trackLength, currentPosition, onSeek, onSlidingStart }) => {
  const elapsed = minutesAndSeconds(currentPosition);
  const remaining = minutesAndSeconds(trackLength - currentPosition);
  return (
    <View style={styles.container}>
      <View style={{ flexDirection: "row" }}>
        <Text style={styles.text}>{elapsed[0] + ":" + elapsed[1]}</Text>
        <View style={{ flex: 1 }} />
        <Text style={[styles.text, { width: 40 }]}>
          {trackLength > 1 && "-" + remaining[0] + ":" + remaining[1]}
        </Text>
      </View>
      <Slider
        maximumValue={Math.max(trackLength, 1, currentPosition + 1)}
        onSlidingStart={onSlidingStart}
        onSlidingComplete={onSeek}
        value={currentPosition}
        style={styles.slider}
        minimumTrackTintColor="#fff"
        maximumTrackTintColor="#000"
        thumbTintColor="#000"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  slider: {
    marginTop: 0,
    width: "100%",
    justifyContent: "center",
    alignSelf: "center",
    paddingTop: 16,
  },
  container: {
    width: "70%",
    justifyContent: "center",
    alignSelf: "center",
    position: "absolute",
    top: Dimensions.get("window").height - 180,
    paddingLeft: 16,
    paddingRight: 16,
    paddingBottom: 16,
  },
  text: {
    color: "rgba(255, 255, 255, 0.72)",
    fontSize: 12,
    textAlign: "center",
  },
});

export default SeekBar;
