import Navigation from './components/Navigation';
import { SettingsContext, WorkoutContext } from './components/Contexts'
import { useState } from 'react';
import { PaperProvider } from 'react-native-paper';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import	Style, { MyTheme } from './styles/Style';

export default function App() {

	const [workouts, setWorkouts] = useState([])
	const [lengthUnit, setLengthUnit] = useState('km')

	return (
		<WorkoutContext.Provider value={{workouts, setWorkouts}}>
			<PaperProvider theme={MyTheme}
				<SafeAreaProvider>
					<Navigation/>
				</SafeAreaProvider>
			</PaperProvider>
		</WorkoutContext.Provider>
	);
}