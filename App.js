import React from "react";
import { StyleSheet, Text, View, StatusBar } from "react-native";
import MusicPlayer from "./app/components/musicPlayer";

export default function App() {
  StatusBar.setBarStyle("light-content");
  return (
    <View style={styles.container}>
      <MusicPlayer />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#222",
  },
});
