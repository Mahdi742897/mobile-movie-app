import { Link } from "expo-router";
import { Text, View } from "react-native";
import "./global.css";

export default function Index() {
  return (
    <View className="flex-1 juidstify-center items-center">
      <Text className="text-primary text-5xl">Welcome</Text>
    </View>
  );
}
