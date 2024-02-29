import { FlatList, View } from "react-native";
import { Divider, Text } from "react-native-paper";
import { useContext } from "react";
import { Style } from "../styles/Style";

export default function ListOfWorkOuts() {

	const {workouts} = useContext(WorkoutContext)

	return (
		<View style={Style.containers}>
			<Text variant="headlineMedium" style={Style.header}>List of workouts</Text>
			<View style={Style.listContainer}>
			<FlatList
				style={Style.list}
				data={workouts}
				renderItem={({item}) => <Item workout={item}/>}
			/>
			</View>
		</View>
	)
}

function Item({workout}) {

	let d = workout.date.day + '.' + workout.date.month + '.' + workout.date.year
	let unit = lengthUnit === 'km' ? 'km' : 'miles'

	return (
		<View>
			<Text variant="titleMedium">{workout.value}</Text>
			<Text>{d}</Text>
			<Text>Distance: {distance} {unit} </Text>
			<Text>Duration: {workout.duration} min</Text>
			<Divider bold={true} style={Style.divider} />
		</View>
	)
}


