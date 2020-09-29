import React, { useState } from 'react'
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native'

export default function App() {
	const [people, setPeople] = useState([
		{name: 'Lluis', id: '1'},
		{name: 'Arvelito', id: '2'},
		{name: 'Rafinha', id: '3'},
		{name: 'Luigi', id: '4'},
		{name: 'Peach', id: '5'},
		{name: 'Toad', id: '6'},
		{name: 'Bowser', id: '7'},
		{name: 'Waluigi', id: '8'}
	])

	const pressHandler = (id) => {
		setPeople((prevPeople) => {
			return prevPeople.filter(person => person.id !== id)
		})
	}

	return (
		<View style={styles.container}>
			<FlatList
				numColumns={2}
				keyExtractor={(item) => item.id}
				data={people}
				renderItem={({ item }) => (
					<TouchableOpacity
						onPress={() => pressHandler(item.id)}
					>
						<Text style={styles.item}>{item.name}</Text>
					</TouchableOpacity>
				)}
			/>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		paddingTop: 40,
		paddingHorizontal: 20
		// alignItems: 'center',
		// justifyContent: 'center'
	},
	item: {
		marginTop: 24,
		padding: 30,
		backgroundColor: 'pink',
		fontSize: 24,
		marginHorizontal: 10,
		marginTop: 24
	}
})
