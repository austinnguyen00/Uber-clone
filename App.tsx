import * as React from 'react';

import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Provider } from 'react-redux';
import { store } from './store';
import { StackParamList } from './types/navigation';

import HomeScreen from './screens/HomeScreen';
import MapScreen from './screens/MapScreen';

export default function App() {
	// Create an object that map route name to the params of the route
	// to type check route name and params

	// `createNativeStackNavigator` is a function that returns an object that
	// containing 2 properties: `Screen` and `Navigator`
	// Both are React components used for configuring the navigator
	const Stack = createNativeStackNavigator<StackParamList>();

	return (
		// `<Provider>` component makes the Redux store available to
		// any nested components that need to access the Redux store
		<Provider store={store}>
			{/* React Navigation Wrapper */}
			{/* `NavigationContainer` is a component which manages our navigation tree
				This component must wrap all navigators structure */}
			<NavigationContainer>
				{/* React Native Elements Wrapper */}
				<SafeAreaProvider>
					{/* `Navigator` should contain `Screen` elements as its children 
					to define the configuration for routes */}
					<Stack.Navigator>
						<Stack.Screen
							name='HomeScreen'
							component={HomeScreen}
							options={{
								headerShown: false,
							}}
						/>
						<Stack.Screen
							name='MapScreen'
							component={MapScreen}
							options={{
								headerShown: false,
							}}
						/>
					</Stack.Navigator>
				</SafeAreaProvider>
			</NavigationContainer>
		</Provider>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		// alignItems: 'center',
		// justifyContent: 'center',
	},
});
