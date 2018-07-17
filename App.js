import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Gauge from './Components/Gauge';
import BtnsBox from './Components/BtnsBox';

export default class App extends React.Component {

  constructor(props) {
	  super(props);
	  this.state = {savings: 0};
  }

  render() {
    return (
      <View style={styles.container}>
	  	<Text style={styles.firstTitile}>My Savings</Text>
		<Gauge name='fullPart' hauteur={this.state.savings} />
		<BtnsBox  />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  firstTitile: {
	  fontSize: 30,
	  marginBottom: 15,
  }

});
