import React from 'react';
import { View, Text, TextInput, Button } from 'react-native';

class App extends React.Component {

	state = {
    text: "",
    toDos: ["Get groceries", "Learn React Native"]
  }
  
  addTodo = () => {
    this.setState({
      text: "",
      toDos: [...this.state.toDos, this.state.text]
    })
  }

  renderTodos = () => {
    return this.state.toDos.map(todo => <Text key={todo}>{todo}</Text>)
  }
	
	render(){
		return (
			<View style={styles.viewStyle}>
				<Text>Hello world</Text>
				<TextInput
          style={styles.inputStyle}
          onChangeText={(text) => this.setState({text})}
          value={this.state.text}
				/>
				<Button
					title="Add to-do"
          color="green"
          onPress={this.addTodo}
				/>
				{this.renderTodos()}
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