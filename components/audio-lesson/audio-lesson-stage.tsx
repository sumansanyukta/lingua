import { Ionicons } from "@expo/vector-icons";
import { Image } from "expo-image";
import { Pressable, Text, View } from "react-native";

import { images } from "@/constants/images";

type Props = {
  currentPhrase?: string;
  currentTranslation?: string;
  showSubtitles: boolean;
  cameraOn: boolean;
  micOn: boolean;
  subtitlesOn: boolean;
  onToggle: (control: "camera" | "mic" | "subtitles") => void;
  onEndCall: () => void;
};

const localControls: {
  key: "camera" | "mic" | "subtitles";
  icon: keyof typeof Ionicons.glyphMap;
  label: string;
}[] = [
  { key: "camera", icon: "videocam-outline", label: "Camera" },
  { key: "mic", icon: "mic-outline", label: "Mic" },
  { key: "subtitles", icon: "chatbubble-ellipses-outline", label: "Subtitles" },
];

export function AudioLessonStage({
  currentPhrase,
  currentTranslation,
  showSubtitles,
  cameraOn,
  micOn,
  subtitlesOn,
  onToggle,
  onEndCall,
}: Props) {
  const stateMap = { camera: cameraOn, mic: micOn, subtitles: subtitlesOn };

  return (
    <View className="mx-3 flex-1 overflow-hidden rounded-3xl" style={{ marginTop: 4 }}>
      {/* Full-bleed indoor cozy room background */}
      <Image
        source={images.indoorCozyRoom}
        contentFit="cover"
        style={{ position: "absolute", inset: 0 }}
      />

      {/* Warm overlay gradient at bottom for control legibility */}
      <View
        className="absolute bottom-0 left-0 right-0"
        style={{
          height: "55%",
          backgroundColor: "rgba(13, 19, 43, 0.28)",
        }}
      />

      {/* Speech overlay card — centered on the room background */}
      {showSubtitles && currentPhrase ? (
        <View
          style={{
            position: "absolute",
            top: "45%",
            left: "50%",
            transform: [{ translateX: "-50%" }, { translateY: "-50%" }],
            width: "90%",
          }}
        >
          <View
            className="rounded-[20px] bg-white px-4 py-4"
            style={{
              shadowColor: "#0D132B",
              shadowOffset: { width: 0, height: 4 },
              shadowOpacity: 0.12,
              shadowRadius: 12,
              elevation: 4,
            }}
          >
            <View className="flex-row items-center justify-between">
              <View className="flex-1">
                <Text className="font-poppins-semibold text-[16px] leading-6 text-text">
                  {currentPhrase}
                </Text>
                <Text className="mt-1 font-poppins text-sm leading-5 text-text-secondary">
                  {currentTranslation}
                </Text>
              </View>
              <Pressable className="ml-3 h-9 w-9 items-center justify-center rounded-full bg-[#4D8BFF]/10 active:opacity-60">
                <Ionicons name="volume-high" size={18} color="#4D8BFF" />
              </Pressable>
            </View>
          </View>
        </View>
      ) : null}

      {/* Call controls — lower portion of the stage */}
      <View className="absolute bottom-4 left-0 right-0 flex-row items-end justify-center gap-4">
        {localControls.map((ctrl) => {
          const isActive = stateMap[ctrl.key];
          const activeIcon =
            ctrl.key === "camera"
              ? "videocam"
              : ctrl.key === "mic"
                ? "mic"
                : "chatbubble-ellipses";
          return (
            <Pressable
              key={ctrl.key}
              onPress={() => onToggle(ctrl.key)}
              className="items-center active:opacity-70"
            >
              <View
                className="h-14 w-14 items-center justify-center rounded-full bg-white"
                style={{
                  shadowColor: "#0D132B",
                  shadowOffset: { width: 0, height: 2 },
                  shadowOpacity: 0.15,
                  shadowRadius: 6,
                  elevation: 3,
                }}
              >
                <Ionicons
                  name={isActive ? activeIcon : ctrl.icon}
                  size={22}
                  color="#0D132B"
                />
              </View>
              <Text className="mt-1.5 font-poppins text-[11px] text-white">
                {ctrl.label}
              </Text>
            </Pressable>
          );
        })}

        {/* End Call — red destructive */}
        <Pressable onPress={onEndCall} className="items-center active:opacity-70">
          <View
            className="h-14 w-14 items-center justify-center rounded-full bg-[#FF4D4F]"
            style={{
              shadowColor: "#FF4D4F",
              shadowOffset: { width: 0, height: 2 },
              shadowOpacity: 0.3,
              shadowRadius: 6,
              elevation: 3,
            }}
          >
            <Ionicons name="call" size={22} color="#FFFFFF" />
          </View>
          <Text className="mt-1.5 font-poppins text-[11px] text-white">
            End Call
          </Text>
        </Pressable>
      </View>
    </View>
  );
}
