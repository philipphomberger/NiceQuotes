import React from 'react';
import { Button, StyleSheet, Text, View, Alert } from 'react-native';
import Quote from './js/components/Quote';
import NewQuote from './js/components/NewQuote';
import AsyncStorage from '@react-native-async-storage/async-storage'
const data = [
  {text: 'Denke lieber an das, was du hast, als an das, was dir fehlt!', author: 'Mark Aurel'},
  {text: 'Wie Seele hat die Farbe deiner Gedanken', author: 'Mark Aurel' },
  {text: 'Unser Leben ist das, wozu unser Denken es macht', author: 'Mark Aurel'},
  {text: 'Wie du am Ende deines Lebens wünschest gelebt zu haben, so kannst du jetzt schon leben', author: 'Mark Aurel' }
];
 
export default class App extends React.Component {
  state = { index: 0, showNewQuoteScreen: false, quotes: data }; //initialer zustand
  
  _retrieveData = async () => {
    // AsyncStorage.getItem('QUOTES').then(value => { 
    //   if (value !== null) {
    //   value = JSON.parse(value)
    //   this.setState({quotes: value})
    //   }
    // });

    //asyncawait

    let value = await AsyncStorage.getItem('QUOTES');
      if (value !== null) {
        value = JSON.parse(value);
        this.setState({ quotes: value });
      }
  }

  _storeData(quotes) {
    AsyncStorage.setItem('QUOTES', JSON.stringify(quotes)); 
  }

  _addQuote = (text, author) => {
    let { quotes } = this.state;
    if (text && author) {
     quotes.push({text, author});
     // Speichern von Files
     this._storeData(this.state.quotes);
    }
    this.setState({ showNewQuoteScreen: false, quotes });
  }

  _removeQuote = () => {
    let { index, quotes } = this.state;
    quotes.splice(index, 1);
    this._storeData(quotes);
  }

  componentDidMount() {
    this._retrieveData();
  }

  render() {
    let { index, quotes } = this.state
    const quote = quotes[index];
    let nextIndex = index + 1;
    if (nextIndex === quotes.length) nextIndex = 0;
    if (lastIndex === 0) {
      let lastIndex = quotes.length
    }
    let lastIndex = index - 1;
    
    return (
      <View style={styles.container}>
        <View style={styles.button2}>
        <Button title="NewQuote"
         onPress={() => this.setState({showNewQuoteScreen: true})} 
         />
         </View>
         <NewQuote visible={this.state.showNewQuoteScreen}
          onSave={this._addQuote} />
        <Quote text={quote.text} author={quote.author} />
        <View style={styles.button}>
          <Button title="Nächstes Zitat" 
          onPress={() => this.setState({ index: nextIndex})}
          />
        </View>
        <View style={styles.loeschen}>
          <Button title="Löschen" 
          onPress={this._removeQuote}
          />
        </View>
      </View>
    );
  }
}
 
const styles = StyleSheet.create({
  button: {
    position: 'absolute',
    bottom: 50
  },
  button2: {
    position: 'absolute',
    top: 10,
    right: 10
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  loeschen: {
    top: 10,
    left: 10,
    position: 'absolute' 
  }
});