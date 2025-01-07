import { StatusBar } from "expo-status-bar";
import { View, Text, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen() {
  return (
    <SafeAreaView className="flex-1 items-center justify-center bg-red-600">
      <Text className="text-lg font-bold">New Project</Text>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}
