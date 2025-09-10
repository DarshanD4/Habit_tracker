import { useAuth } from "@/lib/auth-context";
import { Text, View,StyleSheet} from "react-native";
import { Button } from "react-native-paper";
import React from "react";

export default function Index() {
  const { signOut } = useAuth();
  return (
    <View style={styles.view}>
      <Text>hi welcome to Habit tracker</Text>
      <Button mode="text" onPress={signOut} icon={"logout"}>{" "}Sign Out</Button>
    </View>
  );
}
const styles= StyleSheet.create({
  view: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  navButton: {
    width: 100,
    height: 20,
    backgroundColor: "coral",
    borderRadius: 8,
    textAlign: "center",
  }
})