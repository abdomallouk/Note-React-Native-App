import React, { useState } from "react";
import {
  Button,
  StyleSheet,
  TextInput,
  View,
  Modal,
  Image,
} from "react-native";

function GoalInput(props) {
  const [entredGoalText, setEntredGoalText] = useState("");
  function goalInputHandler(enterdText) {
    setEntredGoalText(enterdText);
  }

  function addGoalHandler() {
    props.onAddGoal(entredGoalText);
    setEntredGoalText("");
  }

  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
        <Image
          style={styles.image}
          source={require("../assets/images/goal.png")}
        />
        <TextInput
          style={styles.textInput}
          placeholder="Add your goal here"
          onChangeText={goalInputHandler}
          value={entredGoalText}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="Add Goal" onPress={addGoalHandler} />
          </View>

          <View style={styles.button}>
            <Button title="Cancel" onPress={props.onCancel} />
          </View>
        </View>
      </View>
    </Modal>
  );
}

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    // backgroundColor: "black",
    gap: 10,
  },
  image: {
    width: 100,
    height: 100,
    margin: 20,
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#cccccc",
    width: "100%",
    padding: 5,
  },
  buttonContainer: {
    marginTop: 10,
    flexDirection: "row",
    gap: 9,
  },
  button: {
    width: "30%",
    marginHorizontal: 8,
  },
});
