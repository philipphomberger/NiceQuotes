import React, { Component, Fragment } from 'react';
import { Text, StyleSheet, View } from 'react-native';

export default class Quote extends Component {
    render() {
        const { text, author} = this.props;
        return(
            <View style={styles.container}>
            <Text style={styles.text}>{ this.props.text }</Text>
            <Text style={styles.author}>&mdash; { this.props.author } </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 20
    },
    text: {
        fontSize: 36,
        fontStyle: 'italic',
        marginBottom: 10
    },
    author: {
        fontSize: 20,
        textAlign: 'right'
    }

})