import React, {useState} from 'react'
import { StyleSheet, View, Text, TextInput } from 'react-native';
import {TextInput as TextInputPaper} from 'react-native-paper'
import { RoundedButton } from '../../components/RoundedButton';

export const Focus = () => {
	const [focusSubject, setFocusSubject] = useState(null);

	return (
		<View style={styles.container}>
			<View style={styles.titleContainer}>
				<Text style={styles.title}>What would you like to focus on?</Text>
			<View style={styles.inputContainer}>
				<TextInputPaper />
				<RoundedButton title="+"/>
			</View>

			</View>
			<TextInput />
		</View>
	)
}


const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 50,

	},
	title: {
		color: '#ffffff',
		fontWeight: "bold",
		fontSize: 16
	},
	titleContainer: {
		flex: 0.5,
		padding: 16,
		justifyContent: 'center',

	},
	inputContainer: {
		
		paddingTop: 20,
	},
})