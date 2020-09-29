import React, { useState } from 'react'
import { StyleSheet, Text, View, TextInput } from 'react-native'

export default function App() {
	const [name, setName] = useState('Lluis')
	const [age, setAge] = useState('25')

	return (
		<View style={styles.container}>
			<Text>Enter name: </Text>
			<TextInput 
				style={styles.input}
				placeholder='e.g. John Doe'
				onChangeText={(value) => setName(value)}
			/>

			<Text>Enter Age: </Text>
			<TextInput 
				style={styles.input}
				keyboardType='numeric'
				placeholder='e.g. 22'
				onChangeText={(value) => setAge(value)}
			/>
			<Text>name: {name}, age: {age}</Text>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center'
	},
	input: {
		borderWidth: 1,
		borderColor: '#777',
		padding: 8,
		margin: 10,
		width: 200
	}
})
