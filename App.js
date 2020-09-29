import React, { useState } from 'react'
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native'
import Header from './components/header'

export default function App() {
	const [todos, setTodos] = useState([
		{text: 'Get groceries', key: '1'},
		{text: 'learn Expo', key: '2'}
	])

	return (
		<View style={styles.container}>
			<Header />
			<View style={styles.content}>
				{/* to form  */}
				<View style={styles.list}>
					<FlatList
						// keyExtractor={()}
						data={todos}
						renderItem={({item}) => (
							<Text>{item.text}</Text>
						)}
					/>
				</View>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
	},
	content: {
		padding: 40,
	},
	list: {

	}
})
