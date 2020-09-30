import React, { Componen, useEffect } from "react";
import { View } from "react-native";
import AudioControls from "./audioControls";
import SeekBar from "./seekBar";
import TrackPlayer, {
  useTrackPlayerProgress,
  usePlaybackState,
  useTrackPlayerEvents,
} from "react-native-track-player";

const MusicPlayer = ({ currentTrack }) => {
  useEffect(() => {
    setup();
  }, []);

  async function setup() {
    await TrackPlayer.setupPlayer({});
    await TrackPlayer.updateOptions({
      stopWithApp: true,
      capabilities: [
        TrackPlayer.CAPABILITY_PLAY,
        TrackPlayer.CAPABILITY_PAUSE,
        TrackPlayer.CAPABILITY_SKIP_TO_NEXT,
        TrackPlayer.CAPABILITY_SKIP_TO_PREVIOUS,
        TrackPlayer.CAPABILITY_STOP,
      ],
      compactCapabilities: [
        TrackPlayer.CAPABILITY_PLAY,
        TrackPlayer.CAPABILITY_PAUSE,
      ],
    });
  }

  async function getProgres() {
    return await useTrackPlayerProgress();
  }

  return (
    <View>
      <AudioControls />
      <SeekBar
        trackLength={progress.duration}
        currentPosition={progress.position}
      />
    </View>
  );
};

export default MusicPlayer;
