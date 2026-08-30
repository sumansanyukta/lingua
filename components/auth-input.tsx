import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import {
  KeyboardTypeOptions,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

type AuthInputProps = {
  label: string;
  value: string;
  onChangeText: (text: string) => void;
  autoCapitalize?: "none" | "sentences" | "words" | "characters";
  keyboardType?: KeyboardTypeOptions;
  secureTextEntry?: boolean;
};

export function AuthInput({
  label,
  value,
  onChangeText,
  autoCapitalize = "sentences",
  keyboardType = "default",
  secureTextEntry = false,
}: AuthInputProps) {
  const [focused, setFocused] = useState(false);
  const [isSecure, setIsSecure] = useState(secureTextEntry);

  return (
    <View
      className={`relative h-[60px] justify-end rounded-2xl border bg-white px-[18px] pb-[8px] ${
        focused ? "border-primary" : "border-border"
      }`}
    >
      <Text className="absolute left-[18px] top-[6px] text-[11px] leading-[13px] text-text-secondary">
        {label}
      </Text>
      <TextInput
        value={value}
        onChangeText={onChangeText}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        autoCapitalize={autoCapitalize}
        keyboardType={keyboardType}
        secureTextEntry={isSecure}
        placeholder={label}
        placeholderTextColor="#6B7280"
        selectionColor="#6C4EF5"
        className={`font-poppins-medium text-[16px] leading-[20px] text-text ${
          secureTextEntry ? "pr-[44px]" : ""
        }`}
      />
      {secureTextEntry ? (
        <TouchableOpacity
          onPress={() => setIsSecure((prev) => !prev)}
          hitSlop={12}
          className="absolute right-[16px] top-[20px]"
        >
          <Ionicons name={isSecure ? "eye-off" : "eye"} size={22} color="#6B7280" />
        </TouchableOpacity>
      ) : null}
    </View>
  );
}