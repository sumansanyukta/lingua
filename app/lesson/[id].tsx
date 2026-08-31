import { useRouter, Stack } from "expo-router";
import { useState } from "react";
import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { AudioLessonHeader } from "@/components/audio-lesson/audio-lesson-header";
import { AudioLessonStage } from "@/components/audio-lesson/audio-lesson-stage";
import { AudioLessonFeedback } from "@/components/audio-lesson/audio-lesson-feedback";
import { BottomTabBar } from "@/components/bottom-tab-bar";

type AudioLessonControl = "camera" | "mic" | "subtitles" | "endCall";

export default function LessonScreen() {
  const router = useRouter();

  const [cameraOn, setCameraOn] = useState(false);
  const [micOn, setMicOn] = useState(true);
  const [subtitlesOn, setSubtitlesOn] = useState(true);

  const handleToggle = (control: AudioLessonControl) => {
    switch (control) {
      case "camera":
        setCameraOn((prev) => !prev);
        break;
      case "mic":
        setMicOn((prev) => !prev);
        break;
      case "subtitles":
        setSubtitlesOn((prev) => !prev);
        break;
    }
  };

  const handleEndCall = () => {
    router.back();
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#FFFFFF" }} edges={["top"]}>
      <Stack.Screen options={{ headerShown: false }} />

      <View style={{ flex: 1 }}>
        <AudioLessonHeader onBack={() => router.back()} />

        <AudioLessonStage
          currentPhrase="¡Muy bien!"
          currentTranslation="That was great! 👏"
          showSubtitles={subtitlesOn}
          cameraOn={cameraOn}
          micOn={micOn}
          subtitlesOn={subtitlesOn}
          onToggle={handleToggle}
          onEndCall={handleEndCall}
        />

        <AudioLessonFeedback />
      </View>

      <BottomTabBar active="ai-teacher" />
    </SafeAreaView>
  );
}
