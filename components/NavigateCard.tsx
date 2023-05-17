import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import tw from 'twrnc';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { GOOGLE_MAPS_APIKEY } from '@env';
import { useDispatch } from 'react-redux';
import { setDestination } from '../slices/navSlice';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '../types/navigation';
import NavFavourties from './NavFavourties';

const NavigateCard = () => {
	const dispatch = useDispatch();
	const navigation = useNavigation<StackNavigationProp>();

	return (
		<SafeAreaView style={tw`bg-white flex-1`}>
			<Text style={tw`text-center py-5 text-xl`}>Good Morning, Austin</Text>
			<View style={tw`border-t border-gray-200 flex-shrink`}>
				<View>
					<GooglePlacesAutocomplete
						placeholder='Where to?'
						styles={styles}
						fetchDetails={true}
						enablePoweredByContainer={false}
						minLength={2}
						nearbyPlacesAPI='GooglePlacesSearch'
						debounce={400}
						onPress={(data, details = null) => {
							dispatch(
								setDestination({
									location: details?.geometry.location,
									description: data.description,
								})
							);
							navigation.navigate('RideOptionsCard');
						}}
						query={{
							key: GOOGLE_MAPS_APIKEY,
							language: 'en',
						}}
					></GooglePlacesAutocomplete>
				</View>

				<NavFavourties />
			</View>
		</SafeAreaView>
	);
};

export default NavigateCard;

const styles = StyleSheet.create({
	container: {
		backgroundColor: 'white',
		paddingTop: 20,
		flex: 0,
	},
	textInput: {
		backgroundColor: '#dddddf',
		borderRadius: 0,
		fontSize: 18,
	},
	textInputContainer: {
		paddingHorizontal: 20,
		paddingBottom: 0,
	},
});
