import React, { useState } from "react";
import { StyleSheet, TextInput, Button, View } from 'react-native';



export default function AddTodo({submitHandler}){


    const [text, setText] = useState("");

    return(
    <View>

        <TextInput style={styles.input} placeholder="new todo..."  onChangeText={newText => setText(newText)}/>
        <Button color='coral' title="Submit" onPress={() => submitHandler(text)}/>
    </View>

    )
}



const styles = StyleSheet.create({
    input: {
        marginBottom: 10,
        paddingHorizontal: 8,
        paddingVertical: 6,
        borderBottomWidth: 1,
        borderBottomColor: "#ddd"
    }
})