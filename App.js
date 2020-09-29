import React, { useState } from 'react'
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native'
import Header from './components/header'
import TodoItem from './components/todoitem'
import AddTodo from './components/addtodo'

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

	const submitHandler = (text) => {
		setTodos((prevTodos) => {
			return [{
				text,
				key: Math.random().toString()
			},
			...prevTodos]
		})
	}

	return (
		<View style={styles.container}>

			<Header />

			<View style={styles.content}>

				<AddTodo 
					submitHandler={submitHandler}
				/>

				<View style={styles.list}>

					<FlatList
						keyExtractor={todos => todos.key}
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
