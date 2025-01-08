import { View, Text, SafeAreaView } from "react-native";

const Welcome = () => {
  return (
    <SafeAreaView>
      <View className="flex text-center justify-center">
        <Text className="color-red-600">Welcome</Text>
        <Text>Welcome to the Welcome screen!</Text>
      </View>
    </SafeAreaView>
  );
};

export default Welcome;
