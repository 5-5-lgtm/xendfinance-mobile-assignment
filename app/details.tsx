import { View, Text, Button } from "react-native";
import { useLocalSearchParams, useRouter } from "expo-router";

export default function Details() {
  const { id } = useLocalSearchParams();
  const router = useRouter();

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ fontSize: 20 }}>Viewing Item ID: {id}</Text>
      <Button title="Go Back" onPress={() => router.back()} />
    </View>
  );
}