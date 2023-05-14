import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import { store } from './store';
import HomeScreen from './screens/HomeScreen';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function App() {
	return (
		// `<Provider>` component makes the Redux store available to
		// any nested components that need to access the Redux store
		<Provider store={store}>
			<SafeAreaProvider>
				<View style={styles.container}>
					<HomeScreen></HomeScreen>
				</View>
			</SafeAreaProvider>
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
