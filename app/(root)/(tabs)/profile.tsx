import { View, Text, SafeAreaView } from "react-native";

const Profile = () => {
  return (
    <SafeAreaView>
      <View className="flex text-center justify-center">
        <Text className="color-red-600">Profile</Text>
        <Text>Welcome to the Profile screen!</Text>
      </View>
    </SafeAreaView>
  );
};

export default Profile;
