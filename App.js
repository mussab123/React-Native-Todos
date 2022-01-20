import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, FlatList, TouchableOpacity, Alert,TouchableWithoutFeedback, Keyboard } from 'react-native';
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



const pressHandler = (key) => {

  setTodos((prevTodos) => {
    return (
      prevTodos.filter(todo =>  key != todo.key)
    )
  })
}


function submitHandler (text){

  if(text.length > 3){
    setTodos( [
      ...todos,
      {text: text, key: Math.random().toString()}
    ])
  }
  else{
    Alert.alert(title="ooops!", 'todos must be over 3 chars long', [
      {text: 'Understoon', onPress: () => console.log('alert closed')}
    ])
  }



}



  return (

    <TouchableWithoutFeedback onPress={() => {
      Keyboard.dismiss();
      console.log('dismissed keyboard')

    }}>

    
    <View style={styles.container}>

      <Header />

      <View style={styles.content}>

          <AddTodo submitHandler={submitHandler}/>

        <View style={styles.list}>


          <FlatList

          data={todos}

          renderItem={({ item }) => (


            <TodoItem item={item} pressHandler={pressHandler}/>


          )}




          />

   

        </View>
      </View>


          
    </View>

    </TouchableWithoutFeedback>


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

