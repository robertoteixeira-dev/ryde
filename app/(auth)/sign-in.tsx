import { View, Text, SafeAreaView } from "react-native";

const SignIn = () => {
  return (
    <SafeAreaView>
      <View className="flex text-center justify-center">
        <Text className="color-red-600">SignIn</Text>
        <Text>Welcome to the SignIn screen!</Text>
      </View>
    </SafeAreaView>
  );
};

export default SignIn;
