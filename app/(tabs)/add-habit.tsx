import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Button, SegmentedButtons, TextInput } from "react-native-paper";

const FREQUENCIES = ["DAILY", "WEEKLY", "MONTHLY"];

export default function AddHabitScreen() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [frequency, setFrequency] = useState("DAILY");

  return (
    <View style={styles.container}>
      <TextInput
        label="Title"
        mode="outlined"
        style={styles.input}
        value={title}
        onChangeText={setTitle}
      />
      <TextInput
        label="Description"
        mode="outlined"
        style={styles.input}
        value={description}
        onChangeText={setDescription}
      />
      <View style={styles.frequencyContainer}>
        <SegmentedButtons
          value={frequency}
          onValueChange={setFrequency}
          buttons={FREQUENCIES.map((freq) => ({
            value: freq,
            label: freq.charAt(0).toUpperCase() + freq.slice(1).toLowerCase(),
          }))}
        />
      </View>
      <Button
        mode="contained"
        onPress={() => console.log({ title, description, frequency })}
      >
        Add Habit
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#F5F5F5",
    justifyContent: "center",
  },
  input: {
    marginBottom: 16,
  },
  frequencyContainer: {
    marginBottom: 24,
  },
});
