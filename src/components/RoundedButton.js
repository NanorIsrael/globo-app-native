import React, {useState} from 'react'
import {View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import {TextInput as TextInputPaper} from 'react-native-paper'

export const RoundedButton = ({
	style = {},
	textStyle = {},
	size = 125,
	...props
}) => {
	return (
		<TouchableOpacity style={[styles(size).radius, style]}>
			<Text style={[textStyle]}>{props.title}</Text>
		</TouchableOpacity>
	)
}

const styles = (size) => StyleSheet.create({
	container: {
		flex: 1,
		padding: 50,

	},
	radius: {
		borderRadius: size / 2,
		width: size,
		height: size,
		alignItems: 'center',
		borderColor: "#fff",
		borderWidth: 2
	},
	title: {
		color: '#fff',
		padding: 16,
		fontSize: 16,
	},
	inputContainer: {
		
		paddingTop: 20,
	},
})