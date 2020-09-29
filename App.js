import React, { useState } from 'react'
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native'
import Header from './components/header'
import TodoItem from './components/todoitem'

export default function App() {
	const [todos, setTodos] = useState([
		{text: 'Get groceries', key: '1'},
		{text: 'learn Expo', key: '2'}
	])

	const pressHandler = (key) => {
		setTodos((prevTodos) => {
			return prevTodos.filter(todo => todo.key !== key)
		})
	}

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
							<TodoItem 
								item={item}
								pressHandler={pressHandler}
							/>
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
