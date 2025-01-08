import { View, Text, SafeAreaView } from "react-native";

const Home = () => {
  return (
    <SafeAreaView>
      <View className="flex text-center justify-center">
        <Text className="color-red-600">Home</Text>
        <Text>Welcome to the Home screen!</Text>
      </View>
    </SafeAreaView>
  );
};

export default Home;
