import React, { Component } from "react";
import {Button, Modal, StyleSheet, View, TextInput} from "react-native";

export default class NewQuote extends Component {

    state = { content: null, author: null };

    render() {
        if(this.props.visible === false) {
            return null;
        }
        return (
            <Modal visible={this.props.visible} 
            onRequestClose={this.props.onSave}
            animationType="slide"
            >
                <View style={styles.container}>
                <TextInput style={[styles.input, { height: 150 }]} placeholder="Inhalt des Zitats" multiline={true} onChangeText={text => this.setState({ content: text})} />
                <TextInput style={styles.input} placeholder="Autors" onChangeText={text => this.setState({ author: text})} />
                <Button title="Speichern" onPress={() => {
                    this.setState({ content: null, author: null});
                    this.props.onSave (this.state.content, this.state.author)}} />
                </View>
            </Modal>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'flex-start',
        paddingTop: 100
    },
    input: {
        borderWidth: 1,
        borderColor: 'deepskyblue',
        borderRadius: 4,
        width: '80%',
        marginBottom: 20,
        fontSize: 20,
        padding: 10,
        height: 50

    }
});

