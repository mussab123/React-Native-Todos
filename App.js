import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, FlatList, TouchableOpacity } from 'react-native';
import React, { useState } from "react";
import Header from './components/header';
import TodoItem from './components/todoItem';
import { LogBox } from 'react-native';
import AddTodo from "./components/addtodo";


export default function App() {


  const [todos, setTodos] = useState([
    { text: 'buy coffee', key: '1'},
    { text: 'create an app', key: '2'},
    { text: 'play on the switch', key: '3'}
  ]);

  const submitHandler = (text) => {
    setTodos([...todos, {text: text, key: Math.random().toString()}])
   }

  const presshandler = (key) => {
    setTodos((prevTodos) => {
      return prevTodos.filter(todo => todo.key != key);
    });
  }

  return (
    <View style={styles.container}>

      <Header />

      <View style={styles.content}>


        <View style={styles.list}>

          <AddTodo submitHandler={submitHandler} />


          <FlatList 


            data={todos}
            renderItem={( { item } ) => (


              <TodoItem item={item} presshandler={presshandler}/>

            )}  
          
          
          
          />

        </View>
      </View>


          
    </View>


  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  
    backgroundColor: '#fff',
   
  },

  content: {
    padding: 40,
  },


  list: {
    marginTop: 20,
  }


 

});

