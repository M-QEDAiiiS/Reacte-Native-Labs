import {
  View,
  Text,
  StyleSheet,
  TextInput,
  FlatList,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import { Button, RadioButton } from "react-native-paper";
import routes from "../../../utilies/routes";


export default function Todo({ navigation }) {
  const [text, setText] = useState("");
  const [tasks, setTasks] = useState([]);
  const [done, setDone] = useState(0);


  const addTask = () => {
    if (text.trim()) {
      setTasks([...tasks, { text: text, complete: false }]);
      setText("");
    }
  };

  const deleteTask = (index) => {
    const newArr = [...tasks];
    newArr.splice(index);
    setTasks(newArr);
  };

  const doneFun = (index) => {
    const newTasks = [...tasks];
    newTasks[index].complete = !newTasks[index].complete;
    setTasks(newTasks);
    setDone(newTasks.filter((task) => task.complete).length);
  };

  const renderTask = ({ item, index }) => (
    <View style={todoStyle.taskCard}>
      <Text
        style={[
          { color: "white", fontSize: 18, width: 100 },
          item.complete && todoStyle.throw,
        ]}
      >
        {item.text}
      </Text>

      <View
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          width: 120,
        }}
      >
        <Button
          icon="delete"
          textColor="white"
          onPress={() => deleteTask(index)}
        ></Button>

        <RadioButton
          color="#4bf879"
          uncheckedColor="white"
          value="done"
          status={item.complete ? "checked" : "unchecked"}
          onPress={() => doneFun(index)}
        ></RadioButton>
        <Text style={{ color: "white" }}>Done</Text>
      </View>
    </View>
  );

  return (
    <>
      <ScrollView style={todoStyle.body}>
        <View style={todoStyle.container}>
          <View style={todoStyle.addSec}>
            <TextInput
              value={text}
              onChangeText={(value) => setText(value)}
              placeholder="Enter Your Task"
              placeholderTextColor="#83b589"
              cursorColor="#4bf879"
              style={todoStyle.input}
            />

            <Button
              onPress={addTask}
              textColor="white"
              style={{ backgroundColor: "#83b589" }}
            >
              Add
            </Button>
          </View>

          {/* <Button onPress={()=>{navigation.navigate(routes.Home);}}>Go to Home</Button>
          <Button onPress={()=>{navigation.navigate(routes.Phonecontact);}}>Go to Phone Contact</Button> */}

          {tasks.length != 0 ? (
            <Text style={todoStyle.counter}>
              {done} done of {tasks.length}{" "}
            </Text>
          ) : (
            ""
          )}

          <FlatList
            data={tasks}
            renderItem={renderTask}
            keyExtractor={(item, index) => index.toString()}
          ></FlatList>
        </View>
      </ScrollView>
    </>
  );
}


const todoStyle = StyleSheet.create({
  body: {
    backgroundColor: "#2c3c44",
    color: "white",
  },
  container: {
    flex: 1,
    alignItems: "center",
    // marginTop: 23,
    width: 300,
    margin: "auto",
  },
  appbar: {
    color: "white",
    backgroundColor: "#83b589",
    width: 400,
    textAlign: "center",
    fontSize: 30,
    fontWeight: "bold",
    height: 50,
    paddingTop: 10,
  },
  addSec: {
    display: "flex",
    flexDirection: "row",
    marginTop: 15,
    alignItems: "center",
  },
  input: {
    width: 250,
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    paddingLeft: 20,
    borderColor: "#4bf879",
    borderRadius: 30,
    color: "#83b589",
  },
  taskCard: {
    display: "flex",
    flexDirection: "row",
    width: 300,
    justifyContent: "space-evenly",
    alignItems: "center",
    marginVertical: 10,
    padding: 10,
    backgroundColor: "#83b589",
    borderRadius: 30,
  },
  throw: {
    textDecorationLine: "line-through",
    color: "black",
  },
  counter: {
    color: "#4bf879",
  },
});


