import { View, Text } from "react-native";

type Metric = {
  label: string;
  value: string;
  color: string;
};

type Props = {
  metrics?: Metric[];
};

const defaultMetrics: Metric[] = [
  { label: "Speaking", value: "Excellent", color: "#21C16B" },
  { label: "Pronunciation", value: "Great", color: "#4D8BFF" },
  { label: "Grammar", value: "Good", color: "#6C4EF5" },
];

export function AudioLessonFeedback({ metrics = defaultMetrics }: Props) {
  return (
    <View
      className="mx-3 mb-3 rounded-2xl bg-white px-4 py-4"
      style={{
        shadowColor: "#0D132B",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.06,
        shadowRadius: 8,
        elevation: 2,
      }}
    >
      <View className="flex-row items-center justify-around">
        {metrics.map((metric, index) => (
          <View key={metric.label} className="flex-1 items-center">
            {index > 0 ? (
              <View className="absolute left-0 top-0 bottom-0 w-px bg-border" />
            ) : null}
            <Text className="font-poppins text-xs text-text-secondary">
              {metric.label}
            </Text>
            <Text
              className="mt-1 font-poppins-semibold text-sm"
              style={{ color: metric.color }}
            >
              {metric.value}
            </Text>
          </View>
        ))}
      </View>
    </View>
  );
}
