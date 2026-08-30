import { Platform, Pressable, StyleSheet, Text, View, ViewStyle } from "react-native";

type PrimaryButtonProps = {
  label: string;
  onPress: () => void;
};

const GRADIENT = "linear-gradient(135deg, #6c4ef5, #5b3bf6)";

const buttonStyles = StyleSheet.create({
  native: {
    experimental_backgroundImage: GRADIENT,
  } as ViewStyle,
  web: {
    backgroundImage: GRADIENT,
  } as ViewStyle,
});

export function PrimaryButton({ label, onPress }: PrimaryButtonProps) {
  return (
    <Pressable
      onPress={onPress}
      className="active:opacity-80 disabled:opacity-50"
    >
      <View
        className="flex-row h-[56px] items-center justify-center rounded-[20px]"
        style={Platform.OS === "web" ? buttonStyles.web : buttonStyles.native}
      >
        <Text className="font-poppins-semibold text-[18px] text-white">
          {label}
        </Text>
      </View>
    </Pressable>
  );
}