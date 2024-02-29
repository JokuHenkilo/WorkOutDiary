import { NavigationContainer } from '@react-navigation/native';
import AddWorkout from '../screens/AddWorkout';
import ListOfWorkOuts from '../screens/ListOfWorkOuts';
import { MaterialIcons } from '@expo/vector-icons';
import { createMaterialBottomTabNavigator } from 'react-native-paper/react-navigation';
import { PaperProvider } from 'react-native-paper';
import { Style, MyTheme } from '../styles/Style'

const Tab = createMaterialBottomTabNavigator()

export default function App() {

	return (
		<PaperProvider theme={MyTheme}>
			<NavigationContainer>
				<Tab.Navigator 
					style={Style.container}
					activeColor= '#4a9fcc'
					inactiveColor= '#d0ae27'
					barStyle={{ backgroundColor: '#f9e9f6' }}
				<Tab.Screen 
					name="Add Workout" 
					component={AddWorkout} 
					options={{tabBarIcon: () => 
						<MaterialIcons name='add' size={30} color='#4a9fcc'/>}} />
				<Tab.Screen 
					name='List of workouts' 
					component={ListOfWorkOuts} 
					options={{tabBarIcon: () => 
						<MaterialIcons name='list' size={30} color='#4a9fcc'/>}}/>
				 </Tab.Navigator>
			</NavigationContainer>
		</PaperProvider>	
	);
}