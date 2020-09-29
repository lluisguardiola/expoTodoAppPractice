import React from 'react';
import { View, Text, TextInput, Button } from 'react-native';

class App extends React.Component {

	state = {
		todo: "This is our message on screen"
	}
	
	render(){
		return (
			<View style={styles.viewStyle}>
				<Text>Hello world</Text>
				<TextInput
          style={styles.inputStyle}
          onChangeText={(text) => this.setState({todo: text})}
				/>
				<Button
					title="Add to-do"
					color="green"
				/>
				<Text>{this.state.todo}</Text>
			</View>
		)
	}
}

const styles = {
	viewStyle: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center'
	},
	inputStyle: {
    width: '100%',
		height: 40,
		borderColor: 'green',
		borderWidth: 1
	}
}

export default App