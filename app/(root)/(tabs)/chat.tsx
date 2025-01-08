import { View, Text, SafeAreaView } from "react-native";

const Chat = () => {
  return (
    <SafeAreaView>
      <View className="flex text-center justify-center">
        <Text className="color-red-600">Chat</Text>
        <Text>Welcome to the Chat screen!</Text>
      </View>
    </SafeAreaView>
  );
};

export default Chat;
