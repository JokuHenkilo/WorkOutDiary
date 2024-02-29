import { StyleSheet } from "react-native";
import Constants from "expo-constants";
import { StatusBar } from "expo-status-bar";
import { MD3LightTheme } from "react-native-paper";

export const MyTheme = {
	...MD3LightTheme,
	roundness: 10,
	colors: {
		...MD3LightTheme.colors,
		primary: '#eadc28',
		onPrimary:'#ffffff',
		surfaceVariant: 'orange',
		onSurface: '#ec721e',
		outline: 'black',
		secondaryContainer: 'rgba(40,238,199,0.74)'
	}
}

const Style = StyleSheet.create({
	container: {
		marginTop: Constants.statusBarHeight + 10
	},
	imageBg: {
		flex: 1
	},
	containers: {
		padding: 10
	},
	header: {
		padding: 10
	},
	dateButton: {
		marginTop: 10
	},
	iconContainer: {
		marginRight: 10
	},
	dateText: {
		fontSize: 16,
		color: '#000000',
	},
	textInput: {
		marginTop: 8
	},
	addButton: {
		marginTop: 10
	},
	listContainer: {
		padding: 15
	},
	divider: {
		margin: 10,
		color: '#2997d2',
		borderBottomWidth: 1
	}
})

export {Style}