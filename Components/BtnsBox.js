import React from 'react';
import { Alert, Button, StyleSheet, View, Text } from 'react-native';

class BtnsBox extends React.Component {
	_onPressLess() {
		Alert.alert('Why did you spend this money ?!');
	}
	__onPressMore() {
		Alert.alert('Yes ! Congratulations !');
	}

	constructor(props) {
  	  super(props);
    }

	render() {
		return (
			<View style={btnstyle.container} >
				<View style={btnstyle.btnsContainer} >
					<Button title="-" color="orange" onPress={this._onPressLess}/>
				</View>
				<View style={btnstyle.btnsContainer} >
					<Button title="+" color="chartreuse" onPress={this.__onPressMore} />
				</View>
			</View>
		);
	}
}

const btnstyle = StyleSheet.create({
	container: {
		flexDirection: 'row',
	},
	btnsContainer: {
		margin: 20,
	}
});

export default BtnsBox;
