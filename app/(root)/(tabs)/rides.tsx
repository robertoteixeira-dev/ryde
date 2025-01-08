import { View, Text, SafeAreaView } from "react-native";

const Rides = () => {
  return (
    <SafeAreaView>
      <View className="flex text-center justify-center">
        <Text className="color-red-600">Rides</Text>
        <Text>Welcome to the Rides screen!</Text>
      </View>
    </SafeAreaView>
  );
};

export default Rides;
