import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

class Gauge extends React.Component {



	render() {
		return (
			<Text>Hauteur {this.props.name} : {this.props.hauteur}</Text>
		);
	}
}



export default Gauge;
